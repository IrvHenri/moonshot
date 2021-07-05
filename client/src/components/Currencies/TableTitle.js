import React from "react";
import currencyFormatterHelpers from "../../helpers/currencyFormatterHelpers";
const { formatMoneyShort } = currencyFormatterHelpers();
export default function TableTitle(props) {
  const { data } = props;

  const totalMarketCap = data.reduce((acc, c) => acc + c.market_cap, 0);
  const totalVolumeTwentyFour = data.reduce(
    (acc, c) => acc + c.market_cap_change_24h,
    0
  );
  const topCoin = data.reduce((acc, c) =>
    acc.market_cap > c.market_cap ? acc : c
  );
  let dominance = (topCoin.market_cap / totalMarketCap) * 100;

  return (
    <div className="currencies-page-header">
      <h1>Today's Top 100 Cryptocurrency Prices </h1>
      <div>
        <p>
          ${formatMoneyShort(totalMarketCap)} <small>market cap</small>
        </p>
        <p>
          ${formatMoneyShort(totalVolumeTwentyFour)} <small>24h volume</small>
        </p>
        <p>
          {Math.floor(dominance)}%<small>{topCoin.symbol}</small>
        </p>
      </div>
    </div>
  );
}
