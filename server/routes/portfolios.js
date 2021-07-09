const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const validateToken = require("../routes/validateToken");

/* GET user's info. */
router.get("/", validateToken, function (req, res) {
  User.findById(req.userId)
    .then((user) => {
      res.json({ user });
    })
    .catch((err) => {
      res.status(400).json(`Error ${err}`);
    });
});

router.delete("/", validateToken, function (req, res) {
  User.findById(req.userId)
    .then((user) => {
      user.portfolio.coins = [];
      user
        .save()
        .then(res.json({ user }))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => {
      res.status(400).json(`Error ${err}`);
    });
});

/* Add a single coin to user's portfolio*/
router.post("/:coinId", validateToken, function (req, res) {
  const { quantity, purchasePrice } = req.body;
  User.findById(req.userId)
    .then((user) => {
      user.portfolio.coins.push({
        id: req.params.coinId,
        quantity,
        purchasePrice,
      });

      user
        .save()
        .then(() => res.json({ user }))
        .catch((err) => res.status(400).json(`Error ${err}`));
    })
    .catch((err) => res.status(400).json(`Error ${err}`));
});

/* Update the portfolio's name */
router.put("/change-name", validateToken, function (req, res) {
  User.findById(req.userId)
    .then((user) => {
      user.portfolio.name = req.body.newName;

      user
        .save()
        .then(res.json({ user }))
        .catch((err) => res.status(400).json(`Error ${err}`));
    })
    .catch((err) => res.status(400).json(`Error ${err}`));
});

/* Update a single coin in the user's portfolio */
router.put("/:coinId", validateToken, function (req, res) {
  const { quantity, purchasePrice } = req.body;
  User.findById(req.userId)
    .then((user) => {
      const updatedPortfolio = user.portfolio.coins.map((coin) => {
        if (coin.id === req.params.coinId) {
          return {
            id: coin.id,
            quantity: parseInt(quantity) + parseInt(coin.quantity),
            purchasePrice,
          };
        } else {
          return coin;
        }
      });
      user.portfolio.coins = updatedPortfolio;
      user
        .save()
        .then(() => res.json({ user }))
        .catch((err) => res.status(400).json(`Error ${err}`));
    })
    .catch((err) => res.status(400).json(`Error ${err}`));
});

/* Remove a single coin from a uswr's portfolio */
router.delete("/:coinId", validateToken, function (req, res) {
  User.findById(req.userId)
    .then((user) => {
      user.portfolio.coins = user.portfolio.coins.filter(
        (coin) => coin.id !== req.params.coinId
      );

      user
        .save()
        .then(() => res.json({ user }))
        .catch((err) => res.status(400).json(`Error ${err}`));
    })
    .catch((err) => res.status(400).json(`Error ${err}`));
});

module.exports = router;
