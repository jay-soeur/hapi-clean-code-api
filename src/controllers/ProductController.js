"use strict";
var Controller = require('./Controller');

class ProductController extends Controller {
  constructor(productRepository, userTokenRepository, base64ServiceInterface) {
    super(userTokenRepository, base64ServiceInterface);
    this._productRepository = productRepository;
  }

  listAllProducts(req, res) {
    var promise = super.authenticate(req.headers, res);
    var self = this;
    promise.then(function(){
      var promise = self._productRepository.findAll();

      promise.then(function(productCollection){
        res({products:productCollection});
      });

    });

  }
}

module.exports = ProductController;