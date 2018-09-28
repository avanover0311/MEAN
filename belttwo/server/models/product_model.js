var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  name: {type: String, required: [true, 'Name is required!'], minlength: [4, 'Title must have atleast 4 characters!']},
  price: {type: Number, required: [true, 'Price is required!']},
  quantity: {type: Number, required: [true, 'quantity in required']},
}, {timestamps: true });

var Product = mongoose.model('Product', ProductSchema);
module.exports = Product;