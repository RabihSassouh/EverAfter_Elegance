package controllers

import (
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"strconv"

	"github.com/RabihSassouh/EverAfter_Elegance/backend/pkg/models"
	"github.com/dgrijalva/jwt-go"
	"github.com/gorilla/mux"
	"github.com/jinzhu/gorm"
)

var db *gorm.DB
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
	var couple models.Couple

	// Decode the JSON request body into the Couple struct
	err := json.NewDecoder(r.Body).Decode(&couple)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// userID, err := ExtractUserIDFromContext(r)
	// if err != nil {
	// 	http.Error(w, err.Error(), http.StatusUnauthorized)
	// 	return
	// }

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
	params := mux.Vars(r)
	coupleID, err := strconv.ParseUint(params["id"], 10, 64)
	if err != nil {
		http.Error(w, "Invalid couple ID", http.StatusBadRequest)
		return
	}

	// Fetch the couple from the database by ID
	var couple models.Couple
	result := db.First(&couple, coupleID)
	if errors.Is(result.Error, gorm.ErrRecordNotFound) {
		http.Error(w, "Couple not found", http.StatusNotFound)
		return
	} else if result.Error != nil {
		http.Error(w, result.Error.Error(), http.StatusInternalServerError)
		return
	}

	// Decode the JSON request body into the Couple struct
	var updatedCouple models.Couple
	err = json.NewDecoder(r.Body).Decode(&updatedCouple)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// Update the couple fields
	couple.Groom_firstname = updatedCouple.Groom_firstname
	couple.Groom_lastname = updatedCouple.Groom_lastname
	couple.Groom_email = updatedCouple.Groom_email
	couple.Groom_phone = updatedCouple.Groom_phone
	couple.Bride_firstname = updatedCouple.Bride_firstname
	couple.Bride_lastname = updatedCouple.Bride_lastname
	couple.Bride_email = updatedCouple.Bride_email
	couple.Bride_phone = updatedCouple.Bride_phone
	couple.Wedding_date = updatedCouple.Wedding_date
	couple.Venue_preference = updatedCouple.Venue_preference
	couple.Budget = updatedCouple.Budget
	couple.Guest_count = updatedCouple.Guest_count

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
