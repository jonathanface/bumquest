package Player

import (
  "log"
  "github.com/jonathanface/bumquest/DBUtils"
)

type Item struct {
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

func SpeakAt(oid int) SpeakInfo {
  var info = SpeakInfo{}
  db := DBUtils.OpenDB()
  sid := 0
  db.QueryRow("SELECT speakID FROM objects WHERE objectID = ?", oid).Scan(&sid)
  db.QueryRow("select speakID, text from speak_results WHERE speakID = ?", sid).Scan(&info.Sid, &info.Description)
  DBUtils.CloseDB(db)
  return info
}

func LookAt(oid int) LookInfo {
  var info = LookInfo{}
  db := DBUtils.OpenDB()
  lid := 0
  db.QueryRow("SELECT lookID FROM objects WHERE objectID = ?", oid).Scan(&lid)
  db.QueryRow("select lookID, text from look_results WHERE lookID = ?", lid).Scan(&info.Lid, &info.Description)
  db.QueryRow("select has_inventory,is_closed from objects WHERE objectID = ?", oid).Scan(&info.Has_inventory, &info.Is_closed)
  DBUtils.CloseDB(db)
  return info
}

func Touch(oid int) TouchInfo {
  var info = TouchInfo{}
  db := DBUtils.OpenDB();
  db.QueryRow("select has_inventory,is_closed,contained_in,is_locked from objects WHERE objectID = ?", oid).Scan(&info.Has_inventory, &info.Is_closed, &info.Contained_in, &info.Is_locked)
  DBUtils.CloseDB(db)
  return info
}

func Take(uid int, oid int, cid int) {
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
}

func Drop(uid int, oid int, cid int) {
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
}

func GetInventory(uid int) []Item {
  db := DBUtils.OpenDB();
  rows, err := db.Query("select objectID from player_inventory WHERE playerID = ?", uid)
  if (err != nil) {
    log.Fatal(err)
  }
  var items []Item
  for rows.Next() {
    var currentOid int
    rows.Scan(&currentOid)
    objRow := db.QueryRow("select objectID,name,image_opened, image_closed ,x,y,is_closed,is_locked,contained_in,has_inventory,interact_x, interact_y from objects WHERE objectID = ?", currentOid)
    item := Item{}
    err = objRow.Scan(&item.Oid, &item.Title, &item.Image_opened, &item.Image_closed, &item.X, &item.Y, &item.Is_closed, &item.Is_locked, &item.Contained_in, &item.Has_inventory, &item.Interact_x, &item.Interact_y)
    if err != nil {
      log.Fatal(err)
    }
    items = append(items, item)
  }
  DBUtils.CloseDB(db)
  return items;
}