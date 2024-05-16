package controllers

import (
	"encoding/json"
	"fmt"

	"github.com/RabihSassouh/EverAfter_Elegance/backend/pkg/middleware"
	"github.com/RabihSassouh/EverAfter_Elegance/backend/pkg/models"
	"github.com/RabihSassouh/EverAfter_Elegance/backend/pkg/utils"

	// "github.com/dgrijalva/jwt-go"
	"errors"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	"github.com/gorilla/sessions"
	"golang.org/x/crypto/bcrypt"
)

var NewUser models.User

var store = sessions.NewCookieStore([]byte("your-secret-key"))
type Response struct {
	Message string `json:"message"`
}

func ValidateEmailHandler(w http.ResponseWriter, r *http.Request) {
	var newUser models.User
	if err := json.NewDecoder(r.Body).Decode(&newUser); err != nil {
		fmt.Println("Error decoding request body:", err)
		respondWithError(w, map[string]string{"error": "Invalid request"}, http.StatusBadRequest)
		return
	}

	if err := models.ValidateEmail(newUser.Email); err != nil {
		fmt.Println("Email validation error:", err)
		respondWithError(w, map[string]string{"error": err.Error()}, http.StatusBadRequest)
		return
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(newUser.Password), bcrypt.DefaultCost)
	if err != nil {
		fmt.Println("Error hashing password:", err)
		respondWithError(w, map[string]string{"error": "Failed to hash password"}, http.StatusInternalServerError)
		return
	}

	session, err := store.Get(r, "user-session")
	if err != nil {
		fmt.Println("Error getting user session:", err)
		respondWithError(w, map[string]string{"error": "Failed to create session"}, http.StatusInternalServerError)
		return
	}

	session.Values["firstname"] = newUser.FirstName
	session.Values["lastname"] = newUser.LastName
	session.Values["email"] = newUser.Email
	session.Values["password"] = hashedPassword

	fmt.Println("Session Data:")
	fmt.Println("Firstname:", session.Values["firstname"])
	fmt.Printf("Type of firstname: %T\n", "Firstname")

	fmt.Println("  Lastname:", session.Values["lastname"])
	fmt.Println("  Email:", session.Values["email"])

	defer session.Save(r, w)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
}



func GetUserDataFromSession(r *http.Request) (firstname, lastname, email, password string, err error) {
	session, err := store.Get(r, "user-session")
	if err != nil {
		fmt.Println("Error getting user session:", err)
		return "", "", "", "", errors.New("failed to get user session")
	}
	// Print session values for debugging
	fmt.Println("Session Values:")
	fmt.Println("  Firstname:", session.Values["firstname"])
	fmt.Println("  Lastname:", session.Values["lastname"])
	fmt.Println("  Email:", session.Values["email"])
	fmt.Println("  Password:", session.Values["password"])

	if session.Values["firstname"] == nil || session.Values["lastname"] == nil || session.Values["email"] == nil || session.Values["password"] == nil {
		fmt.Printf("Session values missing")
		return "", "", "", "", errors.New("user data not found in session")
	}

	firstname = session.Values["firstname"].(string)
	lastname = session.Values["lastname"].(string)
	email = session.Values["email"].(string)
	password = session.Values["password"].(string)

	return firstname, lastname, email, password, nil
}

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

	createdUser := newUser.CreateUser()
	if createdUser == nil {
		errorMessage := map[string]string{"error": "failed to create user"}
		respondWithError(w, errorMessage, http.StatusInternalServerError)
		return
	}

	if newUser.UserType == "business owner" {
		res, _ := json.Marshal(map[string]string{"message": "Vendor registration requires additional information"})
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write(res)
		return
	}

	tokenString, err := utils.GenerateToken(createdUser, middleware.JWTKey)
    if err != nil {
        http.Error(w, "Failed to generate JWT token", http.StatusInternalServerError)
        return
    }

    // Add token to response
    response := map[string]interface{}{
        "user":  createdUser,
        "token": tokenString,
    }

	res, _ := json.Marshal(response)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func respondWithError(w http.ResponseWriter, errorMessage map[string]string, statusCode int) {
	res, _ := json.Marshal(errorMessage)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(statusCode)
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
		UserType  string `json:"user_type"`
		Token     string `json:"token"`
	}{
		FirstName: user.FirstName,
		LastName:  user.LastName,
		Email:     user.Email,
		UserType:  user.UserType,
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
	if updateUser.Password != "" {
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
