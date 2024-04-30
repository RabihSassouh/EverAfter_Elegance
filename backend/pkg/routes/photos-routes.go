package routes

import (
	"github.com/gorilla/mux"
	"github.com/RabihSassouh/final-project/backend/pkg/controllers"
)
var RegisterPhotosRoutes = func(router *mux.Router) {
	router.HandleFunc("/photo", controllers.CreatePhoto).Methods("POST")
	router.HandleFunc("/photo", controllers.GetAllPhotos).Methods("GET")
	router.HandleFunc("/photo/{photoID}", controllers.GetPhotoByID).Methods("GET")
	router.HandleFunc("/photo/{photoID}", controllers.DeletePhoto).Methods("DELETE")
}