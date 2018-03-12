const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const wikiRouter = require('./wiki');
const userRouter = require('./user');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.use('/wiki', wikiRouter);
router.use('/user', userRouter);

router.get('/', function(req, res) {
  res.render('index');
});

module.exports = router;
