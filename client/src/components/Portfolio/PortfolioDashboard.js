import { Modal } from "@material-ui/core";
import { useEffect, useState } from "react";
import useCoinData from "../../hooks/useCoinData";
import PortfolioModalCoin from "./PortfolioModalCoin";
import DetailGraph from "../Coin/DetailGraph";
import CoinAsset from "./CoinAsset";
import { AiFillCloseCircle } from "react-icons/ai";
import SelectedCoinModalPage from "./SelectedCoinModalPage";
import axios from "axios";

import { useAuth } from "../../context/AuthContext";
import {addOneCoin, updateOneCoin, deleteOneCoin, getPortfolioBalance, deleteAllCoins, filterCoinList} from '../../helpers/portfolioHelpers'

const PortfolioDashboard = ({ theme }) => {
  const { user, setUser } = useAuth();
  const [coins, loading] = useCoinData();
  const [open, setOpen] = useState(false);
  const [clearPortfolioModalConfirm, setClearPortfolioModalConfirm] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loadingCoins, setLoadingCoins] = useState(false)

  //Chart View State
  const [updatedCoinState, setUpdatedCoinState] = useState([]);
  const [chartIndex, setChartIndex] = useState(0);
  const [chartViewData, setChartViewData] = useState(null)

  useEffect(() => {
    setLoadingCoins(true)
    if (user.portfolio.coins.length === 0) {
      setUpdatedCoinState([])
      setChartIndex(null)
      setLoadingCoins(false)
    }
    else {
      user.portfolio.coins.map(coin => {
        axios.get(`http://localhost:3001/api/coins/${coin.id}`)
        .then(res => {
          const { coin, dailyChart, weeklyChart, monthlyChart } = res.data;
          setUpdatedCoinState((prev) => {
            if (prev.length === 0) {
              return [
                ...prev,
                { coin, chartData: { dailyChart, weeklyChart, monthlyChart } },
              ];
            }
            if (prev.some((val) => val.coin.id === coin.id)) {
              return [...prev];
            }
            return [
              ...prev,
              { coin, chartData: { dailyChart, weeklyChart, monthlyChart } },
            ];
          });
        })
        .then(() => setChartIndex(0))
        .then(() => setLoadingCoins(false))
      })
    }
  },[user])

  useEffect(() => {
    setChartViewData(updatedCoinState.length > 0 ? updatedCoinState[chartIndex] : null)
  },[chartIndex])

  const updateCoin = (id, quantity, purchasePrice) => {
    if (user.portfolio.coins.length && user.portfolio.coins.filter(coin => coin.id === id).length > 0) {
      updateOneCoin(id, quantity, purchasePrice)
        .then(res => setUser(res.data.user))
        .catch(err => console.log(err));
    } else {
      addOneCoin(id, quantity, purchasePrice)
        .then(res => setUser(res.data.user))
        .catch(err => console.log(err));
    }
  };

  const removeCoin = (coinId) => {
    deleteOneCoin(coinId)
      .then(res => setUser(res.data.user))
      .then(() => setChartIndex(null))
      .catch(err => console.log(err));
  };

  const clearPortfolio = () => {
    deleteAllCoins()
    .then(res => setUser(res.data.user))
    .then(() => setClearPortfolioModalConfirm(false))
    .catch((err) => console.log(err));
  };

  const setChartView = (i) => {
    setChartIndex(i);
  };

  const body = (
    <div className="modal">
      {selectedCoin ? (
        <SelectedCoinModalPage
          selectedCoin={selectedCoin}
          setSelectedCoin={setSelectedCoin}
          setOpen={setOpen}
          updateCoin={updateCoin}
        />
      ) : ( 
        <div>
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
          <AiFillCloseCircle
            className="modal-close"
            onClick={() => setOpen(false)}
          />
        </div>
      )}
    </div>
  );

  return (
    <div
      className={`portfolio-dashboard ${
        theme === "light" ? "light-dashboard" : null
      }`}
    >
      <div
        className={`portfolio-banner ${
          theme === "light" ? "light-dashboard light-box" : null
        }`}
      >
        <div className="portfolio-banner-left">
          <div>
            <h1>Welcome Back {user.name}</h1>
            <h2>{user.portfolio.name}</h2>
          </div>
          <div>
            <h2>Balance: {getPortfolioBalance(user.portfolio.coins)}</h2>
          </div>
        </div>
        <div className="portfolio-banner-right">
          <button onClick={() => setOpen(true)}>Add Coin:</button>
        </div>
      </div>
      <div className="portfolio-info-container">
        <div
          className={`portfolio-graph ${
            theme === "light" ? "light-dashboard" : null
          }`}
        >
          <h1>Graph:</h1>

          {chartViewData ? (
            <DetailGraph coin={chartViewData.coin} chartData={chartViewData.chartData} />
          ) : null}
        </div>

        <div
          className={`portfolio-coin-data ${
            theme === "light" ? "light-dashboard light-box" : null
          }`}
        >
          <h1>Your Assets:</h1>
          <p
            className="clear-portfolio-btn"
            onClick={() => setClearPortfolioModalConfirm(true)}
          >
            Clear Portfolio
          </p>

          {!loadingCoins && updatedCoinState.map((coinData, ind) => (
            <CoinAsset
              key={ind}
              userCoinData={user.portfolio.coins.find(coin => coin.id === coinData.coin.id)}
              coin={coinData.coin}
              updateCoin={updateCoin}
              removeCoin={removeCoin}
              onClick={() => setChartView(ind)}
            />
          ))}
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
        open={clearPortfolioModalConfirm}
        onClose={() => setClearPortfolioModalConfirm(false)}
        aria-labelledby="simple-modal-title"
      >
        <div className="clear-portfolio-modal">
          <h1>Are you sure?</h1>
          <button onClick={clearPortfolio}>Yes</button>
          <button onClick={() => setClearPortfolioModalConfirm(false)}>No</button>
        </div>
      </Modal>
    </div>
  );
};

export default PortfolioDashboard;
