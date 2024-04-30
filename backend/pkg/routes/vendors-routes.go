package routes

import (
	"github.com/gorilla/mux"
	"github.com/RabihSassouh/final-project/backend/pkg/controllers"
)

var RegisterVendorsRoutes = func(router *mux.Router) {
	router.HandleFunc("/vendors", controllers.CreateVendor).Methods("POST")
	router.HandleFunc("/vendors", controllers.GetAllVendors).Methods("GET")
	router.HandleFunc("/vendors/{vendorID}", controllers.GetVendorByID).Methods("GET")
	router.HandleFunc("/vendors/{vendorID}", controllers.DeleteVendor).Methods("DELETE")

}