'use strict';


let obj = {
  name: 'Geralt',
  surname: 'of Riva',
  nick: 'White Wolf',
  gender: 'male',
  profession: 'Witcher'
}
console.log(obj);


// Cloning with for in loop
let clone1 = {};

for (let key in obj) {
  clone1[key] = obj[key];
}
clone1.girlfriend = 'Yennefer';
console.log(clone1);




// Cloning with Object.assign
let clone2 = Object.assign({}, obj);
clone2.home = 'Kaer Morhen';
console.log(clone2);




// Cloning with JSON
let objSt = JSON.stringify(obj);
let clone3 = JSON.parse(objSt);
clone3.hair = 'white';
console.log(clone3);




// Cloning with Object.getOwnPropertyDescriptors
let clone4 = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
console.log(clone4);
