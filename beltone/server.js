// Basics
var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restapi');
mongoose.Promise = global.Promise;
var bodyParser = require('body-parser');
var path = require('path');
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));
app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});
//Schema
var addMovies = new mongoose.Schema({
 title: { type: String, required: true, minlength: 4}
},
 {timestamps: true}
);
mongoose.model('Movies', addMovies);
var Movies = mongoose.model('Movies', addMovies);

var addReview = new mongoose.Schema({
	first_name: { type: String, required: true},
	content: { type: String, required: true, minlength: 4},
	stars: { type: Number, required: true},
	movie: [addMovies] 
})

app.get('/movies', function(req, res){
	Movies.find({}, function(err, movies){
		console.log(req.body)
		res.json({'movies':movies});
	});
});

app.get('/movies/:id', function(req, res){
	Movies.findById(req.params.id, function(err, movie){
		res.json({'movie':movie});
	});
});

app.post('/movies', function(req, res){
	console.log('Ready to make?', req.body);
	Movies.create(req.body, function(err, movie){
		res.json({'movie': movie});
	});
});

app.delete('/movies/:id', function(req, res){
	console.log('at app.delete in server.js', req.params);
	Movies.deleteOne({_id: req.params.id}, function(err, movie){
		res.json({'err': err, 'movie': movie});
	});
});

app.listen(8000, function() {
    console.log("listening on port 8000");
});
