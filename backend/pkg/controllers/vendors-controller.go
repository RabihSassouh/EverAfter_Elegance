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
