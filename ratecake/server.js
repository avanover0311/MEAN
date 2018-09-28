// Basics
var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restapi');
mongoose.Promise = global.Promise;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));


//Schema
var addCakes = new mongoose.Schema({
 name: { type: String, required: true, minlength: 4},
 cake: { type: String, required: true, minlength: 4},
 
},
 {timestamps: true}
);
mongoose.model('Cakes', addCakes);
var Cakes = mongoose.model('Cakes', addCakes);

var rateCakes = new mongoose.Schema({
 comment: { type: String, required: true, default: "" },
 rate: { type: Number, required:true}
 
},
 {timestamps: true}
);
mongoose.model('cakeRates', rateCakes);
var cakeRates = mongoose.model('cakeRates',rateCakes);


//Routes
app.get('/cakes', function(req, res){
	Cakes.find({}, function(err, cakes){
		console.log(req.body)
		res.json({'cakes':cakes});
	});
});

app.get('/cakes/:id', function(req, res){
	Cakes.findById(req.params.id, function(err, task){
		res.json({'cake':cake});
	});
});

app.post('/cakes', function(req, res){
	console.log('Ready to make?', req.body);
	Cakes.create(req.body, function(err, cake){
		res.json({'cake': cake});
	});
});

// app.put('/tasks', function(req, res){
// 	console.log('Ready to update?', req.body);
// 	Tasks.findOneAndUpdate({_id: req.body._id}, { $set: {task: req.body.task, description: req.body.description}}, function(err, task){
// 		res.json({'err': err, 'task': task});
// 	});
// });

// app.delete('/tasks/:id', function(req, res){
// 	console.log('at app.delete in server.js', req.params);
// 	Tasks.deleteOne({_id: req.params.id}, function(err, task){
// 		res.json({'err': err, 'task': task});
// 	});
// });



app.listen(8000, function() {
    console.log("listening on port 8000");
});