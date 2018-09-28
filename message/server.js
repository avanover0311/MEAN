// Basics
var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.Promise = global.Promise;
var session = require('express-session');
var moment = require('moment');
moment().format();
var flash = require('express-flash');
app.use(flash());
app.use(session({
	secret: 'keyboardkitteh',
	resave: false,
	saveUnitialized: true,
	cookie: { maxAge: 6000 }
}));
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


//Schema



//Routes
// now in config
require('./server/config/routes.js')(app)

//Server Info
app.listen(8000, function() {
    console.log("listening on port 8000");
});