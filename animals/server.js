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

var addSloth = new mongoose.Schema({
 name: { type: String, required: true, minLength: 2 },
 favorite_food: { type: String, required: true, minLength: 2},
 age: { type: Number, required: true},
},
 {timestamps: true}
);
mongoose.model('Sloth', addSloth);
var Sloth = mongoose.model('Sloth');

// Routes
app.get('/', function(req, res){
	Sloth.find({}, function(err, sloths){
		if(err) {
			res.render('index', {errors: Sloth.errors})
		}
		else{
			res.render('index', {all_sloths: sloths});
		}
	});
});

app.get('/sloths/new', function(req, res){
	res.render('new');
});

app.get('/sloths/edit/:id', function(req, res){
	console.log(req.params);
	Sloth.findOne({_id:req.params.id}, function(err, sloth){
		if(err){
			res.render('show', {errors:Sloth.errors})
		}
		else{
			console.log('Hopefully we will edit a sloth');
			console.log(sloth)
			res.render('edit', {sloth: sloth});
		}
	})
});

app.get('/sloths/:id', function(req, res){
	console.log(req.params);
	Sloth.findOne({_id:req.params.id}, function(err, sloth){
		if(err){
			res.render('show', {errors:Sloth.errors})
		}
		else{
			console.log('Hopefully we will show a sloth');
			res.render('show', {sloth: sloth});
		}
	})
});

app.post('/sloths', function(req, res){
	console.log(req.body);
	var sloth = new Sloth(req.body);
	sloth.save(function(err){
		if(err){
			console.log("Danger Will Robinson", err);
			for(var key in err.errors){
				req.flash('registration', err.errors[key].message);
			}
			res.redirect('/sloths/new');
		}
		else{
			res.redirect('/');
		}
	});
});

app.post('/sloths/destroy/:id', function(res, req){
	console.log("delete")
	res.redirect('/')
})

app.post('/sloths/:id', function(req, res){
	console.log(req.body);
	Sloth.findOne({_id:req.params.id}, function(err, sloth){
		sloth.name=req.body.name
		sloth.favorite_food=req.body.favorite_food
		sloth.age=req.body.age
		sloth.save(function(err){

		})
	res.redirect('/');
	})
});

app.listen(8000, function() {
    console.log("listening on port 8000");
});