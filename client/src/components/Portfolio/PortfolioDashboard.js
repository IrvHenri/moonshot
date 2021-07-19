import { Modal } from "@material-ui/core";
import { useEffect, useState } from "react";
import useCoinData from "../../hooks/useCoinData";
import DetailGraph from "../Coin/DetailGraph";
import CoinAsset from "./CoinAsset";
import CircularProgress from "@material-ui/core/CircularProgress";

//Modals
import SearchCoinModal from "./SearchCoinModal";
import SelectedCoinModalPage from "./SelectedCoinModalPage";

import { AiFillCloseCircle } from "react-icons/ai";

import { useAuth } from "../../context/AuthContext";
import {
  getOneCoin,
  addOneCoin,
  updateOneCoin,
  deleteOneCoin,
  getPortfolioBalance,
  deleteAllCoins,
  formatPortfolioCurrency,
} from "../../helpers/portfolioHelpers";

const PortfolioDashboard = ({ theme }) => {
  const { user, setUser } = useAuth();
  const [open, setOpen] = useState(false);
  const [clearPortfolioModalConfirm, setClearPortfolioModalConfirm] =
    useState(false);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loadingCoins, setLoadingCoins] = useState(false);
  const [coins, loading] = useCoinData();
  //Chart View State
  const [updatedCoinState, setUpdatedCoinState] = useState([]);
  const [chartIndex, setChartIndex] = useState(0);
  const [chartViewData, setChartViewData] = useState(null);

  useEffect(() => {
    setLoadingCoins(true);
    if (user.portfolio.coins.length === 0) {
      setUpdatedCoinState([]);
      setChartIndex(null);
      setLoadingCoins(false);
    } else {
      user.portfolio.coins.map((coin) => {
        getOneCoin(coin.id)
          .then((res) => {
            const { coin, dailyChart, weeklyChart, monthlyChart } = res.data;
            setUpdatedCoinState((prev) => {
              if (prev.length === 0) {
                return [
                  {
                    coin,
                    chartData: { dailyChart, weeklyChart, monthlyChart },
                  },
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
          .then(() => setLoadingCoins(false));
      });
    }
  }, [user]);

  useEffect(() => {
    setChartViewData(
      updatedCoinState.length > 0 ? updatedCoinState[chartIndex] : null
    );
  }, [chartIndex, updatedCoinState]);

  const updateCoin = (id, quantity, purchasePrice) => {
    if (
      user.portfolio.coins.length &&
      user.portfolio.coins.filter((coin) => coin.id === id).length > 0
    ) {
      updateOneCoin(id, quantity, purchasePrice)
        .then((res) => setUser(res.data.user))
        .catch((err) => console.log(err));
    } else {
      addOneCoin(id, quantity, purchasePrice)
        .then((res) => setUser(res.data.user))
        .catch((err) => console.log(err));
    }
  };

  const removeCoin = (coinId) => {
    deleteOneCoin(coinId)
      .then((res) => setUser(res.data.user))
      .then(() => setChartIndex(null))
      .catch((err) => console.log(err));
  };

  const clearPortfolio = () => {
    deleteAllCoins()
      .then((res) => setUser(res.data.user))
      .then(() => setClearPortfolioModalConfirm(false))
      .catch((err) => console.log(err));
  };

  const searchModalContent = (
    <div className="modal">
      {selectedCoin ? (
        <SelectedCoinModalPage
          selectedCoin={selectedCoin}
          setSelectedCoin={setSelectedCoin}
          setOpen={setOpen}
          updateCoin={updateCoin}
        />
      ) : (
        <SearchCoinModal
          selectedCoin={selectedCoin}
          setSelectedCoin={setSelectedCoin}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          coins={coins}
          loading={loading}
        />
      )}
      <AiFillCloseCircle
        className="modal-close"
        onClick={() => setOpen(false)}
      />
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
            <h2>Welcome Back {user.name}</h2>
            <h2>{user.portfolio.name}</h2>
          </div>
          <div>
            <h2>
              Current Balance:
              <span>
                {formatPortfolioCurrency(
                  getPortfolioBalance(user.portfolio.coins)
                )}
              </span>
            </h2>
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
            <DetailGraph
              coin={chartViewData.coin}
              chartData={chartViewData.chartData}
            />
          ) : null}
        </div>

        <div
          className={`portfolio-coin-data ${
            theme === "light" ? "light-dashboard light-box" : null
          }`}
        >
          <div className="portfolio-coin-data-header">
            <h1>Your Assets:</h1>
            <p onClick={() => setClearPortfolioModalConfirm(true)}>
              Clear Portfolio
            </p>
          </div>

          {loadingCoins ? (
            <div className="circular-progress">
              <CircularProgress size={100} />
            </div>
          ) : (
            updatedCoinState.map((coinData, ind) => (
              <CoinAsset
                key={ind}
                userCoinData={user.portfolio.coins.find(
                  (coin) => coin.id === coinData.coin.id
                )}
                coin={coinData.coin}
                updateCoin={updateCoin}
                removeCoin={removeCoin}
                onClick={() => setChartIndex(ind)}
              />
            ))
          )}
        </div>
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="select-coin-modal-title"
      >
        {searchModalContent}
      </Modal>

      <Modal
        open={clearPortfolioModalConfirm}
        onClose={() => setClearPortfolioModalConfirm(false)}
        aria-labelledby="clear-modal-title"
      >
        <div className="modal clear-portfolio-modal">
          <h1>Clear Your Portfolio</h1>
          <h2>Are you sure? This cannot be undone</h2>
          <button onClick={clearPortfolio}>Yes</button>
          <button onClick={() => setClearPortfolioModalConfirm(false)}>
            No
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default PortfolioDashboard;
