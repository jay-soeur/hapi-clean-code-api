"use strict";
var Promise = require('promise');

class UserMysqlDao {
  constructor(connection) {
    this.connection = connection;
  }

  getUserById(id){
    var queryString = "SELECT * FROM users WHERE uid =?";
    var conn = this.connection.getConnection();

    return new Promise(function(resolve, reject) {
      conn.query(queryString,[id], function(err, rows, fields){
        if (err) {
          reject(err);
        }else {
          resolve({rows: rows});
        }
      });
    });
  }

  getUserByUsername(username){
    var queryString = "SELECT * FROM users WHERE username = ?";
    var conn = this.connection.getConnection();

    return new Promise(function(resolve, reject) {
      conn.query(queryString,[username], function(err, rows, fields){
        if (err) {
          reject(err);
        }else {
          resolve({rows: rows});
        }
      });
    });
  }
}

module.exports = UserMysqlDao;