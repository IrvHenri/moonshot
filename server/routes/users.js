const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

//Sign Up
router.post('/signup', function(req, res, next) {

  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

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

  console.log('email', email);
  console.log('password', password);

  User.findOne({email})
    .then((data) => {
      if (data === null) {
        res.status(404).json("email does not exist");
      }

      if (data.password === password) {
        res.json(data);
      } else {
        res.status(400).json("wrong password");
      }

    })
    .catch(error => res.status(400).json(error));

});


module.exports = router;
