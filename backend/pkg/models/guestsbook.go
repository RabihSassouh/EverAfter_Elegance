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
