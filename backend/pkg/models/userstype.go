package models

import (
	"github.com/jinzhu/gorm"
)

type Userstype struct {
	gorm.Model
	UserType string `json:"user_type"`
	UserID   uint   `json:"user_id"`
}

func (s *Userstype) CreateUserstype() *Userstype {
	db.Create(&s)
	return s
}

func GetAllUserstypes() []Userstype {
	var Userstypes []Userstype
	db.Find(&Userstypes)
	return Userstypes
}

func GetUserstypeByID(ID uint) (*Userstype, *gorm.DB) {
	var getUserstype Userstype
	db := db.Where("ID=?", ID).Find(&getUserstype)
	return &getUserstype, db
}
