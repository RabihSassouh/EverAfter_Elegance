package routes

import (
	"github.com/gorilla/mux"
	"github.com/RabihSassouh/final-project/backend/pkg/controllers"
)

var RegisterGuestbookRoutes = func(router *mux.Router) {
	router.HandleFunc("/guestbook", controllers.CreateGuestbookEntry).Methods("POST")
	router.HandleFunc("/guestbook", controllers.GetAllGuestbookEntries).Methods("GET")

}