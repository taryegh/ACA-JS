'use strict';

// Class Person
class Person {
  constructor(firstName, lastName, gender, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }

  get gender() {
    return this._gender;
  }

  set gender(value) {
    this._gender = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value;
  }

  toString() {
    return `First Name: ${this.firstName}, Last Name: ${this.lastName}, Gender: ${this.gender}, Age: ${this.age}`;
  }
}


const person01 = new Person('Geralt', 'of Riva', 'male', 35);
console.log(person01);


// Class Student
class Student extends Person {
  constructor(firstName, lastName, gender, age, program, year, fee) {
    super(firstName, lastName, gender, age);
    this.program = program;
    this.year = year;
    this.fee = fee;
  }

  get program() {
    return this._program;
  }

  set program(value) {
    if (!Array.isArray(value)) this._program = [value];
    this._program = value;
  }

  get year() {
    return this._year;
  }

  set year(value) {
    this._year = value;
  }

  get fee() {
    return this._fee;
  }

  set fee(value) {
    this._fee = value;
  }


  passExam(program, grade) {
    if (grade >= 50) {
      this.program.splice(this.program.indexOf(program), 1);
    }
    if (this.program.length === 0) {
      this.year += 1;
    }
  }

  toString() {
    return `Name: ${super.firstName + super.lastName},
    Gender: ${this.gender},
    Age: ${this.age},
    Program/s:  ${this.program},
    Year: ${this.year},
    Fee: ${this.fee}`;
  }
}


const student01 = new Student('Geralt', 'of Riva', 'male', 35, ['Sword practice', 'Monster hunting', 'Magic'], 1200, '300 coins');
console.log(student01);
student01.passExam('Sword practice', 60);
student01.passExam('Magic', 30);
console.log(student01.year);
student01.passExam('Monster hunting', 80);
student01.passExam('Magic', 60);
console.log(student01.year);


// Class Teacher
class Teacher extends Person {
  constructor(firstName, lastName, gender, age, program, pay) {
    super(firstName, lastName, gender, age);
    this.program = program;
    this.pay = pay;
  }

  get program() {
    return this._program;
  }

  set program(value) {
    this._program = value;
  }

  get pay() {
    return this._pay;
  }

  set pay(value) {
    this._pay = value;
  }


  toString() {
    return `Name: ${super.firstName + super.lastName},
    Gender: ${this.gender},
    Age: ${this.age},
    Program/s:  ${this.program},
    Pay: ${this.pay}`;
  }
}

const teacher01 = new Teacher('Vesimir', 'N/A', 'male', 70, 'Sword practice', 'N/A');
console.log(teacher01);
