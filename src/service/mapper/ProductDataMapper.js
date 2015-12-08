"use strict";
var Product = require('../../entity/Product');

class ProductDataMapper {
  convert(source){

    var productCollection = [];

    for(var i = 0; i < source.length; i++) {
      var product = new Product();
      product.setName(source[i].title);
      product.setDescription(source[i].description);
      product.setPrice(source[i].price);
      product.setCreatedDate(source[i].date_created);
      productCollection.push(product);
    }

    return productCollection;
  }

}

module.exports = ProductDataMapper;