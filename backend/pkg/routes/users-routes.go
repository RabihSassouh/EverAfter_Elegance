package routes

import (
	"github.com/gorilla/mux"
	"github.com/RabihSassouh/EverAfter_Elegance/backend/pkg/controllers"
	"github.com/RabihSassouh/EverAfter_Elegance/backend/pkg/middleware"
)

var RegisterUserRoutes = func (router *mux.Router)  {
	router.HandleFunc("/validate-email", controllers.ValidateEmailHandler).Methods("POST")
	router.HandleFunc("/signup/", controllers.CreateUser).Methods("POST")
	router.HandleFunc("/api/login/", controllers.GetUserById).Methods("POST")
	router.HandleFunc("/api/user/", controllers.GetUsers).Methods("GET")
	// router.HandleFunc("/user/{userId}", middleware.AuthenticationMiddleware(controllers.GetUserById)).Methods("GET")
	router.HandleFunc("/user/{userId}", middleware.AuthenticationMiddleware(controllers.UpdateUser)).Methods("PUT")
	router.HandleFunc("/user/{userId}", middleware.AuthenticationMiddleware(controllers.DeleteUser)).Methods("DELETE")
	router.Use(middleware.CORSMiddleware)

}