package models

import (
	"github.com/jinzhu/gorm"
)

type Guest struct {
	gorm.Model
	GuestName  string `json:"guest_name"`
	Email      string `json:"email"`
	Phone      string `json:"phone"`
	RSVPStatus bool   `json:"rsvp_status"`
}

func (g *Guest) CreateGuest() *Guest {
	db.Create(&g)
	return g
}

func GetAllGuests() []Guest {
	var guests []Guest
	db.Find(&guests)
	return guests
}
