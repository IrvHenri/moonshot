import { useState } from "react"
import { formatMarketValColor, formatPortfolioCurrency } from '../../helpers/portfolioHelpers'

const SelectedCoinModalPage = ({selectedCoin, setSelectedCoin, updateCoin, setOpen}) => {
  const [quantity, setQuantity] = useState(1)
  const [error, setError] = useState("")
  const {
    id, 
    name, 
    image, 
    current_price, 
    symbol, 
    price_change_percentage_24h, 
    ath} = selectedCoin

  const fixedPrice = price_change_percentage_24h.toFixed(2)
  const addCoin = (id, quantity, purchasePrice) => {
    if (quantity <= 0){
      setError("Error: Quantity must be a positive number.")
    } else {
      updateCoin(id, quantity, purchasePrice)
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
      {error && <p className='err'>{error}</p>}
      <input 
      type='number' 
      value={quantity} 
      onChange={(e) => {
        setQuantity(e.target.value)
        setError("")}} 
      min={1} 
      max={1000} />
      <p className='coin-select-quantity'>Add {quantity} {symbol} to your portfolio</p>
      <h1>
        Current {symbol.toUpperCase()} Price: <span>${current_price}</span>
      </h1>
      <h1>
        24h Price Change: <span className={`${formatMarketValColor(fixedPrice)}`}>{fixedPrice}%</span>
      </h1>
      <h1>
        All Time High: <span>{formatPortfolioCurrency(ath)}</span>
      </h1>
      <h1>
        Total Cost: <span>{formatPortfolioCurrency(current_price * quantity) || "0.00"}</span>
      </h1>
    </div>
    <div className="modal-select-btn-container">
      <button onClick={() => setSelectedCoin(null)}>Clear Selection</button>
      <button onClick={() => addCoin(id, quantity, current_price)}>Add Coin To Portfolio</button>
    </div>
  </div>
}

export default SelectedCoinModalPage