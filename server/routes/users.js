const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const saltRounds = 10;

//Sign Up
router.post("/signup", async function (req, res, next) {
  const name = req.body.name;
  const email = req.body.email;
  const initialPassword = req.body.password;

  if (!email || !initialPassword) {
    return res.status(400).json("Please enter valid email or password");
  }

  if (!email.includes("@") || email.length <= 3) {
    return res.status(400).json("Please enter valid email");
  }

  if (initialPassword.length < 6) {
    return res
      .status(400)
      .json("Passwords must be at least 6 characters in length");
  }

  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json("Email is already in use!");

  const password = bcrypt.hashSync(initialPassword, saltRounds);
  const newUser = new User({ name, email, password });

  try {
    await newUser.save();
    res.json("New user added!");
  } catch {
    res.status(400).json("Error creating new user");
  }
});

// to test login function
router.get("/", function (req, res, next) {
  User.find() //find is a mongodb function to find user
    .then((users) => res.json(users))
    .catch((error) => res.status(400).json("Error: " + error));
});

//Log In
router.post("/login", function (req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email })
    .then((user) => {
      if (user === null) {
        return res.status(400).json("Email does not exist");
      }

      if (!bcrypt.compareSync(password, user.password)) {
        return res.status(400).json("Wrong password");
      }

      const token = jwt.sign({ _id: user._id }, process.env.SECRET_TOKEN);
      res.header("auth-token", token).send(token);
    })
    .catch((error) => res.status(400).json(error));
});

module.exports = router;
