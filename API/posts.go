package API

import (
	"database/sql"
	"log"
	"net/http"
	"time"

	"github.com/denisenkom/go-mssqldb"
	"github.com/dgrijalva/jwt-go"
)

func CreateToken(w http.ResponseWriter, r *http.Request) {
	log.Println("creating token")
	email := r.FormValue("email")
	if len(email) == 0 {
		RespondWithError(w, http.StatusBadRequest, "Email not provided.")
		return
	}
	pass := r.FormValue("pass")
	if len(pass) == 0 {
		RespondWithError(w, http.StatusBadRequest, "Password not provided.")
		return
	}
	ctx, err := processConnectionError(bum_db)
	if err != nil {
		RespondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}

	admin := false
	var accountID mssql.UniqueIdentifier
	query := "SELECT admin, accountID FROM users WHERE email=@eml AND active=1"
	err = bum_db.QueryRowContext(ctx, query, sql.Named("eml", email)).Scan(&admin, &accountID)
	if processSQLError(w, err) {
		return
	}
	if admin == false {
		RespondWithError(w, http.StatusForbidden, "Only administrative users can create API tokens.")
		return
	}

	// we have a good payload ~ generate a token
	var jwtKey = []byte(apiSecret)
	expirationTime := time.Now().Add(JWT_EXPIRE_TIME)
	// Create the JWT claims, which includes the username and expiry time
	type Claims struct {
		Name    string `json:"name"`
		Account string `json:"accountID"`
		jwt.StandardClaims
	}
	claims := &Claims{
		Name:    email,
		Account: accountID.String(),
		StandardClaims: jwt.StandardClaims{
			// In JWT, the expiry time is expressed as unix milliseconds
			ExpiresAt: expirationTime.Unix(),
		},
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	// Create the JWT string
	tokenString, err := token.SignedString(jwtKey)
	if err != nil {
		RespondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}

	type ApiKey struct {
		Expires time.Time `json:"expires"`
		Issued  time.Time `json:"issued"`
		Token   string    `json:"token"`
	}
	k := ApiKey{}
	k.Token = tokenString
	k.Issued = time.Now()
	k.Expires = expirationTime
	respondWithJson(w, http.StatusOK, k)
}
