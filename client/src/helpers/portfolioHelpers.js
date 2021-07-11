import axios from "axios";

const authHeader = { "auth-token": localStorage.getItem("auth-token") }

export const formatMarketValColor = (num) => {
  let numInt = parseInt(num)
  return numInt > 0 ? "mkt-up" : numInt < 0 ? "mkt-down" : ""
}

export const getPortfolioBalance = (coins) => {
  return coins.reduce((total, curr) => total + curr.purchasePrice, 0)
};

export const getTotalPl = (coins, updatedCoinData) => {
  const updatedCoinPrice = updatedCoinData.reduce((total, curr) => total + curr.coin.market_data.current_price.usd, 0)
  const portfolioBalance = getPortfolioBalance(coins)
  const totalPl = updatedCoinPrice - portfolioBalance
  return totalPl
}

export const filterCoinList = (coins, searchTerm) => {
  return coins
    .filter((coin) =>
      searchTerm
        ? coin.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          coin.symbol.toLowerCase() === searchTerm.toLocaleLowerCase()
        : true
    )
};

export const getOneCoin = (coinId) => {
  return axios.get(`http://localhost:3001/api/coins/${coinId}`)
}

export const addOneCoin = (coinId, quantity, purchasePrice) => {
  return axios.post(
    `http://localhost:3001/api/portfolios/${coinId}`,
    { quantity, purchasePrice },
    { headers: authHeader }
  )
}

export const updateOneCoin = (coinId, quantity, purchasePrice) => {
  return axios.put(
    `http://localhost:3001/api/portfolios/${coinId}`,
    { quantity, purchasePrice },
    {headers: authHeader}
  )
}

export const deleteOneCoin = (coinId) => {
  return axios
  .delete(`http://localhost:3001/api/portfolios/${coinId}`, {
    headers: authHeader
  })
}

export const deleteAllCoins = () => {
  return axios
    .delete("http://localhost:3001/api/portfolios/", {
      headers: authHeader
  })
};

export const updatePortfolioName = (newName) => {
  return axios.put("http://localhost:3001/api/portfolios/change-name",
    { newName },
    {headers: authHeader}
  )
}

export const formatPortfolioCurrency = (num) => {
  const formattedNum = Intl.NumberFormat('en-IN',{ style: 'currency', currency: 'USD' }).format(num)
  return formattedNum
}