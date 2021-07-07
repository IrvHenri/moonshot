import { Modal } from '@material-ui/core'
import { useState, useEffect } from 'react';
import axios from 'axios';
import useCoinData from '../../hooks/useCoinData'
import PortfolioModalCoin from './PortfolioModalCoin';
import CoinAsset from './CoinAsset'
import {AiFillCloseCircle} from 'react-icons/ai'

import SelectedCoinModalPage from './SelectedCoinModalPage';
const PortfolioDashboard = () => {
  const [coins, loading] = useCoinData();
  const [open, setOpen] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState(null)
  const [portfolioCoins, setPortfolioCoins] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  //Probably gonna need a useEffect to re-call API when a coin is added/removed/updated
  // useEffect(() => {
  //   if (portfolioCoins.length > 0) {
  //     axios.get("http://localhost:3001/api/coins/")
  //     .then(res => {
  //       console.log(portfolioCoins, "before")
  //       setPortfolioCoins(prev => {
  //         prev
  //         .map(asset => asset.coin = res.data.filter(coin => asset.coin.name === coin.name)[0])
  //       })
  //       console.log(portfolioCoins, "after")
  //     })
  //   }
  // },[selectedCoin])
  
  const body = (
    <div className="modal">
      {selectedCoin ?
        < SelectedCoinModalPage 
        selectedCoin={selectedCoin} 
        setSelectedCoin={setSelectedCoin} 
        setOpen={setOpen} 
        setPortfolioCoins={setPortfolioCoins}
        />
      :
      <>
      <h1 className="modal-title" id="simple-modal-title">Select Coin</h1>
      <form className='modal-form'>
      <input 
        type='text'
        placeholder="Find a coin"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </form>
      {loading ? null : 
        <div className="modal-coin-list">
        {coins
        .filter(coin => searchTerm ? coin.id.includes(searchTerm) : true)
        .map((coin, ind) => <PortfolioModalCoin key={ind} coin={coin} selectedCoin={selectedCoin} setSelectedCoin={setSelectedCoin}/>)}
      </div>}
      <AiFillCloseCircle className='modal-close' onClick={() => setOpen(false)} />
    </>
    }
    </div>
      
  );
  return <div className='portfolio-dashboard'>
    <div className='portfolio-banner'>
      <div className='portfolio-banner-left'>
      <div>
      <h1>Welcome Back User!</h1>
      <h2>My Portfolio</h2>
      </div>
      <div>
        <h2>Balance: $34,000.00</h2>
        <p>+3.00%</p>
      </div>
      </div>
      <div className='portfolio-banner-right'>
        <button onClick={() => setOpen(true)}>
          Add Coin:
        </button>
      </div>
    </div>
    <div className='portfolio-info-container'>
      <div className='portfolio-graph'>
        <h1>Graph:</h1>
      </div>
      <div className='portfolio-coin-data'>
        <h1>Your Assets:</h1>
        {portfolioCoins.map((coin, ind) => <CoinAsset key={ind} coinData={coin} />)}
      </div>
    </div>
    <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
      >
        {body}
      </Modal>
  </div>
}

export default PortfolioDashboard;