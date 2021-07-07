import "./CoinDetail.css";
import React from "react";

export default function DetailDescription({ coin }) {
  const description = coin.description.en;
  function createMarkup() {
    return { __html: description };
  }
  return (
    <div className="coin-description">
      {description && <p dangerouslySetInnerHTML={createMarkup()} />}
    </div>
  );
}
