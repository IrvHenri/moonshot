import {filterCoinList} from "../../helpers/portfolioHelpers"
import PortfolioModalCoin from "./PortfolioModalCoin"

const SearchCoinModal = ({loading, coins, searchTerm, setSearchTerm, selectedCoin, setSelectedCoin}) => {
  return <div>
    <h1 className="modal-title" id="simple-modal-title">
      Select Coin
    </h1>
    <form className="modal-form">
      <input
        type="text"
        placeholder="Find a coin"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
    {loading ? null : (
      <div className="modal-coin-list">{
        filterCoinList(coins, searchTerm)      
        .map((coin, ind) => (
        <PortfolioModalCoin
          key={ind}
          coin={coin}
          selectedCoin={selectedCoin}
          setSelectedCoin={setSelectedCoin}
        />
      ))}</div>
    )}
</div>
}

export default SearchCoinModal