var express = require("express");
var router = express.Router();
const axios = require("axios");

//Get All Coins
router.get("/", function (req, res, next) {
  axios
    .get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
    .then((response) => res.send(response.data))
    .catch((err) => res.status(400).json({ error: err }));
});

//Get a specific coin and chart data "Up to 30 days of prices, market-caps and total volume"
router.get("/:id", function (req, res, next) {
  let one = `https://api.coingecko.com/api/v3/coins/${req.params.id}`;
  let two = `https://api.coingecko.com/api/v3/coins/${req.params.id}/market_chart?vs_currency=usd&days=30&interval=daily`;
  const requestOne = axios.get(one);
  const requestTwo = axios.get(two);
  axios
    .all([requestOne, requestTwo])
    .then(
      axios.spread((...responses) => {
        const responseOne = responses[0].data;
        const responseTwo = responses[1].data;
        res.send({ coin: responseOne, chartData: responseTwo });
      })
    )
    .catch((err) => res.status(400).json({ error: err }));
});

module.exports = router;
