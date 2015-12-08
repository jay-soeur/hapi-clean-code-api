"use strict";

var UserToken = require('../entity/UserToken');

class Controller {
  constructor(userTokenRepository, base64ServiceInterface) {
    this._base64Service = base64ServiceInterface;
    this._userTokenRepository = userTokenRepository;
  }

  authenticate(headers, res)
  {
    if (headers.authorization) {
      var tokens = headers.authorization.split(' ');
      var token = null;

      if (tokens.length > 1) {
        token = tokens[1];
      }

      var str = this._base64Service.decode(token);

      var tokensDecoded = str.split(':');
      var username = tokensDecoded[0];

      var userToken = new UserToken();
      userToken.token = username;

      var promise = this._userTokenRepository.findByToken(userToken);

      return promise.then(function (data) {
        if (data) {
          return true;
        }

        var response = {};
        response.statusMessage = "Not Authorised.";
        return res(response).code(401);

      })
    }

    return new Promise(function(){
      var response = {};
      response.statusMessage = "Not Authorised.";
      res(response).code(401);
    })

  }

  get base64Service(){
    return this._base64Service;
  }

}

module.exports = Controller;