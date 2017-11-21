package main

import (
  "net/http"
  "strconv"
  "encoding/json"
  "log"
  "fmt"
  "math/rand"
  "math"
  "time"
  _ "github.com/go-sql-driver/mysql"
  "github.com/gorilla/mux"
  "github.com/gorilla/sessions"
  "github.com/gorilla/context"
  "github.com/jonathanface/bumquest/DBUtils"
  "github.com/jonathanface/bumquest/Area"
  "github.com/jonathanface/bumquest/Player"
  "github.com/jonathanface/bumquest/Item"
)

const (
  SERVICE_PATH = "/service"
  PORT = ":85"
  BUMQUEST_SESSION_ID = "bumquest_player"
)

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
  jsonData, err := json.Marshal(Area.GetDetails(aid))
  if (err != nil) {
    serverError(w, err.Error())
    return
  }
  fmt.Fprintf(w, string(jsonData))
}

func handleSpeakAction(w http.ResponseWriter, r *http.Request) {
  isValid, oid := convertAndVerifyStringToInt(mux.Vars(r)["[0-9]+"], w)
  if (!isValid) {
    badRequest(w, "Bad Request")
    return
  }
  jsonData, err := json.Marshal(Player.GetObjectExamineResults("speak_results", oid))
  if (err != nil) {
    serverError(w, err.Error())
    return
  }
  fmt.Fprintf(w, string(jsonData))
}

func handleLookAction(w http.ResponseWriter, r *http.Request) {
  isValid, oid := convertAndVerifyStringToInt(mux.Vars(r)["[0-9]+"], w)
  if (!isValid) {
    badRequest(w, "Bad Request")
    return
  }
  jsonData, err := json.Marshal(Player.GetObjectExamineResults("look_results", oid))
  if (err != nil) {
    serverError(w, err.Error())
    return
  }
  fmt.Fprintf(w, string(jsonData))
}

func handleSmellAction(w http.ResponseWriter, r *http.Request) {
  isValid, oid := convertAndVerifyStringToInt(mux.Vars(r)["[0-9]+"], w)
  if (!isValid) {
    badRequest(w, "Bad Request")
    return
  }
  jsonData, err := json.Marshal(Player.GetObjectExamineResults("smell_results", oid))
  if (err != nil) {
    serverError(w, err.Error())
    return
  }
  fmt.Fprintf(w, string(jsonData))
}

func handleTasteAction(w http.ResponseWriter, r *http.Request) {
  isValid, oid := convertAndVerifyStringToInt(mux.Vars(r)["[0-9]+"], w)
  if (!isValid) {
    badRequest(w, "Bad Request")
    return
  }
  jsonData, err := json.Marshal(Player.GetObjectExamineResults("taste_results", oid))
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
  jsonData, err := json.Marshal(Player.GetObjectExamineResults("touch_results", oid))
  if (err != nil) {
    serverError(w, err.Error())
    return
  }
  fmt.Fprintf(w, string(jsonData))
}

func handleItemInventory(w http.ResponseWriter, r *http.Request) {
  log.Println("handling item inventory request")
  isValid, oid := convertAndVerifyStringToInt(mux.Vars(r)["[0-9]+"], w)
  if (!isValid) {
    badRequest(w, "Bad Request")
    return
  }

  jsonData, err := json.Marshal(Item.GetInventory(oid))
  if (err != nil) {
    serverError(w, err.Error())
    return
  }
  fmt.Fprintf(w, string(jsonData))
}

func handleItemDrop(w http.ResponseWriter, r *http.Request) {
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
  Player.Drop(uid, oid, cid)
  writeSuccess(w)
}

func handleItemTake(w http.ResponseWriter, r *http.Request) {
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
  Player.Take(uid, oid, cid)
  writeSuccess(w)
}

