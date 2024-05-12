package controllers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"path/filepath"
	"strconv"

	"github.com/RabihSassouh/EverAfter_Elegance/backend/pkg/models"
	"github.com/RabihSassouh/EverAfter_Elegance/backend/pkg/utils"
	"io"
	"github.com/gorilla/mux"
	"os"
)

var uploadsDir = filepath.Join("backend", "uploads")

// CreateVendor creates a new vendor

func UploadImage(w http.ResponseWriter, r *http.Request) {
    err := r.ParseMultipartForm(10 << 20) // 10 MB max file size
    if err != nil {
        http.Error(w, "failed to parse multipart form", http.StatusInternalServerError)
        return
    }
    files := r.MultipartForm.File["images"]

    var imagePaths []string

    for _, file := range files {
        // Upload each image
		filepath := filepath.Join(uploadsDir, file.Filename)
        src, err := file.Open()
        if err != nil {
            http.Error(w, "failed to open file", http.StatusInternalServerError)
            return
        }
        defer src.Close()
		fmt.Println(filepath) 
        dst, err := os.Create(filepath)
        if err != nil {
			fmt.Println(filepath) 
            http.Error(w, "failed to create file", http.StatusInternalServerError)
            return
        }
        defer dst.Close()

        if _, err := io.Copy(dst, src); err != nil {
            http.Error(w, "failed to save image", http.StatusInternalServerError)
            return
        }
        imagePaths = append(imagePaths, filepath)
    }

    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusCreated)
    json.NewEncoder(w).Encode(imagePaths)
}

func CreateVendor(w http.ResponseWriter, r *http.Request) {
    var vendor models.Vendor
    if err := json.NewDecoder(r.Body).Decode(&vendor); err != nil {
        http.Error(w, err.Error(), http.StatusBadRequest)
        return
    }

    // Process image uploading
    err := r.ParseMultipartForm(10 << 20) // 10 MB max file size
    if err != nil {
        http.Error(w, "failed to parse multipart form", http.StatusInternalServerError)
        return
    }
    files := r.MultipartForm.File["images"]

    for _, file := range files {
        // Upload each image
        _, err := vendor.UploadImage(file)
        if err != nil {
            http.Error(w, "failed to upload image", http.StatusInternalServerError)
            return
        }
    }

    // Save the vendor to the database
    if err := vendor.CreateVendor(); err != nil {
        http.Error(w, "failed to create vendor", http.StatusInternalServerError)
        return
    }

    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusCreated)
    json.NewEncoder(w).Encode(vendor)
}


// func CreateVendor(w http.ResponseWriter, r *http.Request) {
//     // Parse vendor-specific information from the request body
//     vendorInfo := &models.Vendor{}
//     utils.ParseBody(r, vendorInfo)

//     // Create a new vendor object and save it to the database
//     createdVendor := vendorInfo.CreateVendor()
    
//     // Return the created vendor object in the response
//     res, _ := json.Marshal(createdVendor)
//     w.Header().Set("Content-Type", "application/json")
//     w.WriteHeader(http.StatusOK)
//     w.Write(res)
// }

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
	// if len(updateVendor.Images) != 0 {
	// 	vendorDetails.Images = updateVendor.Images
	// }	
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
	if updateVendor.ReviewCount != "" {
		vendorDetails.ReviewCount = updateVendor.ReviewCount
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

