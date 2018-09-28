var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.Promise = global.Promise;
var session = require('express-session');
var moment = require('moment');
moment().format();
const bcrypt = require('bcrypt')
const saltRounds = 10;
const password ='$0/\/\P4$$w0rD';
const otherpassword = 'not_bacon';
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

var addUser = new mongoose.Schema({
 first_name: { type: String, required: true, minLength: 4 },
 last_name: { type: String, required: true, minLength: 4 },
 email: { type: String, required: true, minLength: 4 },
 password: { type: String, required: true, minLength: 2},
 bday: { type: Date, required: true, minLength: 4 },
},
 {timestamps: true}
);
mongoose.model('User', addUser);
var User = mongoose.model('User', addUser);

app.get('/', function(req, res){
	console.log('Index Loading');
	res.render('index')
});

app.post('/', function(req, res){
	var fname = req.body.first_name;
	var lname= req.body.last_name;
	var email = req.body.email;
	let pword = bcrypt.hashSync(req.body.password, 10);
	var bday=req.body.bday;
	var test=User.findOne({email: req.body.email}); 

	if(test){
		req.flash('something here to say email address exists');
		console.log('stephen youre a dummy');
		return res.redirect('/')
	};
		
		var newuser= new User({first_name: fname, last_name: lname, email: email, password: pword, bday: bday});
		newuser.save(function(err){
			if(err){
				console.log("User not created");
				for(var key in err.errors){
				req.flash("error", err.errors[key].message);
				}
				return res.redirect('/')
			}
			console.log('User created');
			return res.redirect('/')
		});
});

app.listen(8000, function() {
    console.log("listening on port 8000");
});