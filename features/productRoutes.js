var ctrl = require('./productCtrl');

module.exports = function(app) {
  app.route('/api/product')
      .post(ctrl.addProduct)
      .get(ctrl.getProduct)
  app.route('/api/product/:id')
      .get(ctrl.getIdProduct)
      .put(ctrl.updateProduct) //this is for the UPDATE! AND DO IT CHANGES IN BODY
      .delete(ctrl.removeProduct)
}
