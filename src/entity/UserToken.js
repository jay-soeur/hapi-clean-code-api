"use strict";

class UserToken {
  constructor() {
    this._token = null;
    this._expire = null;
    this._keepAlive = null;
    this._userId = null;
  }

  get token() {
    return this._token;
  }

  set token(token) {
    this._token = token;
  }

  get userId() {
    return this._userId;
  }

  set userId(userId) {
    this._userId = userId;
  }
}

module.exports = UserToken;