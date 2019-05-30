'use strict';



let obj = {
  name: 'Jack',
  surname: 'Sheppard',
  printName: function() {
    this.name = 'John';
  }
}





obj.printName();
console.log(obj.name); // Jock


let obj2 = {
  name: 'John',
  surname: 'Smith',
  cName() {
    console.log(this.name);
    let a = () => console.log(this.surname);
    a();
  }
}
obj2.cName();






const car = {
  model: 'Fiesta',
  manufacturer: 'Ford',
  fullName: () => {
    return `${this.manufacturer} ${this.model}`
  }
}
console.log(car.fullName());
