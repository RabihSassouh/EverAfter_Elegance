package models

import (
	"github.com/jinzhu/gorm"
	"github.com/RabihSassouh/EverAfter_Elegance/backend/pkg/config"
)

type Guestbook struct {
	gorm.Model
	GuestName string `json:"guest_name"`
	Message   string `json:"message"`
	Timestamp string `json:"timestamp"`
	GuestID   uint   `json:"guest_id"`
	EventID   uint   `json:"event_id"`
}

func init(){
	config.Connect()
	db = config.GetDB()
	db.AutoMigrate(&Guestbook{})
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

func DeleteGuestbookEntry(ID uint) Guestbook {
	var guestbookEntry Guestbook
	db.Where("ID=?", ID).Delete(guestbookEntry)
	return guestbookEntry
}
