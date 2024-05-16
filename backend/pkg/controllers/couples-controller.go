package controllers

import (
	"encoding/json"
	"net/http"
	"github.com/RabihSassouh/EverAfter_Elegance/backend/pkg/models"
)

// CreateCoupleHandler handles the creation of a new couple.
func CreateCoupleHandler(w http.ResponseWriter, r *http.Request) {
	var couple models.Couple

	// Decode the JSON request body into the Couple struct
	err := json.NewDecoder(r.Body).Decode(&couple)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// Create the couple in the database
	createdCouple := couple.CreateCouple()

	// Marshal the created couple to JSON
	response, err := json.Marshal(createdCouple)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Set the Content-Type header and write the response
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	w.Write(response)
}
