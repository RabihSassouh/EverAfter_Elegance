package routes

import (
	"github.com/gorilla/mux"
	"github.com/RabihSassouh/final-project/backend/pkg/controllers"
)

var RegisterVendorsRoutes = func(router *mux.Router) {
	router.HandleFunc("/vendor", controllers.CreateVendor).Methods("POST")
	router.HandleFunc("/vendor", controllers.GetAllVendors).Methods("GET")
	router.HandleFunc("/vendor/{vendorID}", controllers.GetVendorByID).Methods("GET")
	router.HandleFunc("/vendor/{vendorID}", controllers.DeleteVendor).Methods("DELETE")
	router.HandleFunc("/vendor/{vendorID}", controllers.UpdateVendor).Methods("PUT")
}