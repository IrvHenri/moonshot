import "./CoinDetail.css";
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import currencyFormatterHelpers from "../../helpers/currencyFormatterHelpers";
import ProgressBar from "../Currencies/Progressbar";
const { currencyFormatter } = currencyFormatterHelpers();
export default function DetailHeader({ coin }) {
  const {
    price,
    name,
    image: { thumb },
    symbol,
    market_cap_rank,
    market_data: {
      current_price,
      low_24h,
      high_24h,
      price_change_percentage_24h,
      market_cap: { usd },
      circulating_supply,
      max_supply,
    },
  } = coin;

  return (
    <header className=" coin-detail-header">
      <div className="header-left">
        <Avatar alt="coin logo" src={thumb} />
        <h1>{name}</h1> <small>{symbol}</small>
        <p>Rank #{market_cap_rank}</p>
      </div>
      <div className="header-right">
        <p>
          {name} Price ({symbol})
        </p>
        <p>{price}</p> <small>{price_change_percentage_24h}%</small>
        <p>Low (24h): {currencyFormatter.format(low_24h.usd)}</p>
        <p>High (24h): {currencyFormatter.format(high_24h.usd)}</p>
      </div>
    </header>
  );
}
