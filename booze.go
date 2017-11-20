package main

import (
  "net/http"
  "strconv"
  "encoding/json"
  "log"
  "fmt"
  _ "github.com/go-sql-driver/mysql"
  "github.com/gorilla/mux"
  "github.com/gorilla/sessions"
  "github.com/gorilla/context"
  "github.com/jonathanface/bumquest/DBUtils"
)

const (
  SERVICE_PATH = "/service"
  PORT = ":85"
  BUMQUEST_SESSION_ID = "bumquest_player"
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
  Pedestrian_min_y int `json:"pedestrian_min_y"`
  Pedestrian_max_y int `json:"pedestrian_max_y"`
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
  Interact_x int `json:"interaction_x"`
  Interact_y int `json:"interaction_y"`
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

var sessionStore = sessions.NewCookieStore([]byte(BUMQUEST_SESSION_ID))

func setSession(w http.ResponseWriter, r *http.Request, userID int, username string, timestamp int) {
  session, err := sessionStore.Get(r, BUMQUEST_SESSION_ID)
  if err != nil {
    serverError(w, err.Error())
    return
  }
  session.Values["id"] = userID
  session.Values["name"] = username
  session.Values["timestamp"] = timestamp
  session.Values["ip"] = r.RemoteAddr
  session.Save(r, w)
}

func checkSession(w http.ResponseWriter, r *http.Request) {
  session, err := sessionStore.Get(r, BUMQUEST_SESSION_ID)
  if err != nil {
    serverError(w, err.Error())
    return
  }
  if len(session.Values) > 0 {
    entry := make(map[string]interface{})
    entry["uid"] = session.Values["id"];
    entry["login_name"] = session.Values["name"]
    entry["timestamp"] = session.Values["timestamp"]
    entry["ip"] = session.Values["ip"]
    jsonData, err := json.Marshal(entry)
    if err != nil {
      serverError(w, err.Error())
      return
    }
    w.WriteHeader(http.StatusOK)
    fmt.Fprintf(w, string(jsonData))
  } else {
    fileNotFound(w, "session is empty")
    return
  }
}

func handleArea(w http.ResponseWriter, r *http.Request) {
  log.Println("get area")
  isValid, aid := convertAndVerifyStringToInt(mux.Vars(r)["[0-9]+"], w)
  if (!isValid) {
    badRequest(w, "Bad Request")
    return
  }
  var area = Area{}
  db := DBUtils.OpenDB();
  db.QueryRow("select areaID,name,description,walkCoords,walkType,image,pedLow, pedHigh from areas WHERE areaID = ?", aid).Scan(&area.Aid, &area.Title, &area.Description, &area.Walkpath, &area.Walktype, &area.Image, &area.Pedestrian_min_y, &area.Pedestrian_max_y)

  rows, err := db.Query("select objectID,name,image_opened, image_closed ,x,y,is_closed,is_locked,contained_in,has_inventory,interact_x, interact_y from objects WHERE locationID = ?", aid)
  if (err != nil) {
    log.Fatal(err)
  }
  var objects []Object
  for rows.Next() {
    object := Object{}
    err = rows.Scan(&object.Oid, &object.Title, &object.Image_opened, &object.Image_closed, &object.X, &object.Y, &object.Is_closed, &object.Is_locked, &object.Contained_in, &object.Has_inventory, &object.Interact_x, &object.Interact_y)
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
    badRequest(w, "Bad Request")
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
    badRequest(w, "Bad Request")
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
    badRequest(w, "Bad Request")
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

func handleObjectInventory(w http.ResponseWriter, r *http.Request) {
  log.Println("handling object inventory request")
  isValid, oid := convertAndVerifyStringToInt(mux.Vars(r)["[0-9]+"], w)
  if (!isValid) {
    badRequest(w, "Bad Request")
    return
  }
  db := DBUtils.OpenDB();
  rows, err := db.Query("select objectID from object_inventory WHERE containerID = ?", oid)
  if (err != nil) {
    log.Fatal(err)
  }
  
  var objects []Object
  for rows.Next() {
    var currentOid int
    rows.Scan(&currentOid)
    log.Println(currentOid)
    objRow := db.QueryRow("select objectID,name,image_opened, image_closed ,x,y,is_closed,is_locked,contained_in,has_inventory,interact_x, interact_y from objects WHERE objectID = ?", currentOid)
    object := Object{}
    err = objRow.Scan(&object.Oid, &object.Title, &object.Image_opened, &object.Image_closed, &object.X, &object.Y, &object.Is_closed, &object.Is_locked, &object.Contained_in, &object.Has_inventory, &object.Interact_x, &object.Interact_y)
    if err != nil {
      log.Fatal(err)
    }
    objects = append(objects, object)
  }
  DBUtils.CloseDB(db)
  jsonData, err := json.Marshal(objects)
  if (err != nil) {
    serverError(w, err.Error())
    return
  }
  fmt.Fprintf(w, string(jsonData))
}

func handleObjectDrop(w http.ResponseWriter, r *http.Request) {
  session, err := sessionStore.Get(r, BUMQUEST_SESSION_ID)
  if err != nil {
    forbidden(w, err.Error())
    return
  }
  if len(session.Values) == 0 {
    forbidden(w, "Forbidden")
    return
  }
  
  uid := session.Values["id"].(int)
  log.Print("OK: "+mux.Vars(r)["cid"])

  isValid, oid := convertAndVerifyStringToInt(mux.Vars(r)["oid"], w)
  if (!isValid) {
    badRequest(w, "Bad Request")
    return
  }

  isValid, cid := convertAndVerifyStringToInt(mux.Vars(r)["cid"], w)
  if (!isValid) {
    badRequest(w, "Bad Request")
    return
  }
  db := DBUtils.OpenDB();
  stmt, err := db.Prepare("DELETE FROM player_inventory WHERE playerID = ? AND objectID = ?")
  if (err != nil) {
    log.Fatal(err)
  }
  defer stmt.Close()
  _, err = stmt.Exec(uid, oid)
  if (err != nil) {
    log.Fatal(err)
  }
  stmt, err = db.Prepare("INSERT INTO object_inventory (containerID, objectID) VALUES(?,?)")
  if (err != nil) {
    log.Fatal(err)
  }
  defer stmt.Close()
  _, err = stmt.Exec(cid, oid)
  if (err != nil) {
    log.Fatal(err)
  }
  DBUtils.CloseDB(db)
  writeSuccess(w)
}

func handleObjectTake(w http.ResponseWriter, r *http.Request) {
  session, err := sessionStore.Get(r, BUMQUEST_SESSION_ID)
  if err != nil {
    forbidden(w, err.Error())
    return
  }
  if len(session.Values) == 0 {
    forbidden(w, "Forbidden")
    return
  }

  uid := session.Values["id"].(int)

  isValid, oid := convertAndVerifyStringToInt(mux.Vars(r)["oid"], w)
  if (!isValid) {
    badRequest(w, "Bad Request")
    return
  }
  isValid, cid := convertAndVerifyStringToInt(mux.Vars(r)["cid"], w)
  if (!isValid) {
    badRequest(w, "Bad Request")
    return
  }
  db := DBUtils.OpenDB();
  stmt, err := db.Prepare("INSERT INTO player_inventory (playerID, objectID) VALUES(?,?)")
  if (err != nil) {
    log.Fatal(err)
  }
  defer stmt.Close()
  _, err = stmt.Exec(uid, oid)
  if (err != nil) {
    log.Fatal(err)
  }
  stmt, err = db.Prepare("DELETE FROM object_inventory WHERE containerID=? AND objectID=?")
  if (err != nil) {
    log.Fatal(err)
  }
  defer stmt.Close()
  _, err = stmt.Exec(cid, oid)
  if (err != nil) {
    log.Fatal(err)
  }
  DBUtils.CloseDB(db)
  writeSuccess(w)
}

func handlePlayerInventory(w http.ResponseWriter, r *http.Request) {
  session, err := sessionStore.Get(r, BUMQUEST_SESSION_ID)
  if err != nil {
    forbidden(w, err.Error())
    return
  }
  if len(session.Values) == 0 {
    forbidden(w, "Forbidden")
    return
  }

  uid := session.Values["id"].(int)
  log.Println("handling player inventory request")
  

  db := DBUtils.OpenDB();
  rows, err := db.Query("select objectID from player_inventory WHERE playerID = ?", uid)
  if (err != nil) {
    log.Fatal(err)
  }
  
  var objects []Object
  for rows.Next() {
    var currentOid int
    rows.Scan(&currentOid)
    objRow := db.QueryRow("select objectID,name,image_opened, image_closed ,x,y,is_closed,is_locked,contained_in,has_inventory,interact_x, interact_y from objects WHERE objectID = ?", currentOid)
    object := Object{}
    err = objRow.Scan(&object.Oid, &object.Title, &object.Image_opened, &object.Image_closed, &object.X, &object.Y, &object.Is_closed, &object.Is_locked, &object.Contained_in, &object.Has_inventory, &object.Interact_x, &object.Interact_y)
    if err != nil {
      log.Println("???")
      log.Fatal(err)
    }
    objects = append(objects, object)
  }
  DBUtils.CloseDB(db)
  jsonData, err := json.Marshal(objects)
  if (err != nil) {
    serverError(w, err.Error())
    return
  }
  fmt.Fprintf(w, string(jsonData))
}

func setup(w http.ResponseWriter, r *http.Request) {
  setSession(w, r, 1, "player_1", 5465465)
  writeSuccess(w)
}

func main() {
  rtr := mux.NewRouter()
  rtr.HandleFunc(SERVICE_PATH + "/setup", setup).Methods("GET")
  rtr.HandleFunc(SERVICE_PATH + "/area/{[0-9]+}", handleArea).Methods("GET")
  rtr.HandleFunc(SERVICE_PATH + "/player/{[0-9]+}/inventory", handlePlayerInventory).Methods("GET")
  rtr.HandleFunc(SERVICE_PATH + "/object/{[0-9]+}/look", handleLookAction).Methods("GET")
  rtr.HandleFunc(SERVICE_PATH + "/object/{[0-9]+}/speak", handleSpeakAction).Methods("GET")
  rtr.HandleFunc(SERVICE_PATH + "/object/{[0-9]+}/touch", handleTouchAction).Methods("GET")
  rtr.HandleFunc(SERVICE_PATH + "/object/{[0-9]+}/inventory", handleObjectInventory).Methods("GET")
  rtr.HandleFunc(SERVICE_PATH + "/object/{oid:[0-9]+}/take/{cid:[0-9]+}", handleObjectTake).Methods("POST")
  rtr.HandleFunc(SERVICE_PATH + "/object/{oid:[0-9]+}/drop/{cid:[0-9]+}", handleObjectDrop).Methods("PUT")
  rtr.PathPrefix("/").Handler(http.FileServer(http.Dir("./static/")))
  http.Handle("/", rtr)
  
  log.Println("got some booze")
  http.ListenAndServe(PORT, context.ClearHandler(http.DefaultServeMux))
}