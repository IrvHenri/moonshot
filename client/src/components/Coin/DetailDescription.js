import "./CoinDetail.css";
import React from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function DetailDescription({ coin }) {
  const description = coin.description.en;
  function createMarkup(paragraph) {
    return { __html: paragraph };
  }

  let paragraphs = description
    .split(/(?:\r\n){2,}/)
    .map((paragraph, i) => (
      <p key={i} dangerouslySetInnerHTML={createMarkup(paragraph)} />
    ));
  return (
    <div className="coin-description-container">
      {description && <FaAngleDoubleDown />}
      <div className="coin-description">
        {description && <h1>What is {coin.name}?</h1>}
        {description && paragraphs}
      </div>
    </div>
  );
}
