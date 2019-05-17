'use strict'


// 13.	Declare three variables. Two of them are the bounds of a range. Print “In bounds”, if the third number is in the range, otherwise print “Out of bounds”.

function defRange(st, end, el) {
    return el >= st && el <= end ? 'In bounds' : 'Out of bounds';
}

console.log(defRange(-12, 9, 13));
console.log(defRange(0, 15, 8));
console.log(defRange(10, 19, 9));
