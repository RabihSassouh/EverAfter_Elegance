package models

import (
	"github.com/jinzhu/gorm"
)

type Photo struct {
	gorm.Model
	FileName    string `json:"filename"`
	Description string `json:"description"`
	EventID     uint   `json:"event_id"`
}

func (s *Photo) CreatePhoto() *Photo {
	db.Create(&s)
	return s
}

func GetAllPhotos() []Photo {
	var photos []Photo
	db.Find(&photos)
	return photos
}
