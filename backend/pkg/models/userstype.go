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

