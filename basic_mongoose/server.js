
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
// Use native promises
mongoose.Promise = global.Promise;

var UserSchema = new mongoose.Schema({
 name: {type: String, required: true, minlength: 6},
 quote: {type: String, required: true, minlength: 8},
}, 
{timestamps: true});

mongoose.model('User', UserSchema);
var User = mongoose.model('User');

const flash = require('express-flash');
app.use(flash());
app.post('/quotes', function (req, res){
    var user = new User(req.body);
    user.save(function(err){
        if(err){
            // if there is an error upon saving, use console.log to see what is in the err object 
            console.log("We have an error!", err);
            // adjust the code below as needed to create a flash message with the tag and content you would like
            for(var key in err.errors){
                req.flash('registration', err.errors[key].message);
            }
            res.redirect('/');
        }
        else {
            res.redirect('/quotes');
        }
    });
});

app.get('/', function(request, response) {

 response.render('index');
})

app.post('/quotes', function(req, res) {
    console.log("POST DATA", req.body);
    var user = new User(req.body);
    user.save(function(err) {
        if(err){
            console.log("We have an error", err);
            for(var key in err.errors){
                req.flash('registration', err.errors[key].message);
            }
            res.redirect('/');
        }
        else{
            res.redirect('/quotes');
        }
    });
});

app.get('/quotes', function(req, res) {
    User.find({}, function(err, users) {
        if(err) {
            res.render('quotes', {errors: User.errors, moment: moment})
        }
        else{
            var allquotes = [];
            for(i=0; i<users.length; i++){
                allquotes.push(users[i]);
            }
            console.log(allquotes)
            res.render('quotes', {quotes: allquotes, moment: moment})
        }
    }).sort({createdAt: -1});
});

app.listen(8000, function() {
    console.log("listening on port 8000");
})
