package handlers

import (
	"github.com/go-chi/chi"
	chimiddleware "github.com/go-chi/chi/middleware"
	"root/internal/middleware"
)

func Handler(r *chi.Mux) {
	// Global middleware
	r.Use(chimiddleware.StripSlashes)

	r.Route("/account", func(router chi.Router) {
		// Authorization middleware for /account
		router.Use(middleware.Authorization)

		router.Get("/coins", GetCoinBalance)
	})
}