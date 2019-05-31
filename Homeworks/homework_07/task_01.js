'use strict';


// 1.1 Create an Author class.
// Author should have: name, email, gender.
// It should have appropriate getters and setters. It should have a toString method.

class Author {
  constructor(name, email, gender) {
    this.name = name;
    this.email = email;
    this.gender = gender;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }

  get gender() {
    return this._gender;
  }

  set gender(value) {
    this._gender = value;
  }


  toString() {
    return `name: ${this.name}, eMail: ${this.email}, gender: ${this.gender}`;
  }
}

const author01 = new Author('John Hammond', 'jhammond@jurassic.com', 'male');
console.log(author01);


// 1.2 Create Book class.
// Book should have: title, author(Author), price, quantity.
// It should have appropriate getters and setters.
// It should have a method: getProfit(), which calculates the profit from the book based on the price and quantity.
// It should have a toString method.

class Book {
  constructor(title, author, price, quantity) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.quantity = quantity;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    this._author = value;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  get quantity() {
    return this._quantity;
  }

  set quantity(value) {
    this._quantity = value;
  }


  getProfit() {
    return `Profit: $${this.price * this.quantity}`;
  }

  toString() {
    return `Title: ${this.title}, Author: ${this.author}, Price: ${this.price}, Quantity: ${this.quantity}`;
  }
}

const book01 = new Book('Dead Mountaineer\'s Hotel', 'Arkady and Boris Strugatsky', 10, 200000);
console.log(book01);
