const SelectedCoinModalPage = ({selectedCoin, setSelectedCoin}) => {
      return <div>
      <div className="selected-header">
        <img alt={`${selectedCoin.id} logo`} src={selectedCoin.image} />
        <h1 className="modal-title">{`${selectedCoin.id.toUpperCase()}`}</h1>
      </div>
      <div className='modal-coin-select'>
        <input type='number' min={1} max={1000} />
      </div>
      <p onClick={() => setSelectedCoin(null)}>Clear Selection</p>
    </div>
}

export default SelectedCoinModalPage