"use strict";

class Base64Service {
  constructor() {
  }

  decode(string) {

    var s = new Buffer(string, 'base64');
    return s.toString('utf8');
  }
}


module.exports  = Base64Service;