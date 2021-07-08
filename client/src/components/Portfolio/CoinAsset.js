import {useState, useEffect} from 'react'
import { Modal, Avatar } from '@material-ui/core'
import axios from 'axios'
const CoinAsset = ({coinData, updateCoin, removeCoin, portfolioCoins, setUpdatedCoinState}) => {
  const [coin, setCoin] = useState({})
  const [loading, setLoading] = useState(true)
  const [updateModalOpen, setUpdateModalOpen] = useState(false)
  const [updatedCoinQuantity, setUpdatedCoinQuantity] = useState(1)
  const {id, quantity, purchasePrice} = coinData

  useEffect(() => {
    axios.get(`http://localhost:3001/api/coins/${id}`).then((result) => {
      const { coin, dailyChart, weeklyChart, monthlyChart } = result.data;
      setCoin(coin);
      setLoading(false);
      setUpdatedCoinState(prev => [...prev, {coin, dailyChart, weeklyChart, monthlyChart}])
    });
  }, [id, portfolioCoins]);

  const handleUpdate = () => {
    updateCoin(id, updatedCoinQuantity, coin.market_data.current_price.usd )
    setUpdateModalOpen(false)
  }

  return loading ? 
  <div>Loading</div> : 
  <div className='coin-asset-row'> 
    <div>
      <Avatar alt={`${coin.id} logo`} src={coin.image.thumb} />
      <h1 className='coin-asset-row-name'>{coin.id}</h1>
    </div>
    <div>
      <h1>Price:</h1>
      <h1>{coin.market_data.current_price.usd}</h1>
    </div>
    <div>
      <h1>7D:</h1>
      <h1>{coin.market_data.price_change_percentage_7d} </h1>
    </div>
    <div>
      <h1>Currently Holding:</h1>
      <h1>{coin.market_data.current_price.usd * quantity} ({quantity} {coin.symbol})</h1>
    </div>
    <div>
      <h1>P/L Since Purchase:</h1>
      <h1>{purchasePrice} | {coin.market_data.current_price.usd}</h1>
      <h1>{purchasePrice - coin.market_data.current_price.usd}</h1>
    </div>
    <div>
      <button onClick={() => setUpdateModalOpen(true)}>Update</button>
      <button onClick={() => removeCoin(id)}>Delete</button>
    </div>
    <Modal
      open={updateModalOpen}
      onClose={() => setUpdateModalOpen(false)}
      aria-labelledby="update-asset-modal-title"
    >
      <div className='update-asset-modal'>
        <input type="number" value={updatedCoinQuantity} onChange={e => setUpdatedCoinQuantity(e.target.value)}/>
        <button onClick={() => handleUpdate()}>Update</button>
      </div>
    </Modal>
  </div>
}

export default CoinAsset