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
	if len(updateVendor.Facilities) != 0 {
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
	if len(updateVendor.SpecialOffers) != 0 {
		vendorDetails.SpecialOffers = updateVendor.SpecialOffers
	}
	if updateVendor.Location != ""{
		vendorDetails.Location = updateVendor.Location
	}
	if updateVendor.Rating != "" {
		vendorDetails.Rating = updateVendor.Rating
	}        
	if updateVendor.Review_count != "" {
		vendorDetails.Review_count = updateVendor.Review_count
	}  
	if updateVendor.Description  != "" {
		vendorDetails.Description = updateVendor.Description
	}
	if updateVendor.Slug != "" {
		vendorDetails.Slug = updateVendor.Slug
	}        
	if updateVendor.Guests != "" {
		vendorDetails.Guests = updateVendor.Guests
	}
	
	db.Save(&vendorDetails)
	res, _ := json.Marshal(vendorDetails)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func GetVendorsByCategory(w http.ResponseWriter, r *http.Request) {
    var requestData struct {
        Category string `json:"category"`
    }
    if err := json.NewDecoder(r.Body).Decode(&requestData); err != nil {
        http.Error(w, "Invalid JSON payload", http.StatusBadRequest)
        return
    }

    category := requestData.Category
    if category == "" {
        http.Error(w, "Missing category parameter", http.StatusBadRequest)
        return
    }

    vendorList, err := models.GetVendorsByCategory(category)
    if err != nil {
        fmt.Println("Error while retrieving vendors by category:", err)
        http.Error(w, "Internal server error", http.StatusInternalServerError)
        return
    }

    res, err := json.Marshal(vendorList)
    if err != nil {
        fmt.Println("Error while marshalling vendor list into JSON:", err)
        http.Error(w, "Internal server error", http.StatusInternalServerError)
        return
    }

    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusOK)
    w.Write(res)
}

