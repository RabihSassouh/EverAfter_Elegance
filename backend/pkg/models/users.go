package models

import(
	"github.com/jinzhu/gorm"
	"github.com/RabihSassouh/final-project/backend/pkg/migrations"
)

var db *gorm.DB

type User struct{
	gorm.Model
	FirstName string `gorm:""json:"firstname"`
	LastName string `gorm:""json:"lastname"`
}