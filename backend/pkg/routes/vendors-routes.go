package routes

import (
	"github.com/gorilla/mux"
	"github.com/RabihSassouh/final-project/backend/pkg/controllers"
)

var RegisterVendorsRoutes = func(router *mux.Router) {
	router.HandleFunc("/vendors", controllers.CreateVendor).Methods("POST")
	router.HandleFunc("/vendors", controllers.GetAllVendors).Methods("GET")

}