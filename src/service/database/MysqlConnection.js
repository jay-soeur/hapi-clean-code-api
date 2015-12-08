"use strict";

var mysql = require('mysql');

class MysqlConnection {
  constructor(host, user, password, database) {

    this.connection = mysql.createConnection({
      host: host,
      user: user,
      password: password,
      database: database
    });
  }

  getConnection() {
    return this.connection;
  }
}

module.exports = MysqlConnection;