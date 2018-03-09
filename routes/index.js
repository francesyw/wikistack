const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', function(req, res) {
  res.render('index');
});

module.exports = router;
