var product_controller = require('../controllers/product_controller'),
    path                = require('path');

// routes are first checked here, in Express
module.exports = function(app) {
  app.get('/api/products', product_controller.product);
  app.get('/api/products/:id', product_controller.product);
  app.post('/api/products', product_controller.products_create);
  app.put('/api/products/:id', product_controller.update);
  app.delete('/api/products/:id', product_controller.delete);

  // if no Express routes match, go back to Angular
  app.all('*', (req, res, next) => {
    res.sendFile(path.resolve('./public/dist/public/index.html'))
  });
}