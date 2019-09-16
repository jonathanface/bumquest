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
	respondWithJson(w, http.StatusOK, area)
}

func FetchAreaNPCs(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	areaID := vars["areaid"]
	if areaID == "" {
		RespondWithError(w, http.StatusBadRequest, "Missing areaID")
		return
	}
	ctx, err := processConnectionError(bum_db)
	if err != nil {
		RespondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}
	log.Println("areaid", areaID)
	query := "SELECT * FROM npcs WHERE location=?"
	rows, err := bum_db.QueryContext(ctx, query, areaID)
	defer rows.Close()
	if processSQLError(w, err) {
		return
	}
	type NPC struct {
		Id       string  `json:"id"`
		Name     string  `json:"name"`
		Descr    string  `json:"descr"`
		Team     int     `json:"team"`
		Location string  `json:"location"`
		ImgX     float32 `json:"x"`
		ImgY     float32 `json:"y"`
	}
	var results []NPC
	for rows.Next() {
		npc := NPC{}
		err := rows.Scan(&npc.Id, &npc.Name, &npc.Descr, &npc.Team, &npc.Location, &npc.ImgX, &npc.ImgY)
		if processSQLError(w, err) {
			return
		}
		results = append(results, npc)
	}
	if len(results) == 0 {
		RespondWithError(w, http.StatusNotFound, "No results")
		return
	}
	respondWithJson(w, http.StatusOK, results)
}

func FetchAreaDecor(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	areaID := vars["areaid"]
	if areaID == "" {
		RespondWithError(w, http.StatusBadRequest, "Missing areaID")
		return
	}
	ctx, err := processConnectionError(bum_db)
	if err != nil {
		RespondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}
	log.Println("areaid", areaID)
	query := "SELECT * FROM decor WHERE location=?"
	rows, err := bum_db.QueryContext(ctx, query, areaID)
	defer rows.Close()
	if processSQLError(w, err) {
		return
	}
	type Decoration struct {
		Id        string  `json:"id"`
		Name      string  `json:"name"`
		Descr     string  `json:"descr"`
		Img       string  `json:"img"`
		Location  string  `json:"location"`
		X         float32 `json:"x"`
		Y         float32 `json:"y"`
		Container bool    `json:"container"`
		Door      bool    `json:"door"`
	}
	var results []Decoration
	for rows.Next() {
		decoration := Decoration{}
		err := rows.Scan(&decoration.Id, &decoration.Name, &decoration.Descr, &decoration.X, &decoration.Y,
			&decoration.Img, &decoration.Location, &decoration.Container, &decoration.Door)
		if processSQLError(w, err) {
			return
		}
		if decoration.Container {
			var is_open bool
			var closed_url string
			var open_url string
			query = "SELECT open_url, closed_url, open FROM containers WHERE decor_id=?"
			err = bum_db.QueryRowContext(ctx, query, decoration.Id).Scan(&open_url, &closed_url, &is_open)
			if processSQLError(w, err) {
				return
			}
			if is_open {
				decoration.Img = open_url
			} else {
				decoration.Img = closed_url
			}
		}
		results = append(results, decoration)
	}
	if len(results) == 0 {
		RespondWithError(w, http.StatusNotFound, "No results")
		return
	}
	respondWithJson(w, http.StatusOK, results)
}

func FetchAnimationCells(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]
	if id == "" {
		RespondWithError(w, http.StatusBadRequest, "Missing ID")
		return
	}
	ctx, err := processConnectionError(bum_db)
	if err != nil {
		RespondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}
	query := "SELECT * FROM animation_cells WHERE owner=?"
	rows, err := bum_db.QueryContext(ctx, query, id)
	defer rows.Close()
	if processSQLError(w, err) {
		return
	}
	type AnimationCell struct {
		Id       string `json:"id"`
		Owner    string `json:"owner"`
		Type     string `json:"type"`
		URL      string `json:"url"`
		Sequence string `json:"sequence"`
	}
	var results []AnimationCell
	for rows.Next() {
		cell := AnimationCell{}
		err := rows.Scan(&cell.Id, &cell.Owner, &cell.URL, &cell.Type, &cell.Sequence)
		if processSQLError(w, err) {
			return
		}
		results = append(results, cell)
	}
	if len(results) == 0 {
		RespondWithError(w, http.StatusNotFound, "No results")
		return
	}
	respondWithJson(w, http.StatusOK, results)
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
