'use strict'

// 1.
console.log('101' == 101); // true
console.log(false == 'false'); // false
console.log(undefined == null); // true
console.log('value' === "value"); // true
console.log(111 == true); // false


// 2.
console.log(('9' + 8 + 5), 8 + 5 + '9');

// 3.
var x = true; //boolean true
var y = 45 <= 90; //boolean true
var z = 15; // truthy value
console.log(x && y && z);


// 4. 
var t = true; // boolean true
var f = false; // boolean false
var d = 12.3; // truthy falue
var n = 1; // truthy value
var z = 0; // falsy value
var u = undefined; // falsy value
console.log(u || (t === f || d + n) || z);


// 5.
console.log((true + false) > 2 + true); // 1 > 3 => false


// 6.
console.log('1' - - '1');



// 7.
// let, const - in ES6;
// var - in ES5;



// 8.
var t = true; // boolean value
var f = false; // falsy value
var d = 12.3; // truthy value
var n = 1; // truthy value
var z = 0; // falsy value
var u = undefined; // falsy value
var s = ''; // falsy value
var nn = NaN; // falsy value

console.log((!z && (n - d) || u) && !((n + s + z) && nn) || (f + t - n));
// -11.3 && true || el chi nayum => true


// 10.

for(var j = 0; j < 5; j++) {
    console.log(j);
}
console.log(j);



// 12.
var time = 0;
for(var i = 0, j = 0; i < 5 && j <4; i++, j++) {
    time++;
}
console.log(time);



// 14.
for(let i = 1; i <= 5; i++) {
    for(let j = i; j < 5; j++) {
        console.log('*');
    }
}



// 15.
let arr = [];
arr[20] = true;
console.log(arr.length);
