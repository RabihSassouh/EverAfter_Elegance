package utils

import(
	"encoding/json"
	"io"
	"net/http"
	"github.com/dgrijalva/jwt-go"
    "github.com/RabihSassouh/final-project/backend/pkg/models"
    "time"

)

func ParseBody(r *http.Request, x interface{}){
	if body, err := io.ReadAll(r.Body); err == nil{
		if err := json.Unmarshal([]byte(body), x); err != nil{
			return
		}
	}
}

var jwtKey = []byte("your-secret-key")

func GenerateToken(user *models.User, jwtKey []byte) (string, error) {
    claims := jwt.MapClaims{
        "user_id": user.ID,
        "exp":     time.Now().Add(time.Hour * 24).Unix(),
    }

    token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
    tokenString, err := token.SignedString(jwtKey)
    if err != nil {
        return "", err
    }

    return tokenString, nil
}
