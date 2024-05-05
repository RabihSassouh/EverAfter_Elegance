// auth.go

package middleware

import (
	"fmt"
	"net/http"
	"strings"

	"github.com/dgrijalva/jwt-go"
	// "github.com/RabihSassouh/final-project/backend/pkg/models"
)

var JWTKey = []byte("your-secret-key")

func AuthenticationMiddleware(next http.HandlerFunc) http.HandlerFunc {
    return func(w http.ResponseWriter, r *http.Request) {
        tokenString := r.Header.Get("Authorization")
        tokenString = strings.Replace(tokenString, "Bearer ", "", 1)
        if tokenString == "" {
            fmt.Println("Missing token in request header")
            w.WriteHeader(http.StatusUnauthorized)
            return
        }

        token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
            return JWTKey, nil
        })

        if err != nil {
            fmt.Println("Error parsing token:", err)
            w.WriteHeader(http.StatusUnauthorized)
            return
        }

        if !token.Valid {
            fmt.Println("Invalid token")
            w.WriteHeader(http.StatusUnauthorized)
            return
        }

        next.ServeHTTP(w, r)
    }
}
