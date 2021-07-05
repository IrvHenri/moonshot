import React from "react";
import currencyFormatterHelpers from "../../helpers/currencyFormatterHelpers";
const { formatMoneyShort } = currencyFormatterHelpers();
export default function TableTitle(props) {
  const { data } = props;

  const totalMarketCap = data.reduce((acc, val) => acc + val.market_cap, 0);
  const totalVolumeTwentyFour = data.reduce(
    (acc, val) => acc + val.market_cap_change_24h,
    0
  );
  const topCoin = data.reduce((acc, c) =>
    acc.market_cap > c.market_cap ? acc : c
  );
  let dominance = (topCoin.market_cap / totalMarketCap) * 100;

  return (
    <div className="currencies-page-header">
      <h1>Todays Top 100 Cryptocurrency Prices </h1>
      <div>
        <p>
          ${formatMoneyShort(totalMarketCap)} <small>market cap</small>
        </p>
        <p>${formatMoneyShort(totalVolumeTwentyFour)} 24h volume</p>
        <p>
          {Math.floor(dominance)}%<small>{topCoin.symbol}</small>
        </p>
      </div>
    </div>
  );
}
