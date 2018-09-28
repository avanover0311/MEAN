var user_controller = require('../controllers/controller');

module.exports = function(app) {

	app.get('/', user_controller.index)
	app.get('/', function(req, res){
	console.log('Index Loading');

	Message.find({}, function(err, message){
		if(err){
			return res.render('index', {errors: message.errors})
		}
		else{
			Comment.find({}, function(err, comment){
				if(err){

				}
				else{
					console.log('Made it to the comment loop in get/');

					res.render('index', {all_messages:message})
				}
			});
		}
	});
});

app.post('/message', function(req, res){
	console.log("Message to be written");
	console.log(req.body);
	var message = new Message(req.body);
	message.save(function(err){
		if(err){
			console.log('Errors in Message Creation');
			console.log(err);
			for(var key in err.errors){
				req.flash('registration', err.errors[key].message);
			}
			return res.redirect('/');
		}
		else{
			res.redirect('/');
		}
	});
});


app.post('/message/:id/comment', function(req, res){
	console.log("Comments to be put with a message")
	console.log(req.body);
	Comment.create(req.body, function(err, data){
		if(err) {
			console.log('Errors in Comment Creation');
			console.log(err);
			for (var key in err.errors){
				req.flash('registration', err.errors[key].message);
			}
			return res.redirect('/');
		}
		else{
			Message.findOneAndUpdate({_id: req.params.id}, {$push: {comments: data}}, function(err, data){
				if(err){
					console.log('Comment creates(?) but not linked');
					for (var key in err.errors){
						req.flash('registration', err.errors[key].message);
					}
					return res.redirect('/')
				}
				else{
					console.log('It Looks like the Comment was made and linked');
					res.redirect('/')
				}
			});
		}
	});
});
}