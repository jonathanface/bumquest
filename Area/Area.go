package Area

import (
  "log"
  "github.com/jonathanface/bumquest/DBUtils"
  "github.com/jonathanface/bumquest/Item"
)
type Area struct {
  Aid int `json:"aid"`
  Title string `json:"title"`
  Description string `json:"description"`
  Walkbounds string `json:"walk_bounds"`
  Image string `json:"image"`
  Items []Item.Item `json:"items"`
  WalkpathNodes []WalkpathNode `json:"walkpath_nodes"`
  Pedestrian_min_y int `json:"pedestrian_min_y"`
  Pedestrian_max_y int `json:"pedestrian_max_y"`
}

type WalkpathNode struct {
  Nid int `json:"vid"`
  X int `json:"x"`
  Y int `json:"y"`
  Vertex string `json:"connects_with"`
}

func GetDetails(areaID int) Area {
  var area = Area{}
  db := DBUtils.OpenDB();
  err := db.QueryRow("select areaID,name,description,walk_bounds,image,pedLow,pedHigh from areas WHERE areaID = ?", areaID).Scan(&area.Aid, &area.Title, &area.Description, &area.Walkbounds, &area.Image, &area.Pedestrian_min_y, &area.Pedestrian_max_y)
  if (err != nil) {
    log.Fatal(err)
  }
  rows, err := db.Query("select objectID,name,image_opened, image_closed ,x,y,is_closed,is_locked,contained_in," + 
                        "has_inventory,interact_x, interact_y, lookID, takeID, smellID, tasteID, touchID, speakID " +
                        "from objects WHERE locationID = ?", areaID)
  if (err != nil) {
    log.Fatal(err)
  }
  var items []Item.Item
  for rows.Next() {
    item := Item.Item{}
    err = rows.Scan(&item.Oid, &item.Title, &item.Image_opened, &item.Image_closed, &item.X, &item.Y, &item.Is_closed,
                      &item.Is_locked, &item.Contained_in, &item.Has_inventory, &item.Interact_x, &item.Interact_y,
                      &item.Look_id, &item.Take_id, &item.Smell_id, &item.Taste_id, &item.Touch_id, &item.Speak_id)
    if err != nil {
      log.Fatal(err)
    }
    items = append(items, item)
  }
  area.Items = items
  
  rows, err = db.Query("select nodeID,x,y,vertex from walkpath_nodes WHERE areaID = ?", areaID)
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
  DBUtils.CloseDB(db)
  return area
}