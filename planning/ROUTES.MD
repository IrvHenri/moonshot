### Auth Routes → “/api/users”

*I suggest we use bcrypt and JWT here. Auth can then be used as middleware to protect routes

/signup POST

/login POST

### Coins → /api/coins

/ GET (get all coin data) → pokes coingecko api → sends off to front-end

/:coinId (GET a specific coin (for detailed view) 

### Portfolio Routes → /api/portfolios/

*User token data will be used to validate which user is which, like we did with the midterm. This will be a protected route

/ GET (get portfolio info)

/:coinId POST (add a single coin)

/:coinId DELETE (remove a single coin)

/:coinId PUT (update coin

/ DELETE (clears entire portfolio)

### Watchlist → /api/watchlist

Routes are gonna be practically identical to the portfolio routes, since the operations are the same