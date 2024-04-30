package models

import (
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
	BusinessID    uint   `json:"business_id"`
}

func (v *Vendor) CreateVendor() *Vendor {
	db.Create(&v)
	return v
}
