package main

import (
  "log"
  "math/rand"
  "net/http"
  "os"
  "path/filepath"
  "strings"
  "time"
  "github.com/gorilla/mux"
  //"github.com/dgrijalva/jwt-go"
  
  "jface/bumquest/API"
)

const (
  HTTP_PORT=":8080"
  API_PREFIX="/api"
)

func getStaticDir() string {
	dir, err := filepath.Abs(filepath.Dir(os.Args[0]))
	if err != nil {
		log.Fatal("staticdir", err)
	}
	var staticDir string
	if strings.Index(dir, "/bin") > -1 {
		staticDir = "/home/jface/work/src/pi/Nucleus/static/"
	} else {
		staticDir = dir + string(os.PathSeparator) + "static" + string(os.PathSeparator)
	}
	return staticDir
}

func validationMiddleware(next http.HandlerFunc) http.HandlerFunc {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		(w).Header().Set("Access-Control-Allow-Origin", "*")
		(w).Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		(w).Header().Set("Access-Control-Allow-Headers", "src, Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
		if (*r).Method == "OPTIONS" {
			return
		}
		
    next(w, r)
    /*
    authorizationHeader := r.Header.Get("Authorization")
		if authorizationHeader != "" {
			bearerToken := strings.Split(authorizationHeader, " ")
			if len(bearerToken) == 2 {
				token, err := jwt.Parse(bearerToken[1], func(token *jwt.Token) (interface{}, error) {
					if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
						API.RespondWithError(w, http.StatusBadRequest, "Error parsing token")
					}
					return []byte(API.GetSecret()), nil
				})
				switch err.(type) {
				case nil:
					if token.Valid {
						next(w, r)
					} else {
						API.RespondWithError(w, http.StatusUnauthorized, "Invalid authorization token")
						return
					}
				case *jwt.ValidationError: // something was wrong during the validation
					vErr := err.(*jwt.ValidationError)
					switch vErr.Errors {
					case jwt.ValidationErrorExpired:
						API.RespondWithError(w, http.StatusUnauthorized, "Token expired")
						return
					default:
						API.RespondWithError(w, http.StatusBadRequest, "Error parsing token")
						return
					}
				}
			}
		} else {
			API.RespondWithError(w, http.StatusBadRequest, "An authorization header is required")
			return
		}*/
	})
}

func main() {
  rand.Seed(time.Now().Unix())
  API.Initialize()
  rtr := mux.NewRouter()
  
  
  rtr.HandleFunc(API_PREFIX+"/account/{accountid:[0-9a-zA-Z-]+}", validationMiddleware(API.FetchAccount)).Methods("GET", "OPTIONS")
  rtr.PathPrefix("/").Handler(http.FileServer(http.Dir("./static/")))
  
  staticDir := http.Dir(getStaticDir())
  rtr.PathPrefix("/").Handler(http.FileServer(staticDir))
  http.Handle("/", rtr)
  
  log.Println("got some booze")
  log.Fatal(http.ListenAndServe(HTTP_PORT, nil))
}