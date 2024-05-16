package controllers

import (
	"encoding/json"
	"net/http"
	"github.com/RabihSassouh/EverAfter_Elegance/backend/pkg/models"
	"fmt"
	"github.com/dgrijalva/jwt-go"
)


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
