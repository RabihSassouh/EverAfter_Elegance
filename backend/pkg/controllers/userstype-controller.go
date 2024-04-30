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

func CreateUserstype(w http.ResponseWriter, r *http.Request) {
	userstype := &models.Userstype{}
	utils.ParseBody(r, userstype)
	createdUserstype := userstype.CreateUserstype()
	res, _ := json.Marshal(createdUserstype)
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func GetAllUserstypes(w http.ResponseWriter, r *http.Request) {
	userstypes := models.GetAllUserstypes()
	res, _ := json.Marshal(userstypes)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func GetUserstypeByID(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	usertypeID := vars["userTypeID"]
	ID, err := strconv.ParseUint(usertypeID, 10, 64)
	if err != nil {
		fmt.Println("Error while parsing user type ID:", err)
	}
	usertypeDetails, _ := models.GetUserstypeByID(uint(ID))
	res, _ := json.Marshal(usertypeDetails)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}
