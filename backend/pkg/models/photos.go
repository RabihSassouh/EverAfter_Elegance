package models

import (
	"github.com/jinzhu/gorm"
	"github.com/RabihSassouh/EverAfter_Elegance/backend/pkg/config"
)

type Photo struct {
	gorm.Model
	FileName    string `json:"filename"`
	Description string `json:"description"`
	EventID     uint   `json:"event_id"`
}

func init(){
	config.Connect()
	db = config.GetDB()
	db.AutoMigrate(&Photo{})
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

func GetPhotoByID(ID uint) (*Photo, *gorm.DB) {
	var photo Photo
	db := db.Where("ID=?", ID).Find(&photo)
	return &photo, db
}

func DeletePhoto(ID uint) Photo {
	var photo Photo
	db.Where("ID=?", ID).Delete(photo)
	return photo
}
