package models

// import (
// 	"github.com/jinzhu/gorm"
// 	"github.com/RabihSassouh/EverAfter_Elegance/backend/pkg/config"

// )

// type Userstype struct {
// 	gorm.Model
// 	UserType string `json:"user_type"`
// 	UserID   uint   `json:"user_id"`
// }

// func init() {
// 	config.Connect()
// 	db = config.GetDB()
// 	db.AutoMigrate(&Userstype{})
// }


// func (s *Userstype) CreateUserstype() *Userstype {
// 	db.Create(&s)
// 	return s
// }

// func GetAllUserstypes() []Userstype {
// 	var Userstypes []Userstype
// 	db.Find(&Userstypes)
// 	return Userstypes
// }

// func GetUserstypeByID(ID uint) (*Userstype, *gorm.DB) {
// 	var getUserstype Userstype
// 	db := db.Where("ID=?", ID).Find(&getUserstype)
// 	return &getUserstype, db
// }

// func DeleteUserstype(ID uint) Userstype {
// 	var userstype Userstype
// 	db.Where("ID=?", ID).Delete(userstype)
// 	return userstype
// }

// type UserType struct {
//     gorm.Model
//     UserType string `gorm:"unique"`
// }

// func CreateUserType(userType string) (uint, error) {
//     // Create a new instance of UserType
//     userTypeObj := &UserType{UserType: userType}

//     // Create the user type record in the database
//     if err := db.Create(userTypeObj).Error; err != nil {
//         return 0, err
//     }

//     // Return the ID of the newly created user type
//     return userTypeObj.ID, nil
// }
