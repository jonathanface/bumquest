package main

import (
  "log"
  "math/rand"
  "net/http"
  "os"
  "path/filepath"
  "strings"
  "time"
  "github.com/gorilla/mux"
)

const (
  HTTP_PORT=":8080"
)

func getStaticDir() string {
	dir, err := filepath.Abs(filepath.Dir(os.Args[0]))
	if err != nil {
		log.Fatal("staticdir", err)
	}
	var staticDir string
	if strings.Index(dir, "/bin") > -1 {
		staticDir = "/home/jface/work/src/pi/Nucleus/static/"
	} else {
		staticDir = dir + string(os.PathSeparator) + "static" + string(os.PathSeparator)
	}
	return staticDir
}

func main() {
  rand.Seed(time.Now().Unix())
  rtr := mux.NewRouter()
  log.Println(getStaticDir())
  //rtr.HandleFunc(SERVICE_PATH + "/setup", setup).Methods("GET")
  
  rtr.PathPrefix("/").Handler(http.FileServer(http.Dir("./static/")))
  
  staticDir := http.Dir(getStaticDir())
  rtr.PathPrefix("/").Handler(http.FileServer(staticDir))
  http.Handle("/", rtr)
  
  log.Println("got some booze")
  log.Fatal(http.ListenAndServe(HTTP_PORT, nil))
}