import { useState } from "react"
const formatMarketValColor = (num) => {
  return num > 0 ? "up" : "down"
}

const SelectedCoinModalPage = ({selectedCoin, setSelectedCoin, setPortfolioCoins, setOpen}) => {
  const [quantity, setQuantity] = useState(1)
  const {name, image, current_price, symbol, price_change_percentage_24h} = selectedCoin

  const addCoin = (data) => {
    setPortfolioCoins(prev => [...prev, data])
    setOpen(false)
    selectedCoin(null)
  }

  return <div>
    <div className="selected-header">
      <img alt={`${selectedCoin.name} logo`} src={image} />
      <h1 className="modal-title">{`${name.toUpperCase()}`}</h1>
    </div>
    <div className='modal-coin-select'>
      <input type='number' value={quantity} onChange={(e) => setQuantity(e.target.value)} min={1} max={1000} />
      <h1>
        Current {symbol.toUpperCase()} Price: $ {current_price}
      </h1>
      <h1>
        Price Change: <span className={`mkt-${formatMarketValColor(price_change_percentage_24h  )}`}>{price_change_percentage_24h}%</span>
      </h1>
      <h1>
      Total Cost: $ {current_price * quantity || "0.00"}
      </h1>
    </div>
    <div className="modal-select-btn-container">
        <button onClick={() => setSelectedCoin(null)}>Clear Selection</button>
        <button onClick={() => addCoin({name, quantity})}>Add Coin To Portfolio</button>
    </div>
  </div>
}

export default SelectedCoinModalPage