import { Modal } from '@material-ui/core'
import { useState, useEffect } from 'react';
import useCoinData from '../../hooks/useCoinData'
import PortfolioModalCoin from './PortfolioModalCoin';
import CoinAsset from './CoinAsset'
import {AiFillCloseCircle} from 'react-icons/ai'

import SelectedCoinModalPage from './SelectedCoinModalPage';

const PortfolioDashboard = ({setUserHasPortfolio}) => {

  const [coins, loading] = useCoinData();
  const [open, setOpen] = useState(false);
  const [clearPortfolioConfirm, setClearPortfolioConfirm] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState(null)
  const [portfolioCoins, setPortfolioCoins] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const filterCoinList = () => {
    return coins
      .filter(coin => searchTerm ? coin.id.toLowerCase().includes(searchTerm.toLowerCase()) || coin.symbol.toLowerCase() === searchTerm.toLocaleLowerCase() : true)
      .map((coin, ind) => <PortfolioModalCoin key={ind} coin={coin} selectedCoin={selectedCoin} setSelectedCoin={setSelectedCoin}/>)
  }

  const updateCoin = (id, quantity, purchasePrice) => {
    setPortfolioCoins(prev => prev.length === 0 ? 
      [{id, quantity, purchasePrice}] 
      :
      prev.filter(coin => coin.id === id).length > 0 ?
      prev.map(coin => coin.id === id ? {id, quantity: parseInt(coin.quantity) + parseInt(quantity), purchasePrice} : coin) 
      :
      [...prev, {id, quantity, purchasePrice}]
    )
  }

  const removeCoin = coinId => {
    setPortfolioCoins(prev => prev.filter(coin => coin.id !== coinId))
    if(portfolioCoins.length === 1) {
      setUserHasPortfolio(false)
    }
  }
  
  const clearPortfolio = () => {
    setPortfolioCoins([])
    setClearPortfolioConfirm(false)
    setUserHasPortfolio(false)
  }

  const body = (
    <div className="modal">
      {selectedCoin ?
        < SelectedCoinModalPage 
        selectedCoin={selectedCoin} 
        setSelectedCoin={setSelectedCoin} 
        setOpen={setOpen} 
        updateCoin={updateCoin}
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
          {filterCoinList()}
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
        <p className='clear-portfolio-btn' onClick={() => setClearPortfolioConfirm(true)}>Clear Portfolio</p>

        {portfolioCoins.map((coin, ind) => <CoinAsset key={ind} portfolioCoins={portfolioCoins} coinData={coin} updateCoin={updateCoin} removeCoin={removeCoin}/>)}

      </div>
    </div>

    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="simple-modal-title"
    >
      {body}
    </Modal>

    <Modal
      open={clearPortfolioConfirm}
      onClose={() => setClearPortfolioConfirm(false)}
      aria-labelledby="simple-modal-title"
    >
      <div className='clear-portfolio-modal'>
        <h1>Are you sure?</h1>
        <button onClick={clearPortfolio}>Yes</button>
        <button onClick={() => setClearPortfolioConfirm(false)}>No</button>
      </div>
    </Modal>
  </div>
}

export default PortfolioDashboard;