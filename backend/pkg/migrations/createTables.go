package migrations

import (
	"log"
	"database/sql"
	"github.com/go-sql-driver/mysql"
)
type MySQLStorage struct {
	db *sql.DB
}

func NewMySQLStorage(cfg mysql.Config) *MySQLStorage {
	db, err := sql.Open("mysql", cfg.FormatDSN())
	if err != nil {
		log.Fatal(err)
	}
	err = db.Ping()
	if err != nil {
		log.Fatal(err)
	}
	log.Println("Connected to MySQL")
	return &MySQLStorage{db: db}
}

func (s *MySQLStorage) Init() (*sql.DB, error){
	if err := s.createUsersTable(); err != nil{
		return nil, err
	}
	if err := s.createEventsTable(); err != nil{
		return nil, err
	}
	if err := s.createUserstypeTable(); err != nil{
		return nil, err
	}
	if err := s.createPhotosTable(); err != nil{
		return nil, err
	}
	if err := s.createVendorsTable(); err != nil{
		return nil, err
	}
	if err := s.createGuestsTable(); err != nil{
		return nil, err
	}
	if err := s.createGuestsbookTable(); err != nil{
		return nil, err
	}
	if err := s.createListOfGiftsTable(); err != nil{
		return nil, err
	}
	return s.db, nil
}

func (s *MySQLStorage) createUsersTable() error{
	_,err := s.db.Exec(`
	CREATE TABLE IF NOT EXISTS users (
		id INT AUTO_INCREMENT PRIMARY KEY,
		firstname VARCHAR(50) NOT NULL,
		lastname VARCHAR(50) NOT NULL,
		email VARCHAR(100) UNIQUE,
		password VARCHAR(100)
	)`)

	return err
}

func (s *MySQLStorage) createEventsTable() error{
	_,err := s.db.Exec(`
	CREATE TABLE IF NOT EXISTS events (
		id INT AUTO_INCREMENT PRIMARY KEY,
		title VARCHAR(50) NOT NULL,
		description TEXT,
		date_time DATETIME,
		venue VARCHAR(100),
		directions TEXT,
		user_id INT,
		FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
	)`)
	if err != nil{
		return err
		}
	return err
}

func (s *MySQLStorage) createUserstypeTable() error{
	_,err := s.db.Exec(`
	CREATE TABLE IF NOT EXISTS user_types (
		id INT AUTO_INCREMENT PRIMARY KEY,
		user_type VARCHAR(50),
		user_id INT,
		FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
	)`)
	
	return err
}

func (s *MySQLStorage) createPhotosTable() error{
	_,err := s.db.Exec(`
	CREATE TABLE IF NOT EXISTS photos (
		id INT AUTO_INCREMENT PRIMARY KEY,
		filename VARCHAR(255),
		description TEXT,
		event_id INT,
		FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
	)`)
	
	return err
}

func (s *MySQLStorage) createVendorsTable() error{
	_,err := s.db.Exec(`
	CREATE TABLE IF NOT EXISTS vendors (
		id INT AUTO_INCREMENT PRIMARY KEY,
		company_name VARCHAR(100),
		phone VARCHAR(50),
		email VARCHAR(100),
		social_media VARCHAR(255),
		facilities TEXT,
		vision TEXT,
		category VARCHAR(100),
		images TEXT,
		booking_info TEXT,
		special_offers TEXT,
		location TEXT,
		rating VARCHAR(11),
		review_count VARCHAR(50),
		description TEXT,
		slug TEXT,
		guests VARCHAR(50),
		business_id INT,
		FOREIGN KEY (business_id) REFERENCES users(id) ON DELETE CASCADE
	)`)
	
	return err
}

func (s *MySQLStorage) createGuestsTable() error{
	_,err := s.db.Exec(`
	CREATE TABLE IF NOT EXISTS guests (
		id INT AUTO_INCREMENT PRIMARY KEY,
		guest_name VARCHAR(100),
		email VARCHAR(100),
		phone VARCHAR(20),
		RSVP_status BOOLEAN
	)`)
	
	return err
}

func (s *MySQLStorage) createGuestsbookTable() error{
	_,err := s.db.Exec(`
	CREATE TABLE IF NOT EXISTS guestbook (
		id INT AUTO_INCREMENT PRIMARY KEY,
		guest_name VARCHAR(100),
		message TEXT,
		timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
		guest_id INT,
		event_id INT,
		FOREIGN KEY (guest_id) REFERENCES guests(id),
		FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
	)`)

	return err
}

func (s *MySQLStorage) createListOfGiftsTable() error{
	_,err := s.db.Exec(`
	CREATE TABLE IF NOT EXISTS listOfGifts (
		id INT AUTO_INCREMENT PRIMARY KEY,
		gift_name VARCHAR(100),
		description TEXT,
		price DECIMAL(10, 2),
		status BOOLEAN,
		event_id INT,
		FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
	)`)

	return err
}