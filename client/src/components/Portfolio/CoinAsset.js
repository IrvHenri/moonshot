import { useState } from "react";
import { Modal, Avatar } from "@material-ui/core";
const CoinAsset = ({
  coin,
  updateCoin,
  removeCoin,
  onClick,
  userCoinData
}) => {
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [updatedCoinQuantity, setUpdatedCoinQuantity] = useState(1);

  const currentPrice = coin.market_data.current_price.usd
  
  const handleUpdate = () => {
    updateCoin(id, updatedCoinQuantity, currentPrice);
    setUpdateModalOpen(false);
  };


  if(!userCoinData) return null
  const { id, quantity, purchasePrice} = userCoinData
  return (
    <div className="coin-asset-row">
      <div>
        <Avatar alt={`${coin.id} logo`} src={coin.image.thumb} />
        <h1 className="coin-asset-row-name">{coin.symbol.toUpperCase()}</h1>
      </div>
      <div>
        <h1>Price:</h1>
        <h1>{currentPrice}</h1>
      </div>
      <div>
        <h1>7D:</h1>
        <h1>{coin.market_data.price_change_percentage_7d} </h1>
      </div>
      <div>
        <h1>Currently Holding:</h1>
        <h1>
          {currentPrice * quantity} 
          ({quantity}{" "}{coin.symbol})
        </h1>
      </div>
      <div>
        <h1>P/L Since Purchase:</h1>
        <h1>
          {purchasePrice} | {currentPrice}
        </h1>
        <h1>{currentPrice - purchasePrice }</h1>
      </div>
      <div className='coin-asset-btn-well'>
        <button onClick={onClick}>View Chart</button>
        <button onClick={() => setUpdateModalOpen(true)}>Update</button>
        <button onClick={() => removeCoin(id)}>Delete</button>
      </div>

      <Modal
        open={updateModalOpen}
        onClose={() => setUpdateModalOpen(false)}
        aria-labelledby="update-asset-modal-title"
      >
        <div className="modal update-asset-modal">
          <input
            type="number"
            value={updatedCoinQuantity}
            onChange={(e) => setUpdatedCoinQuantity(e.target.value)}
          />
          <button onClick={() => handleUpdate()}>Update</button>
        </div>
      </Modal>
    </div>
  );
};

export default CoinAsset;
