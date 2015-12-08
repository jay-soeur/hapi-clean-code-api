"use strict";

var Controller = require('./Controller');
var User = require('../entity/User');
var sha256 = require('crypto-js/sha256');
var UserToken = require('../entity/UserToken');

class AuthenticationController extends Controller {

  constructor(userRepository,userTokenRepository, base64ServiceInterface) {
    super(userTokenRepository, base64ServiceInterface);
    this.userRepository = userRepository;
    this.userTokenRepository = userTokenRepository;
  }

  login(req, res) {
    try {
      var username = req.payload.username;
      var password = req.payload.password;

      var requestUser = new User();
      requestUser.setUsername(username);
      requestUser.setPassword(password);

      var promise = this.userRepository.findByUsername(requestUser);
      var self = this;
      var base64service = super.base64Service;
      var token = null;
      var user = null;

      promise.then(function (userCollection) {
        if (userCollection.length > 0) {
          user = userCollection[0];
          if (requestUser.getPassword() === base64service.decode(user.getPassword())) {
            var date = new Date();
            return token = 'pk_' +  sha256(user.getEmail() + user.getUsername() + user.getUid()+""+date.toUTCString());
          }
        }

        var response = {};
        response.statusMessage = "Authentication failed for " + username;
        return res(response).code(401);

      }).then(function() {
        var userToken = new UserToken();

        userToken.token = token;
        userToken.userId = user.getUid();
        userToken.keepAlive = false;

        var promise = self.userTokenRepository.save(userToken);

        promise.then(function(status){
          if (status) {
            console.log("authentication Token created");
            return res({token: token});
          }
        });
      });
    } catch (err) {
      console.log(err);
    }
  }

}

module.exports = AuthenticationController;
