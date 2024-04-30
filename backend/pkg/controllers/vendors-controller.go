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

func GetVendorByID(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	vendorID := vars["vendorID"]
	ID, err := strconv.ParseUint(vendorID, 10, 64)
	if err != nil {
		fmt.Println("Error while parsing vendor ID:", err)
	}
	vendorDetails, _ := models.GetVendorByID(uint(ID))
	res, _ := json.Marshal(vendorDetails)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func DeleteVendor(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	vendorID := vars["vendorID"]
	ID, err := strconv.ParseUint(vendorID, 10, 64)
	if err != nil {
		fmt.Println("Error while parsing vendor ID:", err)
	}
	deletedVendor := models.DeleteVendor(uint(ID))
	res, _ := json.Marshal(deletedVendor)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func UpdateVendor(w http.ResponseWriter, r *http.Request) {
	updateVendor := &models.Vendor{}
	utils.ParseBody(r, updateVendor)
	vars := mux.Vars(r)
	vendorID := vars["vendorID"]
	ID, err := strconv.ParseUint(vendorID, 10, 64)
	if err != nil {
		fmt.Println("Error while parsing vendor ID:", err)
	}
	vendorDetails, db := models.GetVendorByID(uint(ID))
	if updateVendor.CompanyName != "" {
		vendorDetails.CompanyName = updateVendor.CompanyName
	}
	if updateVendor.Phone != "" {
		vendorDetails.Phone = updateVendor.Phone
	}
	if updateVendor.Email != "" {
		vendorDetails.Email = updateVendor.Email
	}
	if updateVendor.SocialMedia != "" {
		vendorDetails.SocialMedia = updateVendor.SocialMedia
	}
	if updateVendor.Facilities != "" {
		vendorDetails.Facilities = updateVendor.Facilities
	}
	if updateVendor.Vision != "" {
		vendorDetails.Vision = updateVendor.Vision
	}
	if updateVendor.Category != "" {
		vendorDetails.Category = updateVendor.Category
	}
	if updateVendor.Images != "" {
		vendorDetails.Images = updateVendor.Images
	}
	if updateVendor.BookingInfo != "" {
		vendorDetails.BookingInfo = updateVendor.BookingInfo
	}
	if updateVendor.SpecialOffers != "" {
		vendorDetails.SpecialOffers = updateVendor.SpecialOffers
	}
	db.Save(&vendorDetails)
	res, _ := json.Marshal(vendorDetails)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}
