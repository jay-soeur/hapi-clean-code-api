"use strict";

class UserTokenRepository
{
  constructor(userTokenDao, userTokenDataMapper) {
    this._userTokenDao = userTokenDao;
    this._userTokenDataMapper = userTokenDataMapper;
  }

  findByToken(userToken) {
    var token = userToken.token;
    var delegate = this._userTokenDataMapper.convert;
    return this._userTokenDao.getUserTokenByToken(token).then(delegate);
  }

  save(userToken) {
    var userId = userToken.userId;
    var token = userToken.token;
    var keepAlive = userToken.keepAlive;

    return this._userTokenDao.addUserTokenToUser(userId, token, keepAlive);
  }
}

module.exports = UserTokenRepository;