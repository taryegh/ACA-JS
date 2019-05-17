'use strict'


// 12. Write a program which will compute the area of a rectangular or a triangle after prompting the user to type the name of the figure name. Also check that entered numbers are positive. For the triangle entered numbers are height and and base.
function CalcArea(type, height, base) {
    type = prompt();

    if (height <= 0 || base <= 0) {
        return 'Please enter only positives';
    }

    if (type === 'triangle') {
        return `Area of triangle is ${(height * base * 0.5)}`;
    } else if (type = 'rectangle') {
        return `Area of rectangle is ${(height * base)}`;
    } else {
        return 'please enter either rectangle or triangle';
    }
}

console.log(CalcArea('triangle', 6, 7));
console.log(CalcArea('rectangle', 8, 5));
console.log(CalcArea('triangle', 0, 5));
