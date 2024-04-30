package routes

import (
	"github.com/gorilla/mux"
	"github.com/RabihSassouh/final-project/backend/pkg/controllers"
)

var RegisterGuestsRoutes = func(router *mux.Router) {
	router.HandleFunc("/guests", controllers.CreateGuest).Methods("POST")
	router.HandleFunc("/guests", controllers.GetAllGuests).Methods("GET")
	router.HandleFunc("/guests/{guestID}", controllers.GetGuestByID).Methods("GET")
	router.HandleFunc("/guests/{guestID}", controllers.DeleteGuest).Methods("DELETE")
}