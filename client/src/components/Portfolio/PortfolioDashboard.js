import { Modal } from '@material-ui/core'
import { useState } from 'react';
import useCoinData from '../../hooks/useCoinData'
import PortfolioModalCoin from './PortfolioModalCoin';
import {AiFillCloseCircle} from 'react-icons/ai'
const PortfolioDashboard = () => {
  const [coins, loading] = useCoinData();
  const [open, setOpen] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const body = (
    <div className="modal">
      <h1 className="modal-title" id="simple-modal-title">Select Coin</h1>
      {selectedCoin && 
        <div className='modal-coin-select'>
          <div>
            <h5>SELECTED COIN {`${selectedCoin.id}`}</h5>
            <input type='number' min={1} max={1000} />
          </div>
          <AiFillCloseCircle onClick={() => setSelectedCoin("")}/>
        </div>
      }
      <form className='modal-form'>
      <input 
        type='text'
        placeholder="Find a coin"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button>Search</button>
      </form>
      {loading ? null : 
      <div className="modal-coin-list">
        {coins.filter(coin => searchTerm ? coin.id.includes(searchTerm) : true).map(coin => <PortfolioModalCoin coin={coin} selectedCoin={selectedCoin} setSelectedCoin={setSelectedCoin}/>)}
      </div>}
      <AiFillCloseCircle className='modal-close' onClick={() => setOpen(false)} />
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