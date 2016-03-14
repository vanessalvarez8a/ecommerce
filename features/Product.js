var mongoose = require('mongoose');

var Product = new mongoose.Schema({
  title: {type: String, index: true, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true, min: 1}
})

module.exports = mongoose.model('Product', Product);
