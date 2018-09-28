var user_controller = require('../controllers/controller');

module.exports = function(app) {

	app.get('/', function(request, response) {
    Bird.find({}, function(err, birds) {
        if(err) {
            response.render('index', {errors: Bird.errors})
        }
        else{
            var allbirds = [];
            for(i=0; i<birds.length; i++){
                allbirds.push(birds[i]);
            }
            response.render('show', {birds: allbirds})
        }
    });
});

app.get('/birds/:id', function(request, response) {

 response.render('index');
})

app.get('/birds/new', function(request, response) {

 response.render('index');
})

app.post('/birds', function (req, res){
    var bird = new Bird(req.body);
    bird.save(function(err){
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
            res.redirect('/birds');
        }
    });
});

app.get('/birds/edit/:id', function(request, response) {

 response.render('index');
})

app.post('/birds/:id', function(req, res) {
    console.log(req.params);

    bird.update({_id: req.params})
 
});

app.post('/birds/destroy/:id', function(req, res) {
    console.log("POST DATA", req.body);
    var bird = new Bird(req.body);
    bird.save(function(err) {
        if(err){
            console.log("We have an error", err);
            for(var key in err.errors){
                req.flash('registration', err.errors[key].message);
            }
            res.redirect('/');
        }
        else{
            res.redirect('/birds');
        }
    });
});