import React from "react";
import currencyFormatterHelpers from "../../helpers/currencyFormatterHelpers";
const { currencyFormatter } = currencyFormatterHelpers();

export default function DetailStatCard({ coin, chartData, coins }) {
  const totalMarketCap = coins.reduce((acc, c) => acc + c.market_cap, 0);
  const {
    dailyChart: { total_volumes },
  } = chartData;

  const {
    name,
    market_cap_rank,
    market_data: {
      current_price,
      low_24h,
      high_24h,
      price_change_24h_in_currency,
      price_change_percentage_24h,
      market_cap: { usd },
    },
  } = coin;

  const tradingVolume = total_volumes && total_volumes[15][1];

  return (
    <article className="stats-card">
      <h3>{name} Market Statistics</h3>
      <div className="coin-stat-container">
        <div className="coin-stat">
          <p>{name} Price</p>{" "}
          <small>{currencyFormatter.format(current_price.usd)}</small>
        </div>
        <div className="coin-stat">
          <p>Price Change 24h</p>{" "}
          <small className="stat-stack">
            <p>{currencyFormatter.format(price_change_24h_in_currency.usd)}</p>
            <p>({price_change_percentage_24h.toFixed(2)}%)</p>
          </small>
        </div>
        <div className="coin-stat">
          <p>24h Low / 24h High</p>{" "}
          <small className="stat-stack">
            <p>{currencyFormatter.format(low_24h.usd) + "/"}</p>
            <p>{currencyFormatter.format(high_24h.usd)}</p>
          </small>
        </div>
        <div className="coin-stat">
          <p>Trading Volume 24h</p>{" "}
          <small>
            {tradingVolume && currencyFormatter.format(tradingVolume)}
          </small>
        </div>
        <div className="coin-stat">
          <p>Volume / Market Cap</p>{" "}
          <small>{tradingVolume && (tradingVolume / usd).toFixed(2)}</small>
        </div>
        <div className="coin-stat">
          <p>Market Dominance</p>{" "}
          <small>{(usd / totalMarketCap).toFixed(2) * 100}%</small>
        </div>
        <div className="coin-stat">
          <p>Market Rank</p> <small>#{market_cap_rank}</small>
        </div>
      </div>
    </article>
  );
}
