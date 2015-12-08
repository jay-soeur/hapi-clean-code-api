"use strict";
var UserToken = require('../../entity/UserToken');

class UserTokenDataMapper {
  convert(source){
    var data = null;
    var userToken = null;
    if (source.length > 0) {
      data = source[0];
    }

    if (data != null) {
      userToken = new UserToken();
      userToken.token = data.token;
      userToken.userId = data.user_id;
    }

    return userToken;
  }
}

module.exports = UserTokenDataMapper;