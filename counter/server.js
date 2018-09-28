var express    = require('express'),
    app        = express(),
    path       = require('path'),
    port       = 8000;


app.set('view engine', 'ejs');
// Tell express where our static files are
// app.use(express.static(path.join(__dirname, '/static')));
app.set(path.join('views', __dirname, 'views'));
// require body-parser
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({extended: true}));


// new code:
var session = require('express-session');
// original code:
// more new code:
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))


// route to process new user form data:
app.get('/count', function(request, response) {
    var sess = request.session;
    sess.count = sess.count + 1;
    
    console.log(sess.count)
    response.redirect('/');
});


app.get('/', function(request, response) {
    var sess = request.session;
    if (sess.count == null) {
        sess.count = 1;
    }
    if (sess.count != null) {
        sess.count ++;
    }
    console.log(sess.count)
	response.render('index',{sess: sess.count});
});


app.listen(8000, function() {
    console.log(`listening on port ${port}`);
});