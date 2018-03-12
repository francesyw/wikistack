const express = require('express');
const userRouters = express.Router();
const models = require('../models');
const Page = models.Page;
const User = models.User;

userRouters.get('/', function(req, res, next) {
  User.findAll()
  .then(function (users){
    res.render('users', { users });
  })
  .catch(next);
});

userRouters.post('/', function(req, res, next) {
  res.send('response to POST request to /wiki/');
});

userRouters.get('/add', function(req, res, next) {
  // res.send('response to GET request to /wiki/add');
  res.render('addpage');
});


module.exports = userRouters;
