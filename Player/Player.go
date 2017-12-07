package Player

import (
  "log"
  "github.com/jonathanface/bumquest/DBUtils"
  "github.com/jonathanface/bumquest/Item"
)

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

func DropOnGround(uid int, oid int, aid int, x int, y int) {
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
  stmt, err = db.Prepare("UPDATE objects SET locationID=?, x=?, y=? WHERE objectID=?")
  if (err != nil) {
    log.Fatal(err)
  }
  defer stmt.Close()
  _, err = stmt.Exec(aid, x, y, oid)
  if (err != nil) {
    log.Fatal(err)
  }
  DBUtils.CloseDB(db)
}

func GetInventory(uid int) []Item.Item {
  db := DBUtils.OpenDB();
  rows, err := db.Query("select objectID from player_inventory WHERE playerID = ?", uid)
  if (err != nil) {
    log.Fatal(err)
  }
  var items []Item.Item
  for rows.Next() {
    var currentOid int
    rows.Scan(&currentOid)
    objRow := db.QueryRow("select objectID,name,image,x,y,interact_x, interact_y from objects WHERE objectID = ?", currentOid)
    item := Item.Item{}
    err = objRow.Scan(&item.Oid, &item.Title, &item.Image,&item.X, &item.Y, &item.Interact_x, &item.Interact_y)
    if err != nil {
      log.Fatal(err)
    }
    var has_more int
    err = db.QueryRow("SELECT COUNT(objectID) FROM object_properties WHERE objectID=? AND (is_container=? || is_takeable=?)", item.Oid, 1, 1).Scan(&has_more)
    if err != nil {
      log.Fatal(err)
    }
    if has_more > 0 {
      item.Properties = Item.GetProperties(currentOid)
    }
    items = append(items, item)
  }
  DBUtils.CloseDB(db)
  return items;
}