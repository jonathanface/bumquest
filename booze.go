package main

import (
  "net/http"
  "strconv"
  "encoding/json"
  "log"
  "fmt"
  _ "github.com/go-sql-driver/mysql"
  "github.com/gorilla/mux"
  "github.com/gorilla/context"
  "github.com/jonathanface/bumquest/DBUtils"
)

const (
  SERVICE_PATH = "/service"
  PORT = ":85"
)
type Area struct {
  Aid int `json:"aid"`
  Title string `json:"title"`
  Description string `json:"description"`
  Walkpath string `json:"walk_path"`
  Walktype string `json:"walk_type"`
  Image string `json:"image"`
}
type ObjectInfo struct {
  Oid int `json:"oid"`
  Title string `json:"title"`
  Description string `json:"description"`
}
func forbidden (w http.ResponseWriter, err string) {
  http.Error(w, err, http.StatusForbidden)
}

func serverError (w http.ResponseWriter, err string) {
  http.Error(w, err, http.StatusInternalServerError)
}

func fileNotFound (w http.ResponseWriter, err string) {
  http.Error(w, err, http.StatusNotFound)
}

func badRequest (w http.ResponseWriter, err string) {
  http.Error(w, err, http.StatusBadRequest)
}

func writeSuccess(w http.ResponseWriter) {
  w.WriteHeader(http.StatusOK)
  w.Write([]byte("200 - Success"))
}

func handleArea(w http.ResponseWriter, r *http.Request) {
  log.Println("get area")
  aid, err := strconv.Atoi(mux.Vars(r)["[0-9]+"])
  if (err != nil) {
    log.Fatal(err)
    badRequest(w, err.Error())
    return
  }
  var area = Area{}
  db := DBUtils.OpenDB();
  db.QueryRow("select areaID,name,description,walkCoords,walkType,image from areas WHERE areaID = ?", aid).Scan(&area.Aid, &area.Title, &area.Description, &area.Walkpath, &area.Walktype, &area.Image)
  DBUtils.CloseDB(db)
  jsonData, err := json.Marshal(area)
  if (err != nil) {
    serverError(w, err.Error())
    return
  }
  fmt.Fprintf(w, string(jsonData))
}

func handleObjectInfo(w http.ResponseWriter, r *http.Request) {
  log.Println("get object info")
  oid, err := strconv.Atoi(mux.Vars(r)["[0-9]+"])
  if (err != nil) {
    log.Fatal(err)
    badRequest(w, err.Error())
    return
  }
  var info = ObjectInfo{}
  db := DBUtils.OpenDB();
  db.QueryRow("select objectID,name,description from objects WHERE objectID = ?", oid).Scan(&info.Oid, &info.Title, &info.Description)
  DBUtils.CloseDB(db)
  if len(info.Description) == 0 {
    fileNotFound(w, "No description")
    return
  }
  jsonData, err := json.Marshal(info)
  if (err != nil) {
    serverError(w, err.Error())
    return
  }
  fmt.Fprintf(w, string(jsonData))
}

func main() {
  rtr := mux.NewRouter()
  rtr.HandleFunc(SERVICE_PATH + "/area/{[0-9]+}", handleArea).Methods("GET")
  rtr.HandleFunc(SERVICE_PATH + "/object/{[0-9]+}/look", handleObjectInfo).Methods("GET")
  rtr.PathPrefix("/").Handler(http.FileServer(http.Dir("./static/")))
  http.Handle("/", rtr)
  
  log.Println("got some booze")
  http.ListenAndServe(PORT, context.ClearHandler(http.DefaultServeMux))
}