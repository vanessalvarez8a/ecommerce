var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
// var mongojs = require('mongojs');
var mongoose = require('mongoose');
var app = express();
var port = 9090;
var mongoUri = 'mongodb://localhost/product'


app.use(bodyParser.json());
app.use(cors());

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('connected to mongo at ' + mongoUri);

})

require('./features/productRoutes')(app);


app.listen(port, function() {
  console.log('listening on ' + port)
})








//////////////// BELOW IS WHAT IT IS WITH MONGOJS ///////////////////////

// var db = mongojs('ecommerce', ['products']); //ecommerce database //producstsecommerce is my collection

// app.get('/api/products', function(req, res) {
//   db.products.find(req.query, function(err, results) {
//     res.json(results);
//   })
// })
//
//
//
// app.get('/api/products/:id', function(req, res) {
//   // db.products.findOne({_id:mongojs.ObjectId(req.params.id)}, function(err, results) {
//     res.json(results);
//   // })
// })
//
//
// app.put('/api/products/:id', function(req, res) {
//   // db.products.update({_id: mongojs.ObjectId(req.params.id)}, {$set: req.body}, function(err, results) {
//     return res.json(results);
//   // })
// })
//
//
//
// app.post('/api/products', function(req, res) {
//   db.products.insert(req.body, function(err, results) {
//     if(!err) {
//       res.status(200).json(results);
//     }
//     else {
//       res.status(500).json(err);
//     }
//   })
// })
//
//
// app.delete('/api/products/:id', function(req, res) {
//   // db.products.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, results) {
//     res.json(results);
//   // })
// })
