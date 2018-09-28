var user_controller = require('..controllers/user_controller');


model.exports = function(app) {

	app.get('/user', user_controller.user);
}