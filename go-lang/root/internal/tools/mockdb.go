package tools

type MockDB struct{}

var mockLoginDetails = map[string]LoginDetails{
	"alex": {
		AuthToken: "123",
		Username:  "alex",
	},
	"marie": {
		AuthToken: "456",
		Username:  "marie",
	},
}

var mockCoinDetails = map[string]CoinDetails{
	"alex": {
		Coins:    100,
		Username: "alex",
	},
	"marie": {
		Coins:    200,
		Username: "marie",
	},
}

func (d *MockDB) GetUserLoginDetails(username string) *LoginDetails {
	clientData, ok := mockLoginDetails[username]
	if !ok {
		return nil
	}
	return &clientData
}

func (d *MockDB) GetUserCoins(username string) *CoinDetails {
	clientData, ok := mockCoinDetails[username]
	if !ok {
		return nil
	}
	return &clientData
}

func (d *MockDB) SetupDatabase() error {
	return nil
}