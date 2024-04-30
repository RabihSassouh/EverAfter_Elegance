package controllers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"
	"github.com/gorilla/mux"
	"github.com/RabihSassouh/final-project/backend/pkg/models"
	"github.com/RabihSassouh/final-project/backend/pkg/utils"
)

func CreateGuest(w http.ResponseWriter, r *http.Request) {
	guest := &models.Guest{}
	utils.ParseBody(r, guest)
	createdGuest := guest.CreateGuest()
	res, _ := json.Marshal(createdGuest)
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func GetAllGuests(w http.ResponseWriter, r *http.Request) {
	guests := models.GetAllGuests()
	res, _ := json.Marshal(guests)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func GetGuestByID(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	guestID := vars["guestID"]
	ID, err := strconv.ParseUint(guestID, 10, 64)
	if err != nil {
		fmt.Println("Error while parsing guest ID:", err)
	}
	guestDetails, _ := models.GetGuestByID(uint(ID))
	res, _ := json.Marshal(guestDetails)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}
