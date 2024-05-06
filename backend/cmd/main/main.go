package main

import (
	"log"
	"net/http"
	"github.com/gorilla/mux"
	_ `github.com/jinzhu/gorm/dialects/mysql`
	"github.com/RabihSassouh/final-project/backend/pkg/routes"
	// "github.com/go-sql-driver/mysql"
	"github.com/RabihSassouh/final-project/backend/pkg/middleware" 
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
	handler := middleware.CORSMiddleware(r)
	http.Handle("/",r)
	log.Fatal(http.ListenAndServe("localhost:8080",handler))
	
}

// import (
//     "net/http"
//     "yourapp/controllers"
//     "yourapp/middleware"

// func main() {
//     mux := http.NewServeMux()

    // Routes
    // mux.HandleFunc("/login", controllers.LoginHandler)
    // mux.HandleFunc("/other_api", controllers.OtherAPIHandler)

    // Apply middleware
    // handler := middleware.CORSMiddleware(mux)

    // Start server
    // server := &http.Server{
    //     Addr:    ":8080",
    //     Handler: handler,
    // }
    // server.ListenAndServe()
