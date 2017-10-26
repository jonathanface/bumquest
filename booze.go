package main

import (
  "net/http"
  "github.com/gorilla/mux"
  "github.com/gorilla/context"
  "log"
)

const (
  SERVICE_PATH = "/service"
  PORT = ":8080"
)

func main() {
  rtr := mux.NewRouter()
  rtr.PathPrefix("/").Handler(http.FileServer(http.Dir("./static/")))
  http.Handle("/", rtr)
  
  log.Println("got some booze")
  http.ListenAndServe(PORT, context.ClearHandler(http.DefaultServeMux))
}