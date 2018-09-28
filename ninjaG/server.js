// Modules
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');



// App
const app = express();



// Mongoose
mongoose.connect('mongodb://localhost/ninjaGoldNg', { useNewUrlParser: true });

var GoldSchema = new mongoose.Schema({
    value: {type: Number},
}, {timestamps: true})

mongoose.model('Gold', GoldSchema);

const totalGold = mongoose.model('Gold')
const Farm = mongoose.model('Gold')
const Cave = mongoose.model('Gold')
const House = mongoose.model('Gold')
const Casino = mongoose.model('Gold')



// Express
app.use(express.static( __dirname + '/public/dist/public' ));

// app.use(bodyParser.json());



// Routes
app.get('/farmUp', function(req, res){
    var farm = Farm.find({}, function(err,tasks){
        if (err) {
            res.json({'err': 'Ops'});
        }
        else {
            res.json(tasks);
        }
    })
})

app.get('/tasks/:id', function(req,res){
    console.log(req.params.id)
    Task.findOne({_id: req.params.id}, function(err,task){
        res.json({data: task, message: "getOneTask"})
    })
})

app.post('/tasks', function(req,res){
    console.log(req.body);
    var task = new Task({
        title: req.body.title,
        description: req.body.description,
    });
    task.save(function(err) {
        if (err){
            console.log(err);
            res.json({err: err, message: "Could not save task."})
        }
        else {
            Task.find({}, function(err,tasks){
                res.json({tasks})
            })
        }
    })
})

app.put('/tasks/:id', function(req,res){
    Task.findOne({_id: req.params.id}, function(err,task){
        task.title = req.body.title;
        task.description = req.body.description;
        task.save(function (err){
            if(err){
                res.json({message: "Could not save task."})
            } else {
                res.json({data: task})
            }
        })
    })
})

app.delete('/tasks/:id', function(req,res){
    Task.remove({_id: req.params.id}, function(err){
        Task.find({}, function(err,tasks){
            res.json({data: tasks})
        })
    });
})



// Listen
const server = app.listen(8000, function() {
    console.log("listening on port 8000");
})
