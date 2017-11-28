package Item

import (
  "log"
  "github.com/jonathanface/bumquest/DBUtils"
)

type Item struct {
  Oid int `json:"oid"`
  Title string `json:"title"`
  Image string `json:"image"`
  Is_takeable int `json:"is_takeable"`
  X int `json:"x"`
  Y int `json:"y"`
  Interact_x int `json:"interaction_x"`
  Interact_y int `json:"interaction_y"`
  Look_id int `json:"look_id"`
  Taste_id int `json:"taste_id"`
  Smell_id int `json:"smell_id"`
  Take_id int `json:"take_id"`
  Touch_id int `json:"touch_id"`
  Speak_id int `json:"speak_id"`
  Properties Info `json:"properties"`
}

type Info struct {
  Description string `json:"description"`
  Is_open int `json:"is_open"`
  Is_locked int `json:"is_locked"`
  Is_takeable int `json:"is_takeable"`
  Is_container int `json:"is_container"`
  Image_opened string `json:"image_opened"`
  Image_closed string `json:"image_closed"`
}

func GetProperties(id int) Info {
  var info = Info{}
  db := DBUtils.OpenDB()
  db.QueryRow("SELECT is_open,is_locked,is_takeable,is_container,image_closed,image_opened FROM object_properties WHERE objectID = ?", id).Scan(&info.Is_open, &info.Is_locked, &info.Is_takeable, &info.Is_container, &info.Image_closed, &info.Image_opened)
  DBUtils.CloseDB(db)
  return info
}

func GetActionText(table string, id int) Info {
  var info = Info{}
  db := DBUtils.OpenDB()
  db.QueryRow("SELECT text FROM " + table + " WHERE objectID = ?", id).Scan(&info.Description)
  DBUtils.CloseDB(db)
  return info
}


func GetInventory(oid int) []Item {
  db := DBUtils.OpenDB();
  rows, err := db.Query("SELECT objectID FROM object_inventory WHERE containerID = ?", oid)
  if (err != nil) {
    log.Fatal(err)
  }
  
  var items []Item
  for rows.Next() {
    var currentOid int
    rows.Scan(&currentOid)
    log.Println(currentOid)
    objRow := db.QueryRow("SELECT objectID,name,image,x,y,interact_x,interact_y," + 
                           "lookID, takeID, smellID, tasteID, touchID, speakID FROM objects WHERE objectID = ?", currentOid)
    item := Item{}
    err = objRow.Scan(&item.Oid,&item.Title,&item.Image,&item.X,&item.Y,&item.Interact_x, &item.Interact_y,
                      &item.Look_id, &item.Take_id, &item.Smell_id, &item.Taste_id, &item.Touch_id, &item.Speak_id)
    if err != nil {
      log.Fatal(err)
    }
    items = append(items, item)
  }
  DBUtils.CloseDB(db)
  return items
}