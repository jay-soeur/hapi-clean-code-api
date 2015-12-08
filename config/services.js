"use strict";
var config = require('./config');
/**
 * Services
 */
var Base64Service = require('../src/service/Base64Service');
var MysqlConnection = require('../src/service/database/MysqlConnection');

/**
 * Controllers
 */
var AuthenticationController = require('../src/controllers/AuthenticationController');
var ProductController = require('../src/controllers/ProductController');
/**
 * Repositories
 */
var UserRepository = require('../src/repository/UserRepository');
var UserTokenRepository = require('../src/repository/UserTokenRepository');
var ProductRepository = require('../src/repository/ProductRepository');
/**
 * Data access
 */
var UserDao = require('../src/service/database/user/UserMysqlDao');
var UserTokenDao = require('../src/service/database/userToken/UserTokenMysqlDao');
var ProductDao = require('../src/service/database/product/ProductMysqlDao');

/**
 * Data Mappers
 */
var UserDataMapper = require('../src/service/mapper/UserDataMapper');
var UserTokenDataMapper = require('../src/service/mapper/UserTokenDataMapper');
var ProductDataMapper = require('../src/service/mapper/ProductDataMapper');

var base64Service = new Base64Service();
var db = config.database;
var connection = new MysqlConnection(db.host, db.user, db.password, db.database );

/**
 * instantiated DAOs
 */
var userDao = new UserDao(connection);
var userTokenDao = new UserTokenDao(connection);
var productDao = new ProductDao(connection);

/**
 * Instantiated data mappers
 */
var userDataMapper = new UserDataMapper();
var userTokenDataMapper = new UserTokenDataMapper();
var productDataMapper = new ProductDataMapper();

/**
 * Instantiated repositories
 */
var userTokenRepository = new UserTokenRepository(userTokenDao, userTokenDataMapper);
var userRepository = new UserRepository(userDao, userDataMapper);
var productRepository = new ProductRepository(productDao, productDataMapper);

/**
 * instantiated controllers
 */
var authenticationController = new AuthenticationController(userRepository, userTokenRepository, base64Service);
var productController = new ProductController(productRepository, userTokenRepository, base64Service);

/**
 * service container
 */
var services = {};

services.authenticationController = authenticationController;
services.productController = productController;

module.exports = services;