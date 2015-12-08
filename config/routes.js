"use strict";

var services = require('./services');

var routes = [
/**
 * Authentication routes
 */
  {
    method: 'POST',
    path: '/login',
    handler: function(req, res) {
      services.authenticationController.login(req, res);
    }
  },

/**
 * Products routes
 */
  {
    method: 'GET',
    path: '/products',
    handler: function(req, res) {
      services.productController.listAllProducts(req, res);
    }
  }

];

module.exports = routes;
