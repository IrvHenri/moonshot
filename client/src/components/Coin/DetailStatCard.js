import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import currencyFormatterHelpers from "../../helpers/currencyFormatterHelpers";
const { currencyFormatter } = currencyFormatterHelpers();
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    background: "#132455",
  },
  title: {
    fontSize: 21,
    color: "#f3f3f3",
    marginBottom: "1.5em",
  },
  listItem: { display: "flex" },
  pos: {
    marginBottom: 12,
  },
});
export default function DetailStatCard({ coin }) {
  const {
    name,
    image: { thumb },
    symbol,
    market_cap_rank,
    market_data: {
      current_price,
      low_24h,
      high_24h,
      price_change_24h_in_currency,
      price_change_percentage_24h,
      market_cap: { usd },
      circulating_supply,
      max_supply,
    },
  } = coin;
  console.log(coin);
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {name} Market Statistics
        </Typography>
        <div className="coin-stat">
          <p>{name} Price</p>{" "}
          <small>{currencyFormatter.format(current_price.usd)}</small>
        </div>
        <div className="coin-stat">
          <p>Price Change 24h</p>{" "}
          <small className="stat-stack">
            <p>{currencyFormatter.format(price_change_24h_in_currency.usd)}</p>
            <p>{price_change_percentage_24h.toFixed(2)}%</p>
          </small>
        </div>
        <div className="coin-stat">
          <p>24h Low / 24h High</p>{" "}
          <small className="stat-stack">
            <p>{currencyFormatter.format(low_24h.usd) + " /"}</p>
            <p>{currencyFormatter.format(high_24h.usd)}</p>
          </small>
        </div>
        <div className="coin-stat">
          <p>Trading Volume 24h</p> <small></small>
        </div>
        <div className="coin-stat">
          <p>Volume / Market Cap</p> <small></small>
        </div>
        <div className="coin-stat">
          <p>Market Dominance</p> <small></small>
        </div>
        <div className="coin-stat">
          <p>Market Rank</p> <small>#{market_cap_rank}</small>
        </div>
      </CardContent>
    </Card>
  );
}
