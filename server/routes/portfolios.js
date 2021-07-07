var express = require('express');
var router = express.Router();
const User = require('../models/userModel');

/* GET user's info. */
router.get('/', function(req, res) {
  User.findById("60e4bbcfe0f013cb5cf16465")
  .then(user => {
      res.json({user})
  })
  .catch(err => {
      res.status(400).json(`Error ${err}`)
  })
});

router.delete('/', function(req, res) {
  User.findById("60e4bbcfe0f013cb5cf16465")
  .then(user => {
    user.portfolio.coins = []
    user.save()
    .then(res.json("User Portfolio Cleared"))
    .catch(err => res.status(400).json(`Error: ${err}`))
  })
  .catch(err => {
      res.status(400).json(`Error ${err}`)
  })
})

/* Add a single coin to user's portfolio*/
router.post("/:coinId", function(req, res) {
  const {quantity, purchasePrice} = req.body;
  User.findById("60e4bbcfe0f013cb5cf16465")
  .then(user => {
    user.portfolio.coins.push(
      {
        id: req.params.coinId,
        quantity,
        purchasePrice
      }
    )

    user.save()
    .then(() => res.json("Coin Added to portfolio"))
    .catch(err => res.status(400).json(`Error ${err}`))
  })
  .catch(err => res.status(400).json(`Error ${err}`))
})

/* Update a single coin in the user's portfolio */
router.put("/:coinId", function(req, res) {
  const {quantity, purchasePrice} = req.body;
  User.findById("60e4bbcfe0f013cb5cf16465")
  .then(user => {
    user.portfolio.coins.push(
      {
        id: req.params.coinId,
        quantity,
        purchasePrice
      }
    )

    user.save()
    .then(() => res.json("Coin Added to portfolio"))
    .catch(err => res.status(400).json(`Error ${err}`))
  })
  .catch(err => res.status(400).json(`Error ${err}`))
})

/* Remove a single coin from a uswr's portfolio */
router.delete("/:coinId", function(req, res) {
  User.findById("60e4bbcfe0f013cb5cf16465")
  .then(user => {
    user.portfolio.coins = user.portfolio.coins.filter(coin => coin.id !== req.params.coinId)

    user.save()
    .then(() => res.json("Coin removed from portfolio"))
    .catch(err => res.status(400).json(`Error ${err}`))
  })
  .catch(err => res.status(400).json(`Error ${err}`))
})

module.exports = router;