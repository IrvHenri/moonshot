const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const validation = require('../routes/validation');
const saltRounds = 10;

//Sign Up
router.post('/signup', function(req, res, next) {

  const name = req.body.name;
  const email = req.body.email;
  const password = bcrypt.hashSync(req.body.password, saltRounds);

  const newUser = new User({name, email, password});

  //save new user to database
  newUser.save()
    .then(() => res.json("User Added!"))
    .catch(error => res.status(400).json('Error: ' + error));
});

//to test login function
router.get('/', function(req, res, next) {
  User.find() //find is a mongodb function to find user
    .then(users => res.json(users))
    .catch(error => res.status(400).json('Error: ' + error));
});

//Log In
router.post('/login', function(req, res, next) {

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({email})
    .then((user) => {
      if (user === null) {
        res.status(404).json("email does not exist");
      }

      if (bcrypt.compareSync(user.password, password)) {
        res.json(user);
      } else {
        res.status(400).json("wrong password");
      }

      const token = jwt.sign({_id: user._id}, process.env.SECRET_TOKEN);
      res.header('auth-token',token).send(token);

    })
    .catch(error => res.status(400).json(error));

});


module.exports = router;
