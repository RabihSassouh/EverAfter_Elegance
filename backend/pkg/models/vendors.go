package models

import (
	"github.com/RabihSassouh/final-project/backend/pkg/config"
	"github.com/jinzhu/gorm"
	"database/sql/driver"
	"encoding/json"
	"errors"
)


// StringSlice is a custom type to handle string slices as JSONB
type StringSlice []string

// Value implements the driver Valuer interface
func (s StringSlice) Value() (driver.Value, error) {
	return json.Marshal(s)
}

// Scan implements the sql.Scanner interface
func (s *StringSlice) Scan(value interface{}) error {
	if value == nil {
		*s = nil
		return nil
	}

	b, ok := value.([]byte)
	if !ok {
		return errors.New("Scan source was not []byte")
	}

	return json.Unmarshal(b, s)
}
type Vendor struct {
	gorm.Model
	CompanyName   string `json:"company_name"`
	Phone         string `json:"phone"`
	Email         string `json:"email"`
	SocialMedia   string `json:"social_media"`
	Facilities    StringSlice    `json:"facilities" gorm:"type:json"`
	Vision        string `json:"vision"`
	Category      string `json:"category"`
	Images        string `json:"images"`
	BookingInfo   string `json:"booking_info"`
	SpecialOffers StringSlice    `json:"special_offers" gorm:"type:json"`
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
