"use strict";
var Promise = require('promise');

class UserTokenMysqlDao {
  constructor(connection) {
    this.connection = connection;
  }

  addUserTokenToUser(userId, token, keepAlive) {
    var queryString = "INSERT user_tokens(user_id, token, expire, keep_alive) VALUES(?,?, NOW() + INTERVAL 7 DAY, ?)";
    var conn = this.connection.getConnection();
    return new Promise(function(resolve, reject) {
      conn.query(queryString,[userId, token, keepAlive], function(err, rows, fields){
        if (err) {
          console.log(err);
          reject(err);
        }else {
          resolve(rows.affectedRows);
        }
      });
    });
  }

  getUserTokenByToken(token) {
    var queryString = "SELECT user_id, token, expire, keep_alive FROM user_tokens where token = ?";
    var conn = this.connection.getConnection();
    return new Promise(function(resolve, reject) {
      conn.query(queryString,[token], function(err, rows, fields){
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

module.exports = UserTokenMysqlDao;