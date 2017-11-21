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
  Is_takeable int `json:"is_takeable"`
}

type Info struct {
  Id int `json:"id"`
  Description string `json:"description"`
  Has_inventory int `json:"has_inventory"`
  Is_closed int `json:"is_closed"`
  Contained_in int `json:"contained_in"`
  Is_locked int `json:"is_locked"`
}

func GetObjectExamineResults(table string, id int) Info {
  var info = Info{}
  info.Id = id
  db := DBUtils.OpenDB()
  db.QueryRow("select text from " + table + " WHERE objectID = ?", id).Scan(&info.Description)
  db.QueryRow("select has_inventory,is_closed,contained_in,is_locked from objects WHERE objectID = ?", id).Scan(&info.Has_inventory, &info.Is_closed, &info.Contained_in, &info.Is_locked)
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
    objRow := db.QueryRow("select objectID,name,image_opened, image_closed ,x,y,is_closed,is_locked,contained_in,has_inventory,interact_x, interact_y, is_takeable from objects WHERE objectID = ?", currentOid)
    item := Item{}
    err = objRow.Scan(&item.Oid, &item.Title, &item.Image_opened, &item.Image_closed, &item.X, &item.Y, &item.Is_closed, &item.Is_locked, &item.Contained_in, &item.Has_inventory, &item.Interact_x, &item.Interact_y, &item.Is_takeable)
    if err != nil {
      log.Fatal(err)
    }
    items = append(items, item)
  }
  DBUtils.CloseDB(db)
  return items;
}