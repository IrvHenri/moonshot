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

//Get a specific coin and chart data "24h,7day,30day"
router.get("/:id", function (req, res, next) {
  let one = `https://api.coingecko.com/api/v3/coins/${req.params.id}`;
  let two = `https://api.coingecko.com/api/v3/coins/${req.params.id}/market_chart?vs_currency=usd&days=1&interval=hourly`;
  let three = `https://api.coingecko.com/api/v3/coins/${req.params.id}/market_chart?vs_currency=usd&days=7&interval=daily`;
  let four = `https://api.coingecko.com/api/v3/coins/${req.params.id}/market_chart?vs_currency=usd&days=30&interval=daily`;

  const coinData = axios.get(one);
  const dailyChart = axios.get(two);
  const weeklyChart = axios.get(three);
  const monthlyChart = axios.get(four);
  axios
    .all([coinData, dailyChart, weeklyChart, monthlyChart])
    .then(
      axios.spread((...responses) => {
        const responseOne = responses[0].data;
        const responseTwo = responses[1].data;
        const responseThree = responses[2].data;
        const responseFour = responses[3].data;
        res.send({
          coin: responseOne,
          dailyChart: responseTwo,
          weeklyChart: responseThree,
          monthlyChart: responseFour,
        });
      })
    )
    .catch((err) => res.status(400).json({ error: err }));
});

module.exports = router;
