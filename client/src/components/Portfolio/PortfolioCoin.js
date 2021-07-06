import { Avatar } from '@material-ui/core'
const PortfolioCoin = ({coin, setSelectedCoin}) => {
  return <div 
    className='coin' 
    onClick={() => {setSelectedCoin(coin)}}> 
    <Avatar alt="coin logo" src={coin.image} />
    {coin.id}
  </div>
}

export default PortfolioCoin;