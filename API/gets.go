package API

import (
  "net/http"
  "log"
  
  "github.com/gorilla/mux"
  
)

func FetchAccount(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	acctID := vars["accountid"]
	if acctID == "" {
		RespondWithError(w, http.StatusBadRequest, "Missing accountID")
		return
	}

	ctx, err := processConnectionError(bum_db)
	if err != nil {
		RespondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}
  
  
  type Account struct {
    Id             string `json:"id"`
  }

	acct := Account{}
  log.Println("id", acctID)
	query := "SELECT * FROM accounts WHERE accountID=?"
	err = bum_db.QueryRowContext(ctx, query, acctID).Scan(&acct.Id)
	if processSQLError(w, err) {
		return
	}
  log.Println(acct)
	respondWithJson(w, http.StatusOK, acct)
}