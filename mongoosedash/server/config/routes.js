var user_controller = require('..models/quote.js');


model.exports = function(app) {

	app.get('/user', user_controller.user);
}