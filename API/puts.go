package API

import (
	//"log"
	"net/http"

	"github.com/gorilla/mux"
)

func OpenContainer(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	containerID := vars["id"]
	if containerID == "" {
		RespondWithError(w, http.StatusBadRequest, "Missing containerID")
		return
	}
	ctx, err := processConnectionError(bum_db)
	if err != nil {
		RespondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}

	type Container struct {
		Id        string `json:"id"`
		DecorId   string `json:"decor_id"`
		Open      bool   `json:"open"`
		ImgOpen   string `json:"img_open"`
		ImgClosed string `json:"img_closed"`
		Locked    bool   `json:"locked"`
	}

	container := Container{}
	query := "SELECT * from containers WHERE decor_id=?"
	err = bum_db.QueryRowContext(ctx, query, containerID).Scan(&container.Id, &container.DecorId, &container.Open,
		&container.ImgClosed, &container.ImgOpen, &container.Locked)
	if processSQLError(w, err) {
		return
	}
	//log.Println(container)
	if container.Locked == true {
		RespondWithError(w, http.StatusUnauthorized, "It's locked.")
		return
	}
	if container.Open == true {
		RespondWithError(w, http.StatusConflict, "It's already open.")
		return
	}
	query = "UPDATE containers SET open=1 WHERE decor_id=?"
	_, err = bum_db.Exec(query, container.DecorId)
	if processSQLError(w, err) {
		return
	}
	respondWithJson(w, http.StatusOK, container)
}

func CloseContainer(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	containerID := vars["id"]
	if containerID == "" {
		RespondWithError(w, http.StatusBadRequest, "Missing containerID")
		return
	}
	ctx, err := processConnectionError(bum_db)
	if err != nil {
		RespondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}

	type Container struct {
		Id        string `json:"id"`
		DecorId   string `json:"decor_id"`
		Open      bool   `json:"open"`
		ImgOpen   string `json:"img_open"`
		ImgClosed string `json:"img_closed"`
		Locked    bool   `json:"locked"`
	}

	container := Container{}
	query := "SELECT * from containers WHERE decor_id=?"
	err = bum_db.QueryRowContext(ctx, query, containerID).Scan(&container.Id, &container.DecorId, &container.Open,
		&container.ImgClosed, &container.ImgOpen, &container.Locked)
	if processSQLError(w, err) {
		return
	}
	if container.Open == false {
		RespondWithError(w, http.StatusConflict, "It's already closed.")
		return
	}
	query = "UPDATE containers SET open=0 WHERE decor_id=?"
	_, err = bum_db.Exec(query, container.DecorId)
	if processSQLError(w, err) {
		return
	}
	respondWithJson(w, http.StatusOK, container)
}
