var Product = require('../models/product_model');

module.exports = {
    products: (req, res) => {
        Product.find({}, (err, products) =>{
            if (err) {
                err = err.errors
            }
            res.json({'errors': err, 'products': products})
        });
    },

    product: (req, res) =>{
        console.log(req.params.id);
        id = req.params.id;
        Product.findById(id, (err, product) => {
          if (err) {
            err = err.errors;
          }
          console.log('product from server');
          res.json({'errors:': err, 'product':product});
        });
      },
    update: function(req, res){
        console.log("beginning of update!!!!")
        Product.findOne({_id: req.params.id}, function(err, product){
            product.name = req.body.name;
            product.price = req.body.price;
            product.quantity = req.body.quantity;
            product.save(function(err){
                if(err){
                    console.log(err)
                    res.json({message: "Something went wrong with your Product"})
                } else {
                    console.log("in the update")
                    res.json({data: product, err: err})
                }
            })
        })
    },

    delete: function(req, res){
        console.log("lets deeeeeeeeeeelete em")
        Product.findOneAndRemove({_id: req.params.id}, function(err, product){
            if(err){
                res.json({mssage: 'error', data:err})
            }
            else{
                res.json({message: 'success', data: product})
            }
        })
    },

    products_create: (req, res) => {
        p = new Product();
        p.name = req.body.name;
        p.price = req.body.price;
        p.quantity = req.body.quantity;

        p.save((err) => {
            if (err) {
                err = err.errors;
            }
            res.json({'errors': err, 'product': p});
        });
    }
  }