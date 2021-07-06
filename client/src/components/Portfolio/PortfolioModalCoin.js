import { Avatar } from '@material-ui/core'
import {BiRightArrow} from "react-icons/bi"

const PortfolioModalCoin = ({coin, setSelectedCoin}) => {
  return <div 
    className='coin' 
    onClick={() => {setSelectedCoin(coin)}}> 
    <Avatar alt="coin logo" src={coin.image} />
    <h1>{coin.id}</h1>
    <BiRightArrow />
  </div>
}

export default PortfolioModalCoin;