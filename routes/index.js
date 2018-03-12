const express = require('express');
const router = express.Router();
const wikiRouter = require('./wiki');
const userRouter = require('./user');
const models = require('../models');
const Page = models.Page;

// const bodyParser = require('body-parser');
// var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.use('/wiki', wikiRouter);
router.use('/user', userRouter);

router.get('/', function(req, res, next) {
  Page.findAll()
  .then(function(allPages) {
      console.log(allPages);
      res.render('index', { pages : allPages });
    })
    .catch(next);
});

module.exports = router;
