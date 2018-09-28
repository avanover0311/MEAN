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
var addTasks = new mongoose.Schema({
 task: { type: String, required: true, minlength: 4},
 description: { type: String, required: true, default: "" },
 completed: { type: Boolean, default: false}
},
 {timestamps: true}
);
mongoose.model('Tasks', addTasks);
var Tasks = mongoose.model('Tasks', addTasks);


app.get('/tasks', function(req, res){
	Tasks.find({}, function(err, tasks){
		console.log(req.body)
		res.json({'tasks':tasks});
	});
});

app.get('/tasks/:id', function(req, res){
	Tasks.findById(req.params.id, function(err, task){
		res.json({'task':task});
	});
});

app.post('/tasks', function(req, res){
	console.log('Ready to make?', req.body);
	Tasks.create(req.body, function(err, task){
		res.json({'task': task});
	});
});

app.put('/tasks', function(req, res){
	console.log('Ready to update?', req.body);
	Tasks.findOneAndUpdate({_id: req.body._id}, { $set: {task: req.body.task, description: req.body.description}}, function(err, task){
		res.json({'err': err, 'task': task});
	});
});

app.delete('/tasks/:id', function(req, res){
	console.log('at app.delete in server.js', req.params);
	Tasks.deleteOne({_id: req.params.id}, function(err, task){
		res.json({'err': err, 'task': task});
	});
});

app.listen(8000, function() {
    console.log("listening on port 8000");
});
