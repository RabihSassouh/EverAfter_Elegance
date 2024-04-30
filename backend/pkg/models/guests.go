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

func GetGuestByID(ID uint) (*Guest, *gorm.DB) {
	var guest Guest
	db := db.Where("ID=?", ID).Find(&guest)
	return &guest, db
}

func DeleteGuest(ID uint) Guest {
	var guest Guest
	db.Where("ID=?", ID).Delete(guest)
	return guest
}
