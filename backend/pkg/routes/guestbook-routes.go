package routes

import (
	"github.com/gorilla/mux"
	"github.com/RabihSassouh/EverAfter_Elegance/backend/pkg/controllers"
)

var RegisterGuestbookRoutes = func(router *mux.Router) {
	router.HandleFunc("/guestbook", controllers.CreateGuestbookEntry).Methods("POST")
	router.HandleFunc("/guestbook", controllers.GetAllGuestbookEntries).Methods("GET")
	router.HandleFunc("/guestbook/{entryID}", controllers.GetGuestbookEntryByID).Methods("GET")
	router.HandleFunc("/guestbook/{entryID}", controllers.DeleteGuestbookEntry).Methods("DELETE")
}