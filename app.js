const express = require('express');
const morgan = require('morgan');
const app = express();
const nunjucks = require('nunjucks');
const routes = require('./routes');
const models = require('./models');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));
nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use('/', routes);
app.use(express.static('public'));

models.db.sync({force: true})
// .then(function () {
//     console.log('User table created!');
//     return models.Page.sync();
// })
.then(function () {
    console.log('All tables created!');
    app.listen(3000, function () {
        console.log('Server is listening on port 3000!');
    });
})
.catch(console.error.bind(console));

// app.listen(3000, function () {
//     console.log("server is listening on port 3000: Welcome home!");
// })