func handlePlayerInventory(w http.ResponseWriter, r *http.Request) {
  log.Println("handling player inventory request")
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
  jsonData, err := json.Marshal(Player.GetInventory(uid))
  if err != nil {
    serverError(w, err.Error())
    return
  }
  fmt.Fprintf(w, string(jsonData))
}

func setup(w http.ResponseWriter, r *http.Request) {
  setSession(w, r, 1, "player_1", 5465465)
  writeSuccess(w)
}

func handlePedestrianReaction(w http.ResponseWriter, r *http.Request) {
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
  
  type Reaction struct {
    Positive bool `json:"positive"`
    Money float64 `json:"money"`
  }
  react := Reaction{}
  perc := random(0, 9)
  if perc == 0 {
    react.Positive = true;
    react.Money = toFixed(randomFloat(0.01, 1.00), 2)
    db := DBUtils.OpenDB();
    cash := 0.00;
    db.QueryRow("select money from players WHERE playerID = ?", uid).Scan(&cash)
    cash = toFixed(cash + react.Money, 2)
    stmt, err := db.Prepare("update players set money=? where playerID=?")
    if (err != nil) {
      log.Fatal("can't update cash")
    }
    defer stmt.Close()
    _, err = stmt.Exec(cash, uid)
    DBUtils.CloseDB(db)
    if (err != nil) {
      log.Fatal("can't update cash")
    }
  } else {
    react.Positive = false;
  }
  jsonData, err := json.Marshal(react)
  if err != nil {
    serverError(w, err.Error())
    return
  }
  fmt.Fprintf(w, string(jsonData))
}

func random(min, max int) int {
  return rand.Intn(max - min) + min
}

func randomFloat(min, max float64) float64 {
  return (rand.Float64()*max)+min
}

func round(num float64) int {
    return int(num + math.Copysign(0.5, num))
}

func toFixed(num float64, precision int) float64 {
    output := math.Pow(10, float64(precision))
    return float64(round(num * output)) / output
}

func main() {
  rand.Seed(time.Now().Unix())
  rtr := mux.NewRouter()
  rtr.HandleFunc(SERVICE_PATH + "/setup", setup).Methods("GET")
  rtr.HandleFunc(SERVICE_PATH + "/area/{[0-9]+}", handleArea).Methods("GET")
  rtr.HandleFunc(SERVICE_PATH + "/player/{[0-9]+}/inventory", handlePlayerInventory).Methods("GET")
  rtr.HandleFunc(SERVICE_PATH + "/item/{[0-9]+}/look", handleLookAction).Methods("GET")
  rtr.HandleFunc(SERVICE_PATH + "/item/{[0-9]+}/smell", handleSmellAction).Methods("GET")
  rtr.HandleFunc(SERVICE_PATH + "/item/{[0-9]+}/taste", handleTasteAction).Methods("GET")
  rtr.HandleFunc(SERVICE_PATH + "/item/{[0-9]+}/speak", handleSpeakAction).Methods("GET")
  rtr.HandleFunc(SERVICE_PATH + "/item/{[0-9]+}/touch", handleTouchAction).Methods("GET")
  rtr.HandleFunc(SERVICE_PATH + "/item/{[0-9]+}/inventory", handleItemInventory).Methods("GET")
  rtr.HandleFunc(SERVICE_PATH + "/item/{oid:[0-9]+}/take/{cid:[0-9]+}", handleItemTake).Methods("POST")
  rtr.HandleFunc(SERVICE_PATH + "/item/{oid:[0-9]+}/drop/{cid:[0-9]+}", handleItemDrop).Methods("PUT")
  rtr.HandleFunc(SERVICE_PATH + "/pedestrianReaction", handlePedestrianReaction).Methods("GET")
  rtr.PathPrefix("/").Handler(http.FileServer(http.Dir("./static/")))
  http.Handle("/", rtr)
  
  log.Println("got some booze")
  http.ListenAndServe(PORT, context.ClearHandler(http.DefaultServeMux))
}