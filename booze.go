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
  Objects []Object `json:"objects"`
  WalkpathNodes []WalkpathNode `json:"walkpath_nodes"`
}
type LookInfo struct {
  Lid int `json:"lid"`
  Description string `json:"description"`
  Has_inventory int `json:"has_inventory"`
  Is_closed int `json:"is_closed"`
}
type TouchInfo struct {
  Tid int `json:"tid"`
  Has_inventory int `json:"has_inventory"`
  Is_closed int `json:"is_closed"`
  Is_locked int `json:"is_locked"`
  Contained_in int `json:"contained_in"`
}
type SpeakInfo struct {
  Sid int `json:"sid"`
  Description string `json:"description"`
}
type Object struct {
  Oid int `json:"oid"`
  Title string `json:"title"`
  Image_opened string `json:"image_opened"`
  Image_closed string `json:"image_closed"`
  X int `json:"x"`
  Y int `json:"y"`
  Has_inventory int `json:"has_inventory"`
  Is_closed int `json:"is_closed"`
  Is_locked int `json:"is_locked"`
  Contained_in int `json:"contained_in"`
}

type WalkpathNode struct {
  Nid int `json:"vid"`
  X int `json:"x"`
  Y int `json:"y"`
  Vertex string `json:"connects_with"`
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
  isValid, aid := convertAndVerifyStringToInt(mux.Vars(r)["[0-9]+"], w)
  if (!isValid) {
    return
  }
  var area = Area{}
  db := DBUtils.OpenDB();
  db.QueryRow("select areaID,name,description,walkCoords,walkType,image from areas WHERE areaID = ?", aid).Scan(&area.Aid, &area.Title, &area.Description, &area.Walkpath, &area.Walktype, &area.Image)

  rows, err := db.Query("select objectID,name,image_opened, image_closed ,x,y,is_closed,is_locked,contained_in,has_inventory from objects WHERE locationID = ?", aid)
  if (err != nil) {
    log.Fatal(err)
  }
  var objects []Object
  for rows.Next() {
    object := Object{}
    err = rows.Scan(&object.Oid, &object.Title, &object.Image_opened, &object.Image_closed, &object.X, &object.Y, &object.Is_closed, &object.Is_locked, &object.Contained_in, &object.Has_inventory)
    if err != nil {
      log.Fatal(err)
    }
    objects = append(objects, object)
  }
  area.Objects = objects
  
  rows, err = db.Query("select nodeID,x,y,vertex from walkpath_nodes WHERE areaID = ?", aid)
  if (err != nil) {
    log.Fatal(err)
  }
  var vertexes []WalkpathNode
  for rows.Next() {
    vertex := WalkpathNode{}
    err = rows.Scan(&vertex.Nid, &vertex.X, &vertex.Y, &vertex.Vertex)
    if err != nil {
      log.Fatal(err)
    }
    vertexes = append(vertexes, vertex)
  }
  area.WalkpathNodes = vertexes
  
  jsonData, err := json.Marshal(area)
  DBUtils.CloseDB(db)
  if (err != nil) {
    serverError(w, err.Error())
    return
  }
  fmt.Fprintf(w, string(jsonData))
}

func handleSpeakAction(w http.ResponseWriter, r *http.Request) {
  log.Println("handle speak");
  isValid, oid := convertAndVerifyStringToInt(mux.Vars(r)["[0-9]+"], w)
  if (!isValid) {
    return
  }
  var info = SpeakInfo{}
  db := DBUtils.OpenDB();
  sid := 0;
  db.QueryRow("SELECT speakID FROM objects WHERE objectID = ?", oid).Scan(&sid)
  db.QueryRow("select speakID, text from speak_results WHERE speakID = ?", sid).Scan(&info.Sid, &info.Description)
  DBUtils.CloseDB(db)
  jsonData, err := json.Marshal(info)
  if (err != nil) {
    serverError(w, err.Error())
    return
  }
  fmt.Fprintf(w, string(jsonData))
}

func convertAndVerifyStringToInt(value string, w http.ResponseWriter) (bool, int) {
  converted, err := strconv.Atoi(value)
  if (err != nil) {
    log.Fatal(err)
    badRequest(w, err.Error())
    return false, 0
  } else {
    return true, converted
  }
}

func handleLookAction(w http.ResponseWriter, r *http.Request) {
  log.Println("get object info")
  isValid, oid := convertAndVerifyStringToInt(mux.Vars(r)["[0-9]+"], w)
  if (!isValid) {
    return
  }
  var info = LookInfo{}
  db := DBUtils.OpenDB();
  lid := 0;
  db.QueryRow("SELECT lookID FROM objects WHERE objectID = ?", oid).Scan(&lid)
  db.QueryRow("select lookID, text from look_results WHERE lookID = ?", lid).Scan(&info.Lid, &info.Description)
  db.QueryRow("select has_inventory,is_closed from objects WHERE objectID = ?", oid).Scan(&info.Has_inventory, &info.Is_closed)
  DBUtils.CloseDB(db)
  jsonData, err := json.Marshal(info)
  if (err != nil) {
    serverError(w, err.Error())
    return
  }
  fmt.Fprintf(w, string(jsonData))
}

func handleTouchAction(w http.ResponseWriter, r *http.Request) {
  isValid, oid := convertAndVerifyStringToInt(mux.Vars(r)["[0-9]+"], w)
  if (!isValid) {
    return
  }
  var info = TouchInfo{}
  db := DBUtils.OpenDB();
  db.QueryRow("select has_inventory,is_closed,contained_in,is_locked from objects WHERE objectID = ?", oid).Scan(&info.Has_inventory, &info.Is_closed, &info.Contained_in, &info.Is_locked)
  DBUtils.CloseDB(db)
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
  rtr.HandleFunc(SERVICE_PATH + "/object/{[0-9]+}/look", handleLookAction).Methods("GET")
  rtr.HandleFunc(SERVICE_PATH + "/object/{[0-9]+}/speak", handleSpeakAction).Methods("GET")
  rtr.HandleFunc(SERVICE_PATH + "/object/{[0-9]+}/touch", handleTouchAction).Methods("GET")
  rtr.PathPrefix("/").Handler(http.FileServer(http.Dir("./static/")))
  http.Handle("/", rtr)
  
  log.Println("got some booze")
  http.ListenAndServe(PORT, context.ClearHandler(http.DefaultServeMux))
}