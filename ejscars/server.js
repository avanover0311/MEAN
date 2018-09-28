var express    = require('express'),
    app        = express(),
    path       = require('path'),
    port       = 8000;


app.set('view engine', 'ejs');
// Tell express where our static files are
app.use(express.static(path.join(__dirname, '/static')));

// Tell express where our views are
// app.set(path.join('views', __dirname, 'views'));
app.get("/cats/lions", function (request, response){
    // hard-coded user data
    var lions_array = [
        {Favorite: "Under a shady tree", Second: "A fellow feline"}
    ];
    response.render('lions', {lions: lions_array});
});


// Now lets set the view engine itself so that express knows that we are using
// ejs as opposed to another templating engine like jade

app.get('/cats/tabby', function(request, response) {
	response.render('tabby');
});

app.get('/cats', function(request, response) {
	response.render('cats');
});

// app.get('/cats/lions', function(request, response) {
// 	response.render('lions');
// });

app.get('/', function(request, response) {
	response.render('index');
});
// We create this file, it contains all of our routes. Think urls.py in Django
// and routes.rb in ruby.
// require('./config/routes.js')(app);

app.listen(8000, function() {
    console.log(`listening on port ${port}`);
});