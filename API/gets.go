package API

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func FetchArea(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	areaID := vars["areaid"]
	if areaID == "" {
		RespondWithError(w, http.StatusBadRequest, "Missing accountID")
		return
	}
	ctx, err := processConnectionError(bum_db)
	if err != nil {
		RespondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}

	type Area struct {
		Id          string `json:"id"`
		Name        string `json:"name"`
		Description string `json:"description"`
	}
	area := Area{}
	query := "SELECT * FROM areas WHERE id=?"
	err = bum_db.QueryRowContext(ctx, query, areaID).Scan(&area.Id, &area.Name, &area.Description)
	if processSQLError(w, err) {
		return
	}
	log.Println(area)
	respondWithJson(w, http.StatusOK, area)
}

func FetchWeapon(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	weaponID := vars["weaponid"]
	if weaponID == "" {
		RespondWithError(w, http.StatusBadRequest, "Missing weaponID")
		return
	}
	ctx, err := processConnectionError(bum_db)
	if err != nil {
		RespondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}

	type Weapon struct {
		Id     string `json:"id"`
		Name   string `json:"name"`
		Melee  bool   `json:"melee"`
		Damage string `json:"damage"`
		Speed  int    `json:"speed"`
		Icon   string `json:"icon_url"`
	}
	weapon := Weapon{}
	query := "SELECT * FROM weapons WHERE id=?"
	err = bum_db.QueryRowContext(ctx, query, weaponID).Scan(&weapon.Id,
		&weapon.Name,
		&weapon.Melee,
		&weapon.Damage,
		&weapon.Speed,
		&weapon.Icon)
	if processSQLError(w, err) {
		return
	}
	log.Println(weapon)
	respondWithJson(w, http.StatusOK, weapon)
}

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
		Id string `json:"id"`
	}

	acct := Account{}
	query := "SELECT * FROM accounts WHERE accountID=?"
	err = bum_db.QueryRowContext(ctx, query, acctID).Scan(&acct.Id)
	if processSQLError(w, err) {
		return
	}
	respondWithJson(w, http.StatusOK, acct)
}
