// routes.go

package routes
import (
	"github.com/gorilla/mux"
	"github.com/RabihSassouh/EverAfter_Elegance/backend/pkg/controllers"
)


var RegisterSetupRoutes = func(router *mux.Router) {
	router.HandleFunc("/secret", controllers.GetClientSecret)
	router.HandleFunc("/webhook", controllers.HandleWebhook)
	
}