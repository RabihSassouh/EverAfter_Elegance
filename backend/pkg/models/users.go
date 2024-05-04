package models

import (
	"github.com/RabihSassouh/final-project/backend/pkg/config"
	"github.com/jinzhu/gorm"
	"golang.org/x/crypto/bcrypt"
	"errors"
	"regexp"
)

var db *gorm.DB

type User struct{
	gorm.Model
	FirstName string `json:"firstname"`
	LastName string `json:"lastname"`
	Email string `json:"email"`
	Password string `json:"password"`
}

func init(){
	config.Connect()
	db = config.GetDB()
	db.AutoMigrate(&User{})
}

// func (u *User) CreateUser() *User{
// 	hashPassword, err := hashPassword(u.Password)
// 	if err != nil {
// 		return nil
// 	}
// 	u.Password = hashPassword
// 	db.NewRecord(u)
// 	db.Create(&u)
// 	return u
// }

func (u *User) CreateUser() *User {
    // Validate the user object
    if err := u.validate(); err != nil {
        // Validation failed, return nil indicating failure
        return nil
    }

    // Hash the password
    hashedPassword, err := hashPassword(u.Password)
    if err != nil {
        // Error hashing password, return nil indicating failure
        return nil
    }
    u.Password = hashedPassword

    // Create the user in the database
    db.NewRecord(u)
    if err := db.Create(&u).Error; err != nil {
        // Error creating user, return nil indicating failure
        return nil
    }

    // Return the created user
    return u
}


func (u *User) validate() error {
	if u.Email == "" {
		return errors.New("email is required")
	}

	emailRegex := regexp.MustCompile(`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`)
	if !emailRegex.MatchString(u.Email) {
		return errors.New("invalid email address format")
	}
	
	if u.Password == "" {
		return errors.New("password is required")
	}

	if len(u.Password) < 8 {
		return errors.New("password must be at least 8 characters long")
	}
	return nil
}

func GetUserByEmail(email string) (*User, error) {
    var user User
    result := db.Where("email = ?", email).First(&user)
    if result.Error != nil {
        if result.RecordNotFound() {
            // User with the provided email does not exist
            return nil, nil
        }
        // Some other error occurred
        return nil, result.Error
    }
    // User with the provided email found
    return &user, nil
}


func hashPassword(password string) (string, error){
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return "error", err
	}
	return string(hashedPassword), nil
}


func GetAllUsers() []User{
	var Users [] User
	db.Find(&Users)
	return Users
}

func GetUserById(Id int64) (*User, *gorm.DB){
	var getUser User
	db :=db.Where("ID=?", Id).Find(&getUser)
	return &getUser, db
}

func DeleteUser(ID int64) User{
	var user User
	db.Where("ID=?", ID).Delete(user)
	return user
}