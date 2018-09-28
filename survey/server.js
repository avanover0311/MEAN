var express    = require('express'),
    app        = express(),
    path       = require('path'),
    port       = 8000;


app.set('view engine', 'ejs');
app.set(path.join('views', __dirname, 'views'));
// Tell express where our static files are
app.use(express.static(path.join(__dirname, '/static')));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
// Tell express where our views are
var session = require('express-session')
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.get('/', function(request, response) {
    var sess = request.session
	response.render('index');
});

app.post('/show', function (request, response){
     console.log(request.body)
     request.session.data = request.body
    response.redirect('/show');
});

app.get('/show', function(request, response) {
    var package = request.session.data
    response.render('show', {package});
});
// We create this file, it contains all of our routes. Think urls.py in Django
// and routes.rb in ruby.
// require('./config/routes.js')(app);

app.listen(8000, function() {
    console.log(`listening on port ${port}`);
});