package routes

import (
	"github.com/gorilla/mux"
	"github.com/RabihSassouh/final-project/backend/pkg/controllers"
)

var RegisterUserstypeRoutes = func(router *mux.Router) {
	router.HandleFunc("/userstype/", controllers.CreateUserstype).Methods("POST")
}