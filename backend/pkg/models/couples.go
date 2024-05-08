package models

import (
	"github.com/RabihSassouh/final-project/backend/pkg/config"
	"github.com/jinzhu/gorm"
	
)

type Couple struct {
	gorm.Model
	Groom_firstname   string `json:"groom_firstname"`
	Groom_lastname   string `json:"groom_lastname"`
	Groom_email         string `json:"groom_email"`
	Groom_phone         string `json:"groom_phone"`
	Bride_firstname    string    `json:"bride_firstname"`
	Bride_lastname        string `json:"bride_lastname"`
	Bride_email      string `json:"bride_email"`
	Bride_phone        string `json:"bride_phone"`
	Wedding_date   string `json:"wedding_date"`
	Venue_preference string    `json:"venue_preference"`
	Budget      string `json:"budget"`
	Guest_count        string `json:"guest_count"`
	UserID            uint   `json:"user_id"` 
    User              User   `gorm:"foreignkey:UserID"` 
}

func init() {
	config.Connect()
	db = config.GetDB()
	db.AutoMigrate(&Couple{})
}

func (c *Couple) CreateCouple() *Couple {
	db.Create(&c)
	return c
}

func GetAllCouples() []Couple {
	var couples []Couple
	db.Find(&couples)
	return couples
}

func GetCoupleByID(ID uint) (*Couple, *gorm.DB) {
	var couple Couple
	db := db.Where("ID=?", ID).Find(&couple)
	return &couple, db
}

func DeleteCouple(ID uint) Couple {
	var couple Couple
	db.Where("ID=?", ID).Delete(couple)
	return couple
}