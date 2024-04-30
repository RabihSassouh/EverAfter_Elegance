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

func CreatePhoto(w http.ResponseWriter, r *http.Request) {
	photo := &models.Photo{}
	utils.ParseBody(r, photo)
	createdPhoto := photo.CreatePhoto()
	res, _ := json.Marshal(createdPhoto)
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

