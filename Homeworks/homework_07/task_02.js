'use strict';


// Create an Account class. Account should have: id, name, balance.
// It should have setters for name and balance, and getters for all fields.
// It should have a method: credit(amount), which should add amount to balance and return the updated balance.
// It should have a method: debit(amount), which should subtract the amount from the balance, if amount is less than the balance, otherwise output “Amount exceeded balance.”
// It should have a method: transferTo(anotherAccount, amount): which should subtract the amount from the account balance and add it to the given anotherAccount and return the updated balance, if amount is less than the balance, otherwise output “Amount exceeded balance.”
// It should have a static method: identifyAccounts(accountFirst, accountSecond) which gets two accounts and identifies if they are the same or not comparing all fields.
// It should have toString method.


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


  static identifyAccounts(first, second) {
		for(let key in first) {
			if(first[key] != second[key]) {
				return `${first.name} and ${second.name} are not identical.`;
			}
		}
		return `${first.name} and ${second.name} are identical.`;
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
    this._balance -= amount;
    anotherAccount += amount
    return anotherAccount < this._balance ? anotherAccount : 'Amount exceeded balance.';
  }

}

let acc01 = new Account(1, 'johnsmithacc', 100);
console.log(acc01);
