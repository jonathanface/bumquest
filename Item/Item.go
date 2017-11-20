package Item

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

func GetInventory(oid int) []Item {
  db := DBUtils.OpenDB();
  rows, err := db.Query("select objectID from object_inventory WHERE containerID = ?", oid)
  if (err != nil) {
    log.Fatal(err)
  }
  
  var items []Item
  for rows.Next() {
    var currentOid int
    rows.Scan(&currentOid)
    log.Println(currentOid)
    objRow := db.QueryRow("select objectID,name,image_opened, image_closed ,x,y,is_closed,is_locked,contained_in,has_inventory,interact_x, interact_y from objects WHERE objectID = ?", currentOid)
    item := Item{}
    err = objRow.Scan(&item.Oid, &item.Title, &item.Image_opened, &item.Image_closed, &item.X, &item.Y, &item.Is_closed, &item.Is_locked, &item.Contained_in, &item.Has_inventory, &item.Interact_x, &item.Interact_y)
    if err != nil {
      log.Fatal(err)
    }
    items = append(items, item)
  }
  DBUtils.CloseDB(db)
  return items
}