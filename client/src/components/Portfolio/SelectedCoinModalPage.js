import { useState } from "react"
const SelectedCoinModalPage = ({selectedCoin, setSelectedCoin}) => {
  const [quantity, setQuantity] = useState(null)
  const {name, image, current_price, symbol} = selectedCoin
  return <div>
    <div className="selected-header">
      <img alt={`${selectedCoin.name} logo`} src={image} />
      <h1 className="modal-title">{`${name.toUpperCase()}`}</h1>
    </div>
    <div className='modal-coin-select'>
      <input type='number' value={quantity} onChange={(e) => setQuantity(e.target.value)} min={1} max={1000} />
      <h1>
      Current {symbol.toUpperCase()} Price: {`$ ${current_price}`}
      </h1>
      <h1>
      Total Cost: $ {current_price * quantity || "0.00"}
      </h1>
    </div>
    <div className="modal-select-btn-container">
        <p onClick={() => setSelectedCoin(null)}>Clear Selection</p>
        <p>Add Coin To Portfolio</p>
    </div>
  </div>
}

export default SelectedCoinModalPage