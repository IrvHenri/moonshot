var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");

var usersRouter = require('./routes/users');
var coinsRouter = require('./routes/coins');
var portfoliosRouter = require('./routes/portfolios');
var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/users', usersRouter);
app.use('/api/coins', coinsRouter);
app.use('/api/portfolios', portfoliosRouter);

module.exports = app;
