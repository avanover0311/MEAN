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
app.use(bodyParser.json());
app.use(flash());
app.use(session({
	secret: 'keyboardkitteh',
	resave: false,
	saveUnitialized: true,
	cookie: { maxAge: 6000 }
}));
var bodyParser = require('body-parser');
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var addUser = new mongoose.Schema({
 name: { type: String, required: true, minLength: 4 },
},
 {timestamps: true}
);
mongoose.model('User', addUser);
var User = mongoose.model('User', addUser);

app.get('/', function(req, res){
	User.find({}, function(err, person){
		if(err){
			console.log('Person not added')
			res.json({message: "Error", error: err})
		}
		else {
			res.json({message: "Yay!", data.person})
		}
	});
});

app.get('/new/:name', function(req, res){
    console.log("Will this add someone?");
    console.log(req.params);
    var person = new Person(req.params);
    person.save(function(err){
        if(err){
            console.log('Error in Person Creation');
            res.json({message: 'Error', error:err})
        }
        else {
            console.log('Person Added');
            Person.find({}, function(err, people){
                if(err){
                    console.log('Person not added');
                    res.json({message: "Error", error: err})
                }
                else {
                    res.json({message: "Success", data: people})
                }
            });
        }
    });
});
app.get('/delete/:name', function(req, res){
    Person.deleteOne({name: req.params.name}, function(err, people){
        if(err){
            console.log('Person not added');
            res.json({message: "Error", error: err})
        }
        else {
            console.log('Person Added');
            Person.find({}, function(err, people){
                if(err){
                    console.log('Person not added');
                    res.json({message: "Error", error: err})
                }
                else {
                    res.json({message: "Success", data: people})
                }
            });
        }
    });
});
app.get('/:id', function(req, res){
    Person.findOne({name: req.params.name}, function(err, people){
        if(err){
            console.log('Person not added');
            res.json({message: "Error", error: err})
        }
        else {
            res.json({message: "Success", data: people})
        }
    });
});

app.listen(8000, function() {
    console.log("listening on port 8000");
});