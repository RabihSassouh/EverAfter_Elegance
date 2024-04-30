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

func CreatePhoto(w http.ResponseWriter, r *http.Request) {
	photo := &models.Photo{}
	utils.ParseBody(r, photo)
	createdPhoto := photo.CreatePhoto()
	res, _ := json.Marshal(createdPhoto)
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func GetAllPhotos(w http.ResponseWriter, r *http.Request) {
	photos := models.GetAllPhotos()
	res, _ := json.Marshal(photos)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func GetPhotoByID(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	photoID := vars["photoID"]
	ID, err := strconv.ParseUint(photoID, 10, 64)
	if err != nil {
		fmt.Println("Error while parsing photo ID:", err)
	}
	photoDetails, _ := models.GetPhotoByID(uint(ID))
	res, _ := json.Marshal(photoDetails)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func DeletePhoto(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	photoID := vars["photoID"]
	ID, err := strconv.ParseUint(photoID, 10, 64)
	if err != nil {
		fmt.Println("Error while parsing photo ID:", err)
	}
	deletedPhoto := models.DeletePhoto(uint(ID))
	res, _ := json.Marshal(deletedPhoto)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}
