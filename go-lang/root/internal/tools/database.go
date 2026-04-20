package tools

import (
	"github.com/sirupsen/logrus"
)

type LoginDetails struct {
	AuthToken string
	Username  string
}

type CoinDetails struct {
	Coins    int64
	Username string
}

type DatabaseInterface interface {
	GetUserLoginDetails(username string) *LoginDetails
	GetUserCoins(username string) *CoinDetails
	SetupDatabase() error
}

func NewDatabase() (*DatabaseInterface, error) {
	var db DatabaseInterface = &MockDB{}
	var err error = db.SetupDatabase()
	if err != nil {
		logrus.Error(err)
		return nil, err
	}
	return &db, nil
}