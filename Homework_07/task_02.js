/* eslint-disable no-underscore-dangle */
/* eslint-disable strict */

'use strict'

class Account {
  constructor(id, name, balance) {
    this._id = id;
    this.x = name;
    this.balance = balance;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get balance() {
    return this._balance;
  }

  set balance(value) {
    this._balance = value;
  }

  // methods
  credit(amount) {
    if (amount <= 0 || isNan(amount)) {
      throw new Error('Invalid credit amount. Enter positive number');
    }
    this._balance += amount;
    return this._balance;
  }

  debit(amount) {
    if (amount > this._balance) return 'Amount exceeded balance.';
    this._balance -= amount;
    return amount;
  }

  transferTo(anotherAccount, amount) {
    anotherAccount.credit
  }

}

let x = new Account(1, 2, 3);
console.log(x);
