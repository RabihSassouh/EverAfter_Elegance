package controllers

import (
	"encoding/json"
	// "fmt"
	"net/http"
	// "strconv"
	// "github.com/gorilla/mux"
	"github.com/RabihSassouh/final-project/backend/pkg/models"
	"github.com/RabihSassouh/final-project/backend/pkg/utils"
)

func CreateGuestbookEntry(w http.ResponseWriter, r *http.Request) {
	guestbookEntry := &models.Guestbook{}
	utils.ParseBody(r, guestbookEntry)
	createdEntry := guestbookEntry.CreateGuestbook()
	res, _ := json.Marshal(createdEntry)
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func GetAllGuestbookEntries(w http.ResponseWriter, r *http.Request) {
	entries := models.GetAllGuestbookEntries()
	res, _ := json.Marshal(entries)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}