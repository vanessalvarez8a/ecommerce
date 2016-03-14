var Product = require('./Product')

module.exports = {
  addProduct: function(req, res) {
    new Product(req.body).save(function(err, product) {
      if(err) {
        return res.json(product);
      }
      res.json(product);
    })
  },
  getProduct: function(req, res) {
    Product.find(req.query).exec().then(function(err, product) {
      if(err) {
        return res.status(500).send(err)
      }
      res.send(product);
    })
  },
  getIdProduct: function(req, res) {
    Product.findById(req.params.id).then(function(err, product) {
      if(err) {
        return res.status(500).send(err)
      }
      res.send(product);
    })
  },
  updateProduct: function(req, res) {
    Product.findByIdAndUpdate(req.params.id, req.body, function(err, product) {
      if(err) {
        return res.status(500).send(err);
      }
      res.send(product);
    })
  },
  removeProduct: function(req, res) {
    Product.findByIdAndRemove(req.params.id, function(err, product) {
      if(err) {
        return res.status(500).send(err);
      }
      res.send(product);
    })
  }

}
