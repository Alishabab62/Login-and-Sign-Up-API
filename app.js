var createError = require('http-errors');
var express = require('express');
var path = require('path');
const cors=require('cors')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv= require('dotenv')
var users = require('./routes/users');

dotenv.config()

var app = express();
app.use(cors())

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', users);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
