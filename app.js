const express = require('express');
const morgan = require('morgan');
const app = express();
const nunjucks = require('nunjucks');
const routes = require('./routes');
const models = require('./models');

app.use(morgan('dev'));
nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use('/', routes);
app.use(express.static('public'));

models.User.sync()
.then(function () {
    console.log('User table created!');
    return models.Page.sync();
})
.then(function () {
    console.log('Page table created!');
    app.listen(3000, function () {
        console.log('Server is listening on port 3000!');
    });
})
.catch(console.error.bind(console));

// app.listen(3000, function () {
//     console.log("server is listening on port 3000: Welcome home!");
// })
