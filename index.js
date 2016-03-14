var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongojs = require('mongojs');
var port = 9090;
var corsOptions = {
  origin: 'http://localhost:9090'
}

var app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));

var db = mongojs('ecommerce', ['products']); //ecommerce database //producstsecommerce is my collection

app.get('/api/products', function(req, res) {
  db.products.find(req.query, function(err, results) {
    res.json(results);
  })
})



app.get('/api/products/:id', function(req, res) {
  db.products.findOne({_id:mongojs.ObjectId(req.params.id)}, function(err, results) {
    res.json(results);
  })
})


app.put('/api/products/:id', function(req, res) {
  db.products.update({_id: mongojs.ObjectId(req.params.id)}, {$set: req.body}, function(err, results) {
    return res.json(results);
  })
})



app.post('/api/products', function(req, res) {
  db.products.insert(req.body, function(err, results) {
    if(!err) {
      res.status(200).json(results);
    }
    else {
      res.status(500).json(err);
    }
  })
})


app.delete('/api/products/:id', function(req, res) {
  db.products.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, results) {
    res.json(results);
  })
})


app.listen(port, function() {
  console.log('listening on ' + port)
})
