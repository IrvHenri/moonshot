import {useState, useEffect} from 'react'
import { Avatar } from '@material-ui/core'
import axios from 'axios'
const CoinAsset = ({coinData, removeCoin, portfolioCoins}) => {
  const [coin, setCoin] = useState({})
  const [loading, setLoading] = useState(true)
  const {id, quantity, purchasePrice} = coinData
  useEffect(() => {
    axios.get(`http://localhost:3001/api/coins/${id}`).then((result) => {
      const { coin } = result.data;
      setCoin(coin);
      setLoading(false);
    });
  }, [portfolioCoins]);


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
      <button>Update</button>
      <button onClick={() => removeCoin(id)}>Delete</button>
    </div>
  </div>
}

export default CoinAsset