package routes

import (
	"github.com/gorilla/mux"
	"github.com/RabihSassouh/final-project/backend/pkg/controllers"
)
var RegisterPhotosRoutes = func(router *mux.Router) {
	router.HandleFunc("/photos", controllers.CreatePhoto).Methods("POST")
	router.HandleFunc("/photos", controllers.GetAllPhotos).Methods("GET")
	router.HandleFunc("/photos/{photoID}", controllers.GetPhotoByID).Methods("GET")
	router.HandleFunc("/photos/{photoID}", controllers.DeletePhoto).Methods("DELETE")
}