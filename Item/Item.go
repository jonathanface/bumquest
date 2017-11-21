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
  Look_id int `json:"look_id"`
  Taste_id int `json:"taste_id"`
  Smell_id int `json:"smell_id"`
  Take_id int `json:"take_id"`
  Touch_id int `json:"touch_id"`
  Speak_id int `json:"speak_id"`
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
    objRow := db.QueryRow("select objectID,name,image_opened, image_closed ,x,y,is_closed,is_locked," + 
                           "contained_in,has_inventory,interact_x,interact_y," + 
                           "lookID, takeID, smellID, tasteID, touchID, speakID from objects WHERE objectID = ?", currentOid)
    item := Item{}
    err = objRow.Scan(&item.Oid, &item.Title, &item.Image_opened, &item.Image_closed, &item.X, &item.Y, &item.Is_closed,
                      &item.Is_locked, &item.Contained_in, &item.Has_inventory, &item.Interact_x, &item.Interact_y,
                      &item.Look_id, &item.Take_id, &item.Smell_id, &item.Taste_id, &item.Touch_id, &item.Speak_id)
    if err != nil {
      log.Fatal(err)
    }
    items = append(items, item)
  }
  DBUtils.CloseDB(db)
  return items
}