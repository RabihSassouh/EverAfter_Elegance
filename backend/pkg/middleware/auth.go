// auth.go

package middleware

import (
    "net/http"
    "github.com/dgrijalva/jwt-go"
    // "github.com/RabihSassouh/final-project/backend/pkg/models"
)

var jwtKey = []byte("your-secret-key")

func AuthenticationMiddleware(next http.HandlerFunc) http.HandlerFunc {
    return func(w http.ResponseWriter, r *http.Request) {
        tokenString := r.Header.Get("Authorization")
        if tokenString == "" {
            w.WriteHeader(http.StatusUnauthorized)
            return
        }

        token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
            return jwtKey, nil
        })

        if err != nil || !token.Valid {
            w.WriteHeader(http.StatusUnauthorized)
            return
        }

        next.ServeHTTP(w, r)
    }
}
