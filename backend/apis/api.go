package main
import (
	"log"
	"net/http"
	"github.com/gorilla/mux"
)

type APIServer struct {
	addr string
	store Store
}

func NewAPIServer (addr string, store Store) * APIServer {
	return &APIServer{addr: addr, store: store}
}

func (s*APIServer) Serve() {
	router := mux.NewRouter()
	subrouter := router.PathPrefix("/api/v1").subrouter()

	// Registering services

	log.Fatal(http.ListenAndServer(s.addr, subrouter))
}