package controllers

import (
	"encoding/json"
	"fmt"
	"github.com/RabihSassouh/final-project/backend/pkg/models"
	"github.com/RabihSassouh/final-project/backend/pkg/utils"
	"github.com/RabihSassouh/final-project/backend/pkg/middleware"
	// "github.com/dgrijalva/jwt-go"
	"github.com/gorilla/mux"
	"golang.org/x/crypto/bcrypt"
	"net/http"
	"strconv"
)

var NewUser models.User

func CreateUser(w http.ResponseWriter, r *http.Request) {
	newUser := &models.User{}
	utils.ParseBody(r, newUser)

	// Check if the email already exists
	existingUser, err := models.GetUserByEmail(newUser.Email)
	if err != nil {
		errorMessage := map[string]string{"error": "error checking email existence"}
		res, _ := json.Marshal(errorMessage)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusInternalServerError)
		w.Write(res)
		return
	}
	if existingUser != nil {
		errorMessage := map[string]string{"error": "email already used"}
		res, _ := json.Marshal(errorMessage)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusBadRequest)
		w.Write(res)
		return
	}
	// Check if the firstname is filled
	if newUser.FirstName == "" {
		errorMessage := map[string]string{"error": "firstname is required"}
		res, _ := json.Marshal(errorMessage)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusBadRequest)
		w.Write(res)
		return
	}

	// Check if the lastname is filled
	if newUser.LastName == "" {
		errorMessage := map[string]string{"error": "lastname is required"}
		res, _ := json.Marshal(errorMessage)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusBadRequest)
		w.Write(res)
		return
	}

	// Check if the password is filled
	if newUser.Password == "" {
		errorMessage := map[string]string{"error": "password is required"}
		res, _ := json.Marshal(errorMessage)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusBadRequest)
		w.Write(res)
		return
	}

	// Check if the password is longer than 8 characters
	if len(newUser.Password) < 8 {
		errorMessage := map[string]string{"error": "password should be at least 8 characters"}
		res, _ := json.Marshal(errorMessage)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusBadRequest)
		w.Write(res)
		return
	}

	// Create the user
	createdUser := newUser.CreateUser()
	res, _ := json.Marshal(createdUser)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func GetUsers(w http.ResponseWriter, r *http.Request) {
	NewUsers := models.GetAllUsers()
	res, _ := json.Marshal(NewUsers)
	w.Header().Set("Content-Type", "pkglication/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

// func GetUserById(w http.ResponseWriter, r *http.Request) {
// 	vars := mux.Vars(r)
// 	userId := vars["userId"]
// 	ID, err := strconv.ParseInt(userId, 0, 0)
// 	if err != nil {
// 		fmt.Println("error while parsing")
// 	}
// 	userDetails, _ := models.GetUserById(ID)
// 	res, _ := json.Marshal(userDetails)
// 	w.Header().Set("Content-Type", "pkglication/json")
// 	w.WriteHeader(http.StatusOK)
// 	w.Write(res)
// }

func GetUserById(w http.ResponseWriter, r *http.Request) {
	// Parse email and password from request body
	loginInfo := struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}{}
	utils.ParseBody(r, &loginInfo)

	// Check if the email exists in the database
	user, err := models.GetUserByEmail(loginInfo.Email)
	if err != nil {
		// Error occurred while checking email existence
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}
	if user == nil {
		// Email not found in database
		http.Error(w, "Your email is not registered, please sign up", http.StatusUnauthorized)
		return
	}

	// Compare hashed password with the provided password
	err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(loginInfo.Password))
	if err != nil {
		// Incorrect password
		http.Error(w, "Wrong password", http.StatusUnauthorized)
		return
	}

	tokenString, err := utils.GenerateToken(user, middleware.JWTKey)
    if err != nil {
        http.Error(w, "Failed to generate JWT token", http.StatusInternalServerError)
        return
    }

	// Return user details (excluding password and ID) and JWT token
	userDetails := struct {
		FirstName string `json:"firstname"`
		LastName  string `json:"lastname"`
		Email     string `json:"email"`
		Token     string `json:"token"`
	}{
		FirstName: user.FirstName,
		LastName:  user.LastName,
		Email:     user.Email,
		Token:     tokenString,
	}

	// Marshal user details to JSON and write response
	res, err := json.Marshal(userDetails)
	if err != nil {
		http.Error(w, "Failed to marshal JSON response", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func DeleteUser(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	userId := vars["userId"]
	ID, err := strconv.ParseInt(userId, 0, 0)
	if err != nil {
		fmt.Println("error while parsing")
	}
	user := models.DeleteUser(ID)
	res, _ := json.Marshal(user)
	w.Header().Set("Content-Type", "pkglication/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func UpdateUser(w http.ResponseWriter, r *http.Request) {
	var updateUser = &models.User{}
	utils.ParseBody(r, updateUser)
	vars := mux.Vars(r)
	userId := vars["userId"]
	ID, err := strconv.ParseInt(userId, 0, 0)
	if err != nil {
		fmt.Println("error while parsing")
	}
	userDetails, db := models.GetUserById(ID)
	if updateUser.FirstName != "" {
		userDetails.FirstName = updateUser.FirstName
	}
	if updateUser.LastName != "" {
		userDetails.LastName = updateUser.LastName
	}
	if updateUser.Email != "" {
		userDetails.Email = updateUser.Email
	}
	if updateUser.Password != ""  {
		// Update the password only if a new password is provided
		hashedPassword, err := models.HashPassword(updateUser.Password)
		if err != nil {
			http.Error(w, "Failed to hash password", http.StatusInternalServerError)
			return
		}
		userDetails.Password = hashedPassword
	}
	db.Save(&userDetails)
	res, _ := json.Marshal(userDetails)
	w.Header().Set("Content-Type", "pkglication/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}
