import React from "react";
import { useParams } from "react-router-dom";
import "./CoinDetail.css";
import DetailHeader from "./DetailHeader";
import DetailGraph from "./DetailGraph";
import DetailStatCard from "./DetailStatCard";
import DetailDescription from "./DetailDescription";
import CircularProgress from "@material-ui/core/CircularProgress";
import useSingleCoinData from "../../hooks/useSingleCoinData";

export default function CoinDetail() {
  const { id } = useParams();
  const [coin, loading, chartData] = useSingleCoinData(id);
  return (
    <div className="coin-detail-page">
      {loading ? (
        <div className="table-loading">
          <CircularProgress size={100} />
        </div>
      ) : (
        <>
          <DetailHeader coin={coin} />
          <main className="coin-detail-main">
            <DetailGraph coin={coin} chartData={chartData} />
            <DetailStatCard coin={coin} />
          </main>
          <DetailDescription coin={coin} />
        </>
      )}
    </div>
  );
}
