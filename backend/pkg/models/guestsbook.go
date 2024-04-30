package models

import (
	"github.com/jinzhu/gorm"
)

type Guestbook struct {
	gorm.Model
	GuestName string `json:"guest_name"`
	Message   string `json:"message"`
	Timestamp string `json:"timestamp"`
	GuestID   uint   `json:"guest_id"`
	EventID   uint   `json:"event_id"`
}

func (g *Guestbook) CreateGuestbook() *Guestbook {
	db.Create(&g)
	return g
}

func GetAllGuestbookEntries() []Guestbook {
	var guestbookEntries []Guestbook
	db.Find(&guestbookEntries)
	return guestbookEntries
}

func GetGuestbookEntryByID(ID uint) (*Guestbook, *gorm.DB) {
	var guestbookEntry Guestbook
	db := db.Where("ID=?", ID).Find(&guestbookEntry)
	return &guestbookEntry, db
}
