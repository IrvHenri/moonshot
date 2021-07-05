const PortfolioDashboard = () => {
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
        <button>
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
  </div>
}

export default PortfolioDashboard;