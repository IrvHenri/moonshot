var express = require('express');
var router = express.Router();
const axios = require('axios')

//Get All Coins
router.get('/', function(req, res, next) {
  axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
  .then(response => res.send(response.data))
  .catch(err => res.status(400).json({error: err}))
});

//Get a specific coin
router.get('/:id', function(req, res, next) {
  axios.get(`https://api.coingecko.com/api/v3/coins/${req.params.id}`)
  .then(response => res.send(response.data))
  .catch(err => res.status(400).json({error: err}))
});

module.exports = router;
