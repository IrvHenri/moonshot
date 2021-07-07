import { useState } from "react"
const formatMarketValColor = (num) => {
  return num > 0 ? "up" : "down"
}

const SelectedCoinModalPage = ({selectedCoin, setSelectedCoin, setPortfolioCoins, setOpen}) => {
  const [quantity, setQuantity] = useState(1)
  const [error, setError] = useState(null)
  const {
    id, 
    name, 
    image, 
    current_price, 
    symbol, 
    market_cap, 
    market_cap_rank, 
    price_change_percentage_24h, 
    ath} = selectedCoin

  const addCoin = (id, quantity, purchasePrice) => {
    if (quantity <= 0){
      setError("Error: Quantity must be a positive number.")
    } else {
      //Add a condition to check if the coin is already in the portfolio
      setPortfolioCoins(prev => [...prev, {id, quantity, purchasePrice}])
      setOpen(false)
      setSelectedCoin(null)
    }
  }

  return <div>
    <div className="selected-header">
      <img alt={`${selectedCoin.name} logo`} src={image} />
      <h1 className="modal-title">{`${name.toUpperCase()}`}</h1>
    </div>
    <div className='modal-coin-select'>
      {error && <p>{error}</p>}
      <input type='number' value={quantity} onChange={(e) => setQuantity(e.target.value)} min={1} max={1000} />
      <h1>
        Current {symbol.toUpperCase()} Price: $ {current_price}
      </h1>
      <h1>
        24h Price Change: <span className={`mkt-${formatMarketValColor(price_change_percentage_24h  )}`}>{price_change_percentage_24h}%</span>
      </h1>
      <h1>
        All Time High: ${ath}
      </h1>
      <h1>
        Total Cost: $ {current_price * quantity || "0.00"}
      </h1>
    </div>
    <div className="modal-select-btn-container">
        <button onClick={() => setSelectedCoin(null)}>Clear Selection</button>
        <button onClick={() => addCoin(id, quantity, current_price)}>Add Coin To Portfolio</button>
    </div>
  </div>
}

export default SelectedCoinModalPage