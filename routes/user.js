const express = require('express');
const userRouters = express.Router();

userRouters.get('/', function(req, res, next) {
  res.redirect('/');
});

userRouters.post('/', function(req, res, next) {
  res.send('response to POST request to /wiki/');
});

userRouters.get('/add', function(req, res, next) {
  // res.send('response to GET request to /wiki/add');
  res.render('addpage');
});


module.exports = userRouters;
