package controllers

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"net/http"
	"strconv"
	"github.com/RabihSassouh/final-project/backend/pkg/utils"
	"github.com/RabihSassouh/final-project/backend/pkg/models"
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
