package api

import (
	"encoding/json"
	"net/http"
)

// CoinBalanceParam defines the parameters for the balance endpoint
type CoinBalanceParam struct {
	Username string
}

// CoinBalanceResponse defines the successful response body
type CoinBalanceResponse struct {
	Status  int // success code 200
	Balance int64
}

// Error defines the error response body
type Error struct {
	Code    int // error code 400 for bad request, 404 for not found, 500 for internal server error
	Message string
}

func WriteError(w http.ResponseWriter, message string, code int) {
	resp := Error{
		Code:    code,
		Message: message,
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(code)
	json.NewEncoder(w).Encode(resp)
}

var ( // var is for global varibale declaration
	RequestErrorHandler = func(w http.ResponseWriter, err error) {
		WriteError(w, err.Error(), http.StatusBadRequest)
	}
	InternalErrorHandler = func(w http.ResponseWriter) {
		WriteError(w, "An Unexpected Error Occurred.", http.StatusInternalServerError)
	}
)