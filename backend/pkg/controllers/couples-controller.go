package controllers

import (
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"strconv"

	"github.com/RabihSassouh/EverAfter_Elegance/backend/pkg/models"
	"github.com/dgrijalva/jwt-go"

	"github.com/jinzhu/gorm"
	"github.com/RabihSassouh/EverAfter_Elegance/backend/pkg/config"
	
)

 var db=config.GetDB()
func ExtractUserIDFromContext(r *http.Request) (int, error) {
	// Extract the JWT token from the request header
	tokenString := r.Header.Get("Authorization")
	if tokenString == "" {
		return 0, fmt.Errorf("no token found in the request header")
	}

	// Parse the JWT token
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		// TODO: Provide the secret key used for signing the token
		return []byte("your_secret_key"), nil
	})
	if err != nil {
		return 0, fmt.Errorf("failed to parse JWT token: %v", err)
	}

	// Verify the token's signature
	if !token.Valid {
		return 0, fmt.Errorf("invalid JWT token")
	}

	// Extract user ID from the token's claims
	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok {
		return 0, fmt.Errorf("failed to extract claims from JWT token")
	}

	// Extract the user ID from the claims
	userID, ok := claims["user_id"].(int)
	if !ok {
		return 0, fmt.Errorf("user ID not found in token claims")
	}

	return userID, nil
}

// CreateCoupleHandler handles the creation of a new couple.
func CreateCoupleHandler(w http.ResponseWriter, r *http.Request) {
	var requestBody struct {
		Groom_firstname  string `json:"groom_firstname"`
		Groom_lastname   string `json:"groom_lastname"`
		Groom_email      string `json:"groom_email"`
		Groom_phone      string `json:"groom_phone"`
		Bride_firstname  string `json:"bride_firstname"`
		Bride_lastname   string `json:"bride_lastname"`
		Bride_email      string `json:"bride_email"`
		Bride_phone      string `json:"bride_phone"`
		Wedding_date     string `json:"wedding_date"`
		Venue_preference string `json:"venue_preference"`
		Budget           string `json:"budget"`
		Guest_count      string `json:"guest_count"`
		UserID           string   `json:"user_id"`
	}
	err := json.NewDecoder(r.Body).Decode(&requestBody)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	

	// Parse the string ID to an integer
	user_id, err := strconv.ParseUint(requestBody.UserID,10,64)
	if err != nil {
		http.Error(w, "Invalid ID format", http.StatusBadRequest)
		return
	}

	// Set the ID in the couple struct
	couple := models.Couple{
		Groom_firstname:  requestBody.Groom_firstname,
		Groom_lastname:   requestBody.Groom_lastname,
		Groom_email:      requestBody.Groom_email,
		Groom_phone:      requestBody.Groom_phone,
		Bride_firstname:  requestBody.Bride_firstname,
		Bride_lastname:   requestBody.Bride_lastname,
		Bride_email:      requestBody.Bride_email,
		Bride_phone:      requestBody.Bride_phone,
		Wedding_date:     requestBody.Wedding_date,
		Venue_preference: requestBody.Venue_preference,
		Budget:          requestBody.Budget,
		Guest_count:      requestBody.Guest_count,
		UserID : uint(user_id),
	} 

	// couple.UserID= uint(userID)
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

func UpdateCoupleHandler(w http.ResponseWriter, r *http.Request) {
	// Parse couple ID from URL parameter
	var requestBody struct {
		Groom_firstname  string `json:"groom_firstname"`
		Groom_lastname   string `json:"groom_lastname"`
		Groom_email      string `json:"groom_email"`
		Groom_phone      string `json:"groom_phone"`
		Bride_firstname  string `json:"bride_firstname"`
		Bride_lastname   string `json:"bride_lastname"`
		Bride_email      string `json:"bride_email"`
		Bride_phone      string `json:"bride_phone"`
		Wedding_date     string `json:"wedding_date"`
		Venue_preference string `json:"venue_preference"`
		Budget           string `json:"budget"`
		Guest_count      string `json:"guest_count"`
		UserID           string   `json:"user_id"`
	}
	err := json.NewDecoder(r.Body).Decode(&requestBody)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	
	userID, err := strconv.ParseUint(requestBody.UserID, 10, 64)
	if err != nil {
		http.Error(w, "Invalid user ID", http.StatusBadRequest)
		return
	}
	// Fetch the couple from the database by ID
	var couple models.Couple
	result := db.Where("user_id = ?", userID).First(&couple)
	if errors.Is(result.Error, gorm.ErrRecordNotFound) {
		http.Error(w, "Couple not found", http.StatusNotFound)
		return
	} else if result.Error != nil {
		http.Error(w, result.Error.Error(), http.StatusInternalServerError)
		return
	}

	// Update the couple fields if they are not empty in the request body
	if requestBody.Groom_firstname != "" {
		couple.Groom_firstname = requestBody.Groom_firstname
	}
	if requestBody.Groom_lastname != "" {
		couple.Groom_lastname = requestBody.Groom_lastname
	}
	if requestBody.Groom_email != "" {
		couple.Groom_email = requestBody.Groom_email
	}
	if requestBody.Groom_phone != "" {
		couple.Groom_phone = requestBody.Groom_phone
	}
	if requestBody.Bride_firstname != "" {
		couple.Bride_firstname = requestBody.Bride_firstname
	}
	if requestBody.Bride_lastname != "" {
		couple.Bride_lastname = requestBody.Bride_lastname
	}
	if requestBody.Bride_email != "" {
		couple.Bride_email = requestBody.Bride_email
	}
	if requestBody.Bride_phone != "" {
		couple.Bride_phone = requestBody.Bride_phone
	}
	if requestBody.Wedding_date != "" {
		couple.Wedding_date = requestBody.Wedding_date
	}
	if requestBody.Venue_preference != "" {
		couple.Venue_preference = requestBody.Venue_preference
	}
	if requestBody.Budget != "" {
		couple.Budget = requestBody.Budget
	}
	if requestBody.Guest_count != "" {
		couple.Guest_count = requestBody.Guest_count
	}


	// Save the updated couple to the database
	result = db.Save(&couple)
	if result.Error != nil {
		http.Error(w, result.Error.Error(), http.StatusInternalServerError)
		return
	}

	// Marshal the updated couple to JSON
	response, err := json.Marshal(couple)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Set the Content-Type header and write the response
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(response)
}
