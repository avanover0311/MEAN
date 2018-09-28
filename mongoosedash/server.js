var express = require('express'),
    app        = express(),
  path       = require('path'),
  port       = 8000;

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
var moment = require('moment');
moment().format();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var session = require('express-session')
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, './static')));

mongoose.Promise = global.Promise;

const flash = require('express-flash');
app.use(flash());



app.listen(8000, function() {
    console.log("listening on port 8000");
})
