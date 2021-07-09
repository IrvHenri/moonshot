import axios from "axios";

const authHeader = { "auth-token": localStorage.getItem("auth-token") }

export const getPortfolioBalance = (coins) => {
  let total = 0;
  for (let coin of coins) {
    total += coin.purchasePrice;
  }
  return total;
};

export const filterCoinList = (coins, searchTerm) => {
  return coins
    .filter((coin) =>
      searchTerm
        ? coin.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          coin.symbol.toLowerCase() === searchTerm.toLocaleLowerCase()
        : true
    )
};

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
    headers: authHeader,
  })
}

export const deleteAllCoins = () => {
  return axios
    .delete("http://localhost:3001/api/portfolios/", {
      headers: authHeader,
  })
};