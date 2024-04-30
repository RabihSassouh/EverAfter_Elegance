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

func CreateVendor(w http.ResponseWriter, r *http.Request) {
	vendor := &models.Vendor{}
	utils.ParseBody(r, vendor)
	createdVendor := vendor.CreateVendor()
	res, _ := json.Marshal(createdVendor)
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func GetAllVendors(w http.ResponseWriter, r *http.Request) {
	vendors := models.GetAllVendors()
	res, _ := json.Marshal(vendors)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}
