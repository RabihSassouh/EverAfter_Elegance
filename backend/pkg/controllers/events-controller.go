package controllers

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"net/http"
	"strconv"
	"github.com/RabihSassouh/EverAfter_Elegance/backend/pkg/utils"
	"github.com/RabihSassouh/EverAfter_Elegance/backend/pkg/models"
)

func CreateEvent(w http.ResponseWriter, r *http.Request) {
	event := &models.Event{}
	utils.ParseBody(r, event)
	createdEvent := models.CreateEvent(event)
	res, _ := json.Marshal(createdEvent)
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func GetEvents(w http.ResponseWriter, r *http.Request) {
	events := models.GetAllEvents()
	res, _ := json.Marshal(events)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func GetEventByID(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	eventID := vars["eventID"]
	ID, err := strconv.ParseUint(eventID, 10, 64)
	if err != nil {
		fmt.Println("Error while parsing event ID:", err)
	}
	eventDetails, _ := models.GetEventByID(uint(ID))
	res, _ := json.Marshal(eventDetails)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func DeleteEvent(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	eventID := vars["eventID"]
	ID, err := strconv.ParseUint(eventID, 10, 64)
	if err != nil {
		fmt.Println("Error while parsing event ID:", err)
	}
	deletedEvent := models.DeleteEvent(uint(ID))
	res, _ := json.Marshal(deletedEvent)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func UpdateEvent(w http.ResponseWriter, r *http.Request) {
	updateEvent := &models.Event{}
	utils.ParseBody(r, updateEvent)
	vars := mux.Vars(r)
	eventID := vars["eventID"]
	ID, err := strconv.ParseUint(eventID, 10, 64)
	if err != nil {
		fmt.Println("Error while parsing event ID:", err)
	}
	eventDetails, db := models.GetEventByID(uint(ID))
	if updateEvent.Title != "" {
		eventDetails.Title = updateEvent.Title
	}
	if updateEvent.Description != "" {
		eventDetails.Description = updateEvent.Description
	}
	if !updateEvent.DateTime.IsZero() {
		eventDetails.DateTime = updateEvent.DateTime
	}
	if updateEvent.Venue != "" {
		eventDetails.Venue = updateEvent.Venue
	}
	if updateEvent.Directions != "" {
		eventDetails.Directions = updateEvent.Directions
	}
	db.Save(&eventDetails)
	res, _ := json.Marshal(eventDetails)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}