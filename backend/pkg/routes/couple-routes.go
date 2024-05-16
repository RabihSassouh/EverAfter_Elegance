package routes

import (
	"github.com/gorilla/mux"
	"github.com/RabihSassouh/EverAfter_Elegance/backend/pkg/controllers"
)

var RegisterCoupleRoutes = func(router *mux.Router) {
	router.HandleFunc("/create-couple", controllers.CreateCoupleHandler).Methods("POST")
}

