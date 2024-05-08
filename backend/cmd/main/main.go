package main

import (
	"log"
	"net/http"
	"github.com/gorilla/mux"
	_ `github.com/jinzhu/gorm/dialects/mysql`
	"github.com/RabihSassouh/EverAfter_Elegance/backend/pkg/routes"
	// "github.com/go-sql-driver/mysql"
	"github.com/RabihSassouh/EverAfter_Elegance/backend/pkg/middleware" 
)

func main() {
	r := mux.NewRouter()
	routes.RegisterUserRoutes(r)
	routes.RegisterEventRoutes(r)
	// routes.RegisterUserstypeRoutes(r)
	routes.RegisterPhotosRoutes(r)
	routes.RegisterVendorsRoutes(r)
	routes.RegisterGuestsRoutes(r)
	routes.RegisterGuestbookRoutes(r)
	handler := middleware.CORSMiddleware(r)
	http.Handle("/",r)
	log.Fatal(http.ListenAndServe("localhost:8080",handler))
	
}
