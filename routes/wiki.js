const express = require('express');
const wikiRouters = express.Router();

wikiRouters.get('/', function(req, res, next) {
  res.redirect('/');
});

wikiRouters.post('/', function(req, res, next) {
  res.send('response to POST request to /wiki/');
});

wikiRouters.get('/add', function(req, res, next) {
  // res.send('response to GET request to /wiki/add');
  res.render('addpage');
});


module.exports = wikiRouters;
