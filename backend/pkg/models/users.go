package models

import (
	"github.com/RabihSassouh/final-project/backend/pkg/config"
	"github.com/jinzhu/gorm"
	"golang.org/x/crypto/bcrypt"
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

func (u *User) CreateUser() *User{
	hashPassword, err := hashPassword(u.Password)
	if err != nil {
		return nil
	}
	u.Password = hashPassword
	db.NewRecord(u)
	db.Create(&u)
	return u
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