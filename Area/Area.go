package Area

import (
  "log"
  "github.com/jonathanface/bumquest/DBUtils"
)
type Area struct {
  Aid int `json:"aid"`
  Title string `json:"title"`
  Description string `json:"description"`
  Walkpath string `json:"walk_path"`
  Walktype string `json:"walk_type"`
  Image string `json:"image"`
  Items []Item `json:"items"`
  WalkpathNodes []WalkpathNode `json:"walkpath_nodes"`
  Pedestrian_min_y int `json:"pedestrian_min_y"`
  Pedestrian_max_y int `json:"pedestrian_max_y"`
}

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

type WalkpathNode struct {
  Nid int `json:"vid"`
  X int `json:"x"`
  Y int `json:"y"`
  Vertex string `json:"connects_with"`
}

func GetDetails(areaID int) Area {
  var area = Area{}
  db := DBUtils.OpenDB();
  db.QueryRow("select areaID,name,description,walkCoords,walkType,image,pedLow, pedHigh from areas WHERE areaID = ?", areaID).Scan(&area.Aid, &area.Title, &area.Description, &area.Walkpath, &area.Walktype, &area.Image, &area.Pedestrian_min_y, &area.Pedestrian_max_y)
  rows, err := db.Query("select objectID,name,image_opened, image_closed ,x,y,is_closed,is_locked,contained_in,has_inventory,interact_x, interact_y from objects WHERE locationID = ?", areaID)
  if (err != nil) {
    log.Fatal(err)
  }
  var items []Item
  for rows.Next() {
    item := Item{}
    err = rows.Scan(&item.Oid, &item.Title, &item.Image_opened, &item.Image_closed, &item.X, &item.Y, &item.Is_closed, &item.Is_locked, &item.Contained_in, &item.Has_inventory, &item.Interact_x, &item.Interact_y)
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