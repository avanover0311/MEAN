var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  name: {type: String, required: [true, 'Name is required!'], minlength: [3, 'Name must have at least 3 characters!']},
  quantity: {type: Number, required:[true, 'Quantity required']},
  price: { type: Number, required:[true, 'Must have a price']}
}, {timestamps: true });

var Product = mongoose.model('Movie', MovieSchema);

module.exports = Product