package routes

import (
	"github.com/gorilla/mux"
	"github.com/RabihSassouh/EverAfter_Elegance/backend/pkg/controllers"
)

var RegisterVendorsRoutes = func(router *mux.Router) {
	router.HandleFunc("/register/vendor", controllers.CreateVendor).Methods("POST")
	router.HandleFunc("/vendor", controllers.GetAllVendors).Methods("GET")
	router.HandleFunc("/vendor/{vendorID}", controllers.GetVendorByID).Methods("GET")
	router.HandleFunc("/vendor/{vendorID}", controllers.DeleteVendor).Methods("DELETE")
	router.HandleFunc("/vendor/{vendorID}", controllers.UpdateVendor).Methods("PUT")
	router.HandleFunc("/vendors", controllers.GetVendorsByCategory).Methods("POST")
}