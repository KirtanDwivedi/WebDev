package main

import (
	"fmt"
	"net/http"
	
	"github.com/go-chi/chi"
	"root/internal/handlers"
	
	log "github.com/sirupsen/logrus"
)

func main() {
	log.SetReportCaller(true)
	var r *chi.Mux = chi.NewRouter()
	handlers.Handler(r)

	fmt.Println("Starting GO API service...")
	fmt.Println(`
   ______  ____        ___     ____  ____ 
  / ____/ / __ \      /   |   / __ \/  _/ 
 / / __  / / / /     / /| |  / /_/ // /   
/ /_/ / / /_/ /     / ___ | / ____// /    
\____/  \____/     /_/  |_|/_/    /___/   
`)

	err := http.ListenAndServe("localhost:8000", r)
	if err != nil {
		log.Error(err)
	}
}