"use strict";

class Product{
  constructor() {
    this.name = null;
    this.description = null;
    this.createdDate = null;
    this.price = null;
  }

  getPrice() {
    return this.price;
  }

  setPrice(price) {
    this.price = price;
  }
  getName(){
    return this.name;
  }

  setName(name){
    this.name = name;
  }

  getDescription() {
    return this.description;
  }

  setDescription(description) {
    this.description = description;
  }

  getCreatedDate() {
    return this.createdDate;
  }

  setCreatedDate(createdDate) {
    this.createdDate = createdDate;
  }
}

module.exports = Product;