package API

import (
  "context"
  "encoding/json"
  "errors"
  "database/sql"
  "log"
  "net/http"
  "time"
  
  _ "github.com/go-sql-driver/mysql"
)

const (
	AUTH_ID          = "filthybum"
	API_SALT         = "bGTUVBJFk6"
	API_SECRET       = "3Rmton0u8qfp"
  
  JWT_EXPIRE_TIME  = 8 * time.Hour
)

var bum_db *sql.DB
//"username:password@tcp(127.0.0.1:3306)/test")
var dbConnStr = DB_USER + ":" + DB_PASS + "@tcp(" + DB_HOST + ":" + DB_PORT + ")/" + DB_BUMQUEST


func Initialize() {
  log.Println(dbConnStr)
	dbConnect()
}

func GetSecret() string {
	return API_SECRET
}

func dbConnect() {
	var err error
	bum_db, err = sql.Open("mysql", dbConnStr)
	if err != nil {
		log.Fatal("Error creating connection pool:", err.Error())
	}
	log.Println("Connected!\n")
}

func processConnectionError(db *sql.DB) (context.Context, error) {
	if db == nil {
		return nil, errors.New("Database uninitialized")
	}
	ctx := context.Background()
	// Check if database is alive.
	err := db.PingContext(ctx)
	if err != nil {
		dbConnect()
		ctx = context.Background()
		return ctx, nil
	}
	if err != nil {
		return ctx, err
	}
	return ctx, nil
}

func processSQLError(w http.ResponseWriter, err error) bool {
	switch {
	case err == sql.ErrNoRows:
		RespondWithError(w, http.StatusNotFound, err.Error())
		return true
	case err != nil:
		RespondWithError(w, http.StatusInternalServerError, err.Error())
		return true
	default:
		return false
	}
}

func RespondWithError(w http.ResponseWriter, code int, msg string) {
	respondWithJson(w, code, map[string]string{"error": msg})
}

func respondWithJson(w http.ResponseWriter, code int, payload interface{}) {
	response, _ := json.Marshal(payload)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(code)
	w.Write(response)
}