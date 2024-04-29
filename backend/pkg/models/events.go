package models

import (
	"time"

	"github.com/RabihSassouh/final-project/backend/pkg/config"
	"github.com/jinzhu/gorm"
)

type Event struct {
	gorm.Model
	Title       string    `json:"title"`
	Description string    `json:"description"`
	DateTime    time.Time `json:"datetime"`
	Venue       string    `json:"venue"`
	Directions  string    `json:"directions"`
	UserID      uint      `json:"user_id"`
}

func init(){
	config.Connect()
	db = config.GetDB()
	db.AutoMigrate(&Event{})
}

func CreateEvent(event *Event) *Event {
	db.NewRecord(event)
	db.Create(&event)
	return event
}

