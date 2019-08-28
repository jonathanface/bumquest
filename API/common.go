package API

import (
	"context"
	"database/sql"
	"encoding/json"
	"errors"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"time"

	_ "github.com/go-sql-driver/mysql"
)

const (
	JWT_EXPIRE_TIME = 8 * time.Hour
)

var bum_db *sql.DB
var authID string
var apiSalt string
var apiSecret string

func Initialize() {
	dbConnect()
}

func dbConnect() {
	jsonFile, err := os.Open("config.json")
	if err != nil {
		log.Println(err)
	}
	defer jsonFile.Close()
	byteValue, _ := ioutil.ReadAll(jsonFile)

	type Config struct {
		AuthID    string `json:"authID"`
		ApiSalt   string `json:"apiSalt"`
		ApiSecret string `json:"apiSecret"`
		DBHost    string `json:"dbHost"`
		DBPort    string `json:"dbPort"`
		DBUser    string `json:"dbUser"`
		DBPass    string `json:"dbPass"`
		DBName    string `json:"dbName"`
	}
	config := Config{}
	json.Unmarshal(byteValue, &config)
	authID = config.AuthID
	apiSalt = config.ApiSalt
	apiSecret = config.ApiSecret
	dbConnStr := config.DBUser + ":" + config.DBPass + "@tcp(" + config.DBHost + ":" + config.DBPort + ")/" + config.DBName

	bum_db, err = sql.Open("mysql", dbConnStr)
	if err != nil {
		log.Fatal("Error creating connection pool:", err.Error())
	}
	log.Println("Connected to db!\n")
}

func GetSecret() string {
	return apiSecret
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
