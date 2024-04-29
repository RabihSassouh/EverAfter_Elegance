package models

import(
	"github.com/jinzhu/gorm"
	"github.com/RabihSassouh/final-project/backend/pkg/config"
)

var db *gorm.DB

type User struct{
	gorm.Model
	FirstName string `json:"firstname"`
	LastName string `json:"lastname"`
	Email string `json:"email"`
	Password string "json:\"password\" hashed:\"password\""
}

func init(){
	config.Connect()
	db = config.GetDB()
	db.AutoMigrate(&User{})
}

func (u *User) CreateUser() *User{
	db.NewRecord(u)
	db.Create(&u)
	return u
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