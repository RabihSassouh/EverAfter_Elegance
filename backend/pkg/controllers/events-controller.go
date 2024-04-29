package controllers

import (
	"encoding/json"
	// "fmt"
	// "github.com/gorilla/mux"
	"net/http"
	// "strconv"
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

