package models

import (
	"database/sql/driver"
	"encoding/json"
	"errors"
	"io"
	"mime/multipart"
	"os"
	"path/filepath"

	"github.com/RabihSassouh/EverAfter_Elegance/backend/pkg/config"
	"github.com/jinzhu/gorm"
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
	Images        []string `json:"images"`
	BookingInfo   string `json:"booking_info"`
	SpecialOffers StringSlice    `json:"special_offers" gorm:"type:json"`
	Location      string `json:"location"`
	Rating        string `json:"rating"`
	ReviewCount  string `json:"review_count"`
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


// CreateVendor creates a new vendor
func (v *Vendor) CreateVendor() error {
	// Save the vendor object to the database
    if err := db.Create(v).Error; err != nil {
		return err
    }
	
	return nil
}

func (v *Vendor) UploadImage(fileHeader *multipart.FileHeader) (string, error) {
	// Upload the image
	var uploadsDir = filepath.Join("backend", "uploads")
	
filepath := filepath.Join(uploadsDir, fileHeader.Filename)
    src, err := fileHeader.Open()
    if err != nil {
        return "", err
    }
    defer src.Close()

    dst, err := os.Create(filepath)
    if err != nil {
        return "", err
    }
    defer dst.Close()

    if _, err := io.Copy(dst, src); err != nil {
        return "", err
    }

    // Add the filepath to the Vendor's Images field
    v.Images = append(v.Images, filepath)

    return filepath, nil
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
func GetVendorsByCategory(category string) ([]Vendor, error) {
    var vendors []Vendor
    if err := db.Where("category = ?", category).Find(&vendors).Error; err != nil {
        return nil, err
    }
    return vendors, nil
}


// // SerializeImages serializes the Images field into a JSON string
// func (v *Vendor) SerializeImages() (string, error) {
// 	jsonData, err := json.Marshal(v.Images)
// 	if err != nil {
// 		return "", err
// 	}
// 	return string(jsonData), nil
// }

// // DeserializeImages deserializes the JSON string into the Images field
// func (v *Vendor) DeserializeImages(jsonData string) error {
// 	return json.Unmarshal([]byte(jsonData), &v.Images)
// }