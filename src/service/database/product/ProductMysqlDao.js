"use strict";
var Promise = require('promise');

class ProductMysqlDao {
  constructor(connection) {
    this.connection = connection;
  }

  getAllLatestProducts(){
    var queryString = "SELECT * FROM products ORDER BY date_created DESC LIMIT 20";
    var conn = this.connection.getConnection();

    return new Promise(function(resolve, reject) {
      conn.query(queryString, function(err, rows, fields){
        if (err) {
          console.log(err);
          reject(err);
        }else {
          resolve(rows);
        }
      });
    });
  }

}

module.exports = ProductMysqlDao;