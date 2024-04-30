package main

import (
	"log"
	"net/http"
	"github.com/gorilla/mux"
	_ `github.com/jinzhu/gorm/dialects/mysql`
	"github.com/RabihSassouh/final-project/backend/pkg/routes"
	// "github.com/go-sql-driver/mysql"
)

func main() {
	r := mux.NewRouter()
	routes.RegisterUserRoutes(r)
	routes.RegisterEventRoutes(r)
	routes.RegisterUserstypeRoutes(r)
	routes.RegisterPhotosRoutes(r)
	routes.RegisterVendorsRoutes(r)
	routes.RegisterGuestsRoutes(r)
	routes.RegisterGuestbookRoutes(r)
	http.Handle("/",r)
	log.Fatal(http.ListenAndServe("localhost:8080",r))
}