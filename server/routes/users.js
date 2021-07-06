const express = require('express');
const router = express.Router();

//Sign Up
router.post('/signup', function(req, res, next) {
  res.send('respond with a resource');
});

//Log In
router.post('/login', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
