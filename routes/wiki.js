const express = require('express');
const wikiRouters = express.Router();
const models = require('../models');
const Page = models.Page;
const User = models.User;

wikiRouters.get('/', function(req, res, next) {
  res.redirect('/');
});

wikiRouters.post('/', function(req, res, next) {
  User.findOrCreate({
      where: {
        name: req.body.authorName,
        email: req.body.authorEmail
      }
    })
    .then(function(values) {
      const user = values[0];
      const page = Page.build({
        title: req.body.title,
        content: req.body.content,
        urlTitle: req.body.urlTitle
      });
      return page.save().then(function (p) {
        // console.log(user);
        return p.setAuthor(user);
      });
    })
    .then(function(savedPage) {
      res.redirect(savedPage.urlTitle);
    })
    .catch(next);
});

wikiRouters.get('/add', function(req, res, next) {
  res.render('addpage');
});

wikiRouters.get('/:urlTitle', function(req, res, next) {
  Page.findOne({
      where: {
        urlTitle: req.params.urlTitle
      }
    })
    .then(function(foundPage) {
      // console.log(foundPage);
      res.render('wikipage', foundPage.dataValues);
    })
    .catch(next);
})

module.exports = wikiRouters;
