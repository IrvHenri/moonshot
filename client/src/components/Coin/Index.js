import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useParams } from "react-router-dom";
import "./CoinDetail.css";
import DetailHeader from "./DetailHeader";
import DetailGraph from "./DetailGraph";
import DetailStatCard from "./DetailStatCard";
import DetailDescription from "./DetailDescription";
import CircularProgress from "@material-ui/core/CircularProgress";
import useCoinData from "../../hooks/useCoinData";
import useSingleCoinData from "../../hooks/useSingleCoinData";
export default function CoinDetail() {
  const { id } = useParams();
  const [coins] = useCoinData();
  const { coin, loading, chartData } = useSingleCoinData(id);
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`coin-detail-page  ${
        theme === "light" ? "coin-detail-light" : null
      }`}
    >
      {loading ? (
        <div className="table-loading">
          <CircularProgress size={100} />
        </div>
      ) : (
        <div className="coin-detail-container">
          <DetailHeader coin={coin} />

          <main className="coin-detail-main">
            <div className="graph-div-detail">
              <DetailGraph coin={coin} chartData={chartData} />
            </div>

            <DetailStatCard coin={coin} chartData={chartData} coins={coins} />
          </main>
          <DetailDescription coin={coin} />
        </div>
      )}
    </div>
  );
}
