'use strict';

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
