package routes

import (
	"github.com/gorilla/mux"
	"github.com/RabihSassouh/final-project/backend/pkg/controllers"
)

var RegisterUserstypeRoutes = func(router *mux.Router) {
	router.HandleFunc("/userstype/", controllers.CreateUserstype).Methods("POST")
	router.HandleFunc("/userstype", controllers.GetAllUserstypes).Methods("GET")
	router.HandleFunc("/userstype/{userTypeID}", controllers.GetUserstypeByID).Methods("GET")
	router.HandleFunc("/userstype/{userTypeID}", controllers.DeleteUserstype).Methods("DELETE")
}