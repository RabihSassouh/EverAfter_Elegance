package routes

import (
	"github.com/gorilla/mux"
	"github.com/RabihSassouh/final-project/backend/pkg/controllers"
)

var RegisterEventRoutes = func(router *mux.Router) {
	router.HandleFunc("/event/", controllers.CreateEvent).Methods("POST")
	router.HandleFunc("/event/", controllers.GetEvents).Methods("GET")
	router.HandleFunc("/event/{eventID}", controllers.GetEventByID).Methods("GET")

}
