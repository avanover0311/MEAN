// Basics
var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restapi');
mongoose.Promise = global.Promise;
var bodyParser = require('body-parser');
var path = require('path');
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/product' ));
app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/product/index.html"))
});
//Schema
var addProducts = new mongoose.Schema({
 title: { type: String, required: true, minlength: 4},
 description: { type: String, required: true, default: "" },
 price: { type: Number, required: true}
},
 {timestamps: true}
);
mongoose.model('Products', addProducts);
var Products = mongoose.model('Products', addProducts);


app.get('/products', function(req, res){
	Products.find({}, function(err, products){
		console.log(req.body)
		res.json({'products':products});
	});
});

// app.get('/products/:id', function(req, res){
// 	Products.findById(req.params.id, function(err, product){
// 		res.json({'product':product});
// 	});
// });

// app.post('/tasks', function(req, res){
// 	console.log('Ready to make?', req.body);
// 	Tasks.create(req.body, function(err, task){
// 		res.json({'task': task});
// 	});
// });

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
