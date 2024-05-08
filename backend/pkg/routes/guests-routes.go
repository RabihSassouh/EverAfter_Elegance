package routes

import (
	"github.com/gorilla/mux"
	"github.com/RabihSassouh/EverAfter_Elegance/backend/pkg/controllers"
)

var RegisterGuestsRoutes = func(router *mux.Router) {
	router.HandleFunc("/guest", controllers.CreateGuest).Methods("POST")
	router.HandleFunc("/guest", controllers.GetAllGuests).Methods("GET")
	router.HandleFunc("/guest/{guestID}", controllers.GetGuestByID).Methods("GET")
	router.HandleFunc("/guest/{guestID}", controllers.DeleteGuest).Methods("DELETE")
}