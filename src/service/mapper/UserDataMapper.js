"use strict";
var User = require('../../entity/User');

class UserDataMapper {
  convert(source){
    var userCollection = [];
    var collectionSize = source.rows.length;

    for(var i = 0; i < collectionSize; i++) {
      var data = source.rows[i];

      var user = new User();
      user.setUid(data.id);
      user.setUsername(data.username);
      user.setEmail(data.email);
      user.setPassword(data.password);
      userCollection.push(user);
    }

    return userCollection;
  }
}

module.exports = UserDataMapper;