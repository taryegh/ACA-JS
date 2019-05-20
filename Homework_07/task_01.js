'use strict'



// 1.1 Create an Author class.
// Author should have: name, email, gender.
// It should have appropriate getters and setters. It should have a toString method.

class Author {
	constructor(name, email, gender) {
		this.name = name;
		this.email = email;
		this.gender = gender;
	}

	// name
	get name() {
		return this._name;
	}

	set name(val) {
		if (val.length < 2) {
			console.log('Name is too short. Enter name longer');
			return;
		}
		this._name = val;
	}

	// email
	get email() {
		return this._email;
	}

	set email(val) {
		if (val.includes('@',) && val.includes('.com')) {
			this._email = val;
		} else {
			console.log('Invalid email');
			return;
		}
	}

	// gender
	get gender() {
		return this._gender;
	}

	set gender(val) {
		if (val === 'male' || val === 'female') {
			this._gender = val;
		} else {
			console.log('Please enter male or female');
			return;
		}
	}

	toString() {
		return this.email === undefined ? 'N/A' : this.email.toString();
	}
}

let author01 = new Author('John Hammond', 'jhammond@gmail.com', 'male');
console.log(author01);
console.log(author01.toString());





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

	// title
	get title() {
		return this._title;
	}

	set title(val) {
		if (typeof val === 'string') {
			this._title = val;
		} else {
			console.log('Enter valid title');
			return;
		}
	}

	// author
	get authorPos() {
		return `Professor ${this.author}`;
	}

	// price
	get price() {
		return this._price;
	}

	set price(val) {
		if (typeof val === 'number') {
			this._price = val;
		} else {
			console.log('Enter numeric value');
			return
		}
	}

	// quantity
	get quantity() {
		return this._quantity;
	}

	set quantity(val) {
		if (typeof val !== 'number') {
			console.log('Enter numeric value');
			return
		}
		this._quantity = val;
	}


	getProfit() {
		return this.price * this.quantity;
	}

	toString() {
		return this.quantity.toString();
	}
}

let book01 = new Book('Jurassic Park', 'John Hammond', 300, 60);
console.log(book01);
console.log(book01.authorPos);
console.log(book01.getProfit());
