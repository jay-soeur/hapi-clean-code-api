"use strict";

class User {
  constructor() {
    this.name = null;
    this.email = null;
    this.uid = null;
    this.password = null;
  }

  setPassword(password) {
    this.password = password;
  }

  getPassword() {
    return this.password;
  }

  setUsername(name) {
    this.name = name;
  }

  getUsername() {
    return this.name;
  }

  setEmail(email) {
    this.email = email;
  }

  getEmail(){
    return this.email;
  }

  setUid(uid) {

    if (uid != null && uid > 0) {
      this.uid = uid;
      return this;
    }

    throw new Error('Uid is invalid must be > 0');
  }

  getUid(){
    return this.uid;
  }
}

module.exports = User;