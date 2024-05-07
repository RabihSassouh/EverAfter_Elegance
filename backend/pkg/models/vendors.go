package models

import (
	"github.com/RabihSassouh/final-project/backend/pkg/config"
	"github.com/jinzhu/gorm"
)

type Vendor struct {
	gorm.Model
	CompanyName   string `json:"company_name"`
	Phone         string `json:"phone"`
	Email         string `json:"email"`
	SocialMedia   string `json:"social_media"`
	Facilities    string `json:"facilities"`
	Vision        string `json:"vision"`
	Category      string `json:"category"`
	Images        string `json:"images"`
	BookingInfo   string `json:"booking_info"`
	SpecialOffers string `json:"special_offers"`
	Location      string `json:"location"`
	Rating        string `json:"rating"`
	Review_count  string `json:"review_count"`
	Description   string `json:"description"`
	Slug          string `json:"slug"`
	Guests        string `json:"guests"`
	BusinessID    uint   `json:"business_id"`
}

func init() {
	config.Connect()
	db = config.GetDB()
	db.AutoMigrate(&Vendor{})
}

func (v *Vendor) CreateVendor() *Vendor {
	db.Create(&v)
	return v
}

func GetAllVendors() []Vendor {
	var vendors []Vendor
	db.Find(&vendors)
	return vendors
}

func GetVendorByID(ID uint) (*Vendor, *gorm.DB) {
	var vendor Vendor
	db := db.Where("ID=?", ID).Find(&vendor)
	return &vendor, db
}

func DeleteVendor(ID uint) Vendor {
	var vendor Vendor
	db.Where("ID=?", ID).Delete(vendor)
	return vendor
}
