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

func CreateGuest(w http.ResponseWriter, r *http.Request) {
	guest := &models.Guest{}
	utils.ParseBody(r, guest)
	createdGuest := guest.CreateGuest()
	res, _ := json.Marshal(createdGuest)
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}
