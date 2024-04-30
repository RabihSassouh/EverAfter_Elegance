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

func GetAllEvents() []Event {
	var events []Event
	db.Find(&events)
	return events
}

func GetEventByID(id uint) (*Event, *gorm.DB) {
	var event Event
	db := db.Where("id = ?", id).Find(&event)
	return &event, db
}

func DeleteEvent(id uint) Event {
	var event Event
	db.Where("id = ?", id).Delete(&event)
	return event
}
