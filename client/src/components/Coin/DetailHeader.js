import "./CoinDetail.css";
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import currencyFormatterHelpers from "../../helpers/currencyFormatterHelpers";
import { Link } from "react-router-dom";
import Button from "../Button";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
const { currencyFormatter } = currencyFormatterHelpers();
export default function DetailHeader({ coin }) {
  const {
    name,
    image: { thumb },
    symbol,
    market_cap_rank,
    market_data: {
      current_price,
      low_24h,
      high_24h,
      price_change_percentage_24h,
    },
  } = coin;
  return (
    <div>
      <Link to="/currencies">
        <Button text="back" />
      </Link>

      <header className="coin-detail-header">
        <div className="header-left">
          <div>
            <Avatar alt="coin logo" src={thumb} />
            <h1>{name}</h1> <small>{symbol.toUpperCase()}</small>
          </div>

          <p>Rank #{market_cap_rank}</p>
        </div>
        <div className="header-right">
          <p>
            {name} Price ({symbol.toUpperCase()})
          </p>
          <div>
            {" "}
            <h1>{currencyFormatter.format(current_price.usd)}</h1>{" "}
            <small>
              {price_change_percentage_24h > 0 ? (
                <TiArrowSortedUp color="16C784" />
              ) : (
                <TiArrowSortedDown color="EA3A43" />
              )}
              {price_change_percentage_24h.toFixed(2)}%
            </small>
          </div>
          <div className="high-low-price">
            <p>
              Low (24h): <small>{currencyFormatter.format(low_24h.usd)}</small>
            </p>
            <p>
              High (24h):{" "}
              <small>{currencyFormatter.format(high_24h.usd)}</small>
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}
