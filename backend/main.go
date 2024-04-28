package main

import (
	"fmt"
	"log"
	"github.com/go-sql-driver/mysql"
)

func main() {
	cfg := mysql.Config{
		User:                 Envs.DBUser,
		Passwd:             Envs.DBPassword,
		Addr:                 Envs.DBAdress,
		DBName:               Envs.DBName,
		Net:                  "tcp",
		AllowNativePasswords: true,
		ParseTime:            true,
	}
	sqlStorage := NewMySQLStorage(cfg)
	db, err := sqlStorage.Init()
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()
	err = db.Ping()
	if err != nil {
		log.Fatal("error: %v", err)
	}
	fmt.Println("connected")
	store := NewStore(db)
	api := NewAPIServer(":3000", store)
	api.Serve()
}
