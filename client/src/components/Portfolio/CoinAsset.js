import {useState, useEffect} from 'react'
import { Avatar } from '@material-ui/core'
import axios from 'axios'
const CoinAsset = ({coinData}) => {
  const [coin, setCoin] = useState({})
  const [loading, setLoading] = useState(true)
  const {id, quantity} = coinData
  useEffect(() => {
    axios.get(`http://localhost:3001/api/coins/${id}`).then((result) => {
      const { coin } = result.data;
      setCoin(coin);
      setLoading(false);
    });
  }, []);

  return loading ? 
  <div>Loading</div> : 
  <div className='coin-asset'> 
    {console.log(coin)}
    <Avatar alt={`${coin.id} logo`} src={coin.image.thumb} />
    <h1>{coin.id}</h1>
    <h1>Price: {coin.market_data.current_price.usd}</h1>
    <h1>7D: {coin.market_data.price_change_percentage_7d} </h1>
    <h1>Currently Holding: {coin.market_data.current_price.usd * quantity} {quantity} {coin.symbol}</h1>
  </div>
}

export default CoinAsset