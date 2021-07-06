const SelectedCoinModalPage = ({selectedCoin, setSelectedCoin}) => {
  return <div className='modal-coin-select'>
      <div>
        <h5>SELECTED COIN {`${selectedCoin.id}`}</h5>
        <input type='number' min={1} max={1000} />
      </div>
      <p onClick={() => setSelectedCoin(null)}>Clear Selection</p>
    </div>
}

export default SelectedCoinModalPage