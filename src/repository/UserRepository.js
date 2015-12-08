"use strict";

class UserRepository
{
  constructor(userDao, userDataMapper) {
    this.userDao = userDao;
    this.userDataMapper = userDataMapper;
  }

  findById(user) {
    var delegate = this.userDataMapper.convert;
    return (this.userDao.getUserById(id)).then(delegate);
  }

  findByUsername(user) {
    var delegate = this.userDataMapper.convert;
    return (this.userDao.getUserByUsername(user.getUsername())).then(delegate)
  }

  delete(user) {

  }

  save(user) {

  }

  update(user) {

  }
}

module.exports = UserRepository;