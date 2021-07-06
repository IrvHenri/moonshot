import { Avatar } from '@material-ui/core'
import {BiRightArrow} from "react-icons/bi"
const PortfolioModalCoin = ({coin, selectedCoin, setSelectedCoin}) => {
  return <div 
    className='coin' 
    onClick={() => {setSelectedCoin(coin)}}> 
    <Avatar alt="coin logo" src={coin.image} />
    {coin.id}
    <BiRightArrow />
  </div>
}

export default PortfolioModalCoin;