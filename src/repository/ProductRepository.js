"use strict";

class ProductRepository {
  constructor(productDao, productDataMapper){
    this._productDao = productDao;
    this._productDataMapper = productDataMapper;
  }

  findAll() {
    var delegate = this._productDataMapper.convert;
    return (this._productDao.getAllLatestProducts()).then(delegate);
  }
}

module.exports = ProductRepository;