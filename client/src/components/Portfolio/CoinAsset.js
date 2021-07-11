import { useState } from "react";
import { Modal } from "@material-ui/core";
import { formatMarketValColor } from '../../helpers/portfolioHelpers'
import { AiOutlineArrowRight } from 'react-icons/ai'
const CoinAsset = ({
  coin,
  updateCoin,
  removeCoin,
  onClick,
  userCoinData
}) => {
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [updatedCoinQuantity, setUpdatedCoinQuantity] = useState(1);
  const [error, setError] = useState("")

  const currentPrice = coin.market_data.current_price.usd
  const weekPricePercent = coin.market_data.price_change_percentage_7d
  const coinSymbol = coin.symbol.toUpperCase()
  const handleUpdate = () => {
    if (parseInt(quantity) + parseInt(updatedCoinQuantity) <= 0) {
      setError("Error: Portfolio coin balance must be a positive number.")
    } else {
      updateCoin(id, updatedCoinQuantity, currentPrice);
      setUpdateModalOpen(false);
    }
  };


  if(!userCoinData) return null
  const { id, quantity, purchasePrice} = userCoinData
  return (
    <div onClick={onClick} className="coin-asset-row">
      <div>
        <img className="coin-asset-row-img" alt={`${coin.id} logo`} src={coin.image.thumb} />
        <h1 className="coin-asset-row-name">{coinSymbol}</h1>
      </div>
      <div>
        <h1>Price:</h1>
        <h1>{currentPrice}</h1>
      </div>
      <div>
        <h1>7D:</h1>
        <h1 className={formatMarketValColor(weekPricePercent)}>{weekPricePercent} </h1>
      </div>
      <div>
        <h1>Currently Holding:</h1>
        <h1>
          {currentPrice * quantity} 
          <span>({quantity}{" "}{coinSymbol})</span>
        </h1>
      </div>
      <div>
        <h1>P/L Since Purchase:</h1>
        <h1 className={formatMarketValColor(currentPrice - purchasePrice)}>{currentPrice - purchasePrice}</h1>
      </div>
      <div className='coin-asset-btn-well'>
        <button onClick={() => setUpdateModalOpen(true)}>Update</button>
        <button onClick={() => removeCoin(id)}>Delete</button>
      </div>

      <Modal
        open={updateModalOpen}
        onClose={() => setUpdateModalOpen(false)}
        aria-labelledby="update-asset-modal-title"
      >
        <div className="modal update-asset-modal">
          <p className='err'>{error}</p>
          <h1>Update {coinSymbol} Quantity:</h1>
          <input
            type="number"
            value={updatedCoinQuantity}
            onChange={(e) => {
              setUpdatedCoinQuantity(e.target.value)
              setError("")
            }}
          />
          <button onClick={() => handleUpdate()}>Update</button>
        {updatedCoinQuantity && 
        <div className='update-modal-change'>
          <h1>Before: {quantity} <img src={coin.image.thumb} alt={coin.name}/></h1> 
          <h1>After: {parseInt(quantity) + parseInt(updatedCoinQuantity)} <img src={coin.image.thumb} alt={coin.name}/></h1>
        </div>}
        </div>
      </Modal>
    </div>
  );
};

export default CoinAsset;
