package routes

import (
	"github.com/gorilla/mux"
	"github.com/RabihSassouh/final-project/backend/pkg/controllers"
)

var RegisterGuestsRoutes = func(router *mux.Router) {
	router.HandleFunc("/guests", controllers.CreateGuest).Methods("POST")

}