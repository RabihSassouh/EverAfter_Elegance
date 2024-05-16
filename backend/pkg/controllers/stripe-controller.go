// controllers.go

package controllers

import (
	// "encoding/json"
	"fmt"
	// "io/ioutil"
	"net/http"
	"os"
	// "strconv"
	"github.com/RabihSassouh/EverAfter_Elegance/backend/pkg/views"
	"github.com/RabihSassouh/EverAfter_Elegance/backend/pkg/models"
	stripe "github.com/stripe/stripe-go/v72"
	"github.com/stripe/stripe-go/v72/paymentintent"
)

func GetClientSecret(w http.ResponseWriter, r *http.Request) {
	secretKey, keyPresent := os.LookupEnv("STRIPE_SECRET_KEY")
	if !keyPresent {
		fmt.Fprintf(os.Stderr, "ERROR: Please set STRIPE_SECRET_KEY environment variable.\n")
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}

	stripe.Key = secretKey

	params := &stripe.PaymentIntentParams{
		Amount:   stripe.Int64(1099),
		Currency: stripe.String(string(stripe.CurrencyUSD)),
	}
	// Verify your integration in this guide by including this parameter
	params.AddMetadata("integration_check", "accept_a_payment")

	intent, err := paymentintent.New(params)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error creating PaymentIntent: %v\n", err)
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}

	data := models.CheckoutData{
		ClientSecret: intent.ClientSecret,
	}

	views.RenderJSON(w, data, http.StatusOK)
}

func HandleWebhook(w http.ResponseWriter, req *http.Request) {
	// Your webhook handling logic here
}
