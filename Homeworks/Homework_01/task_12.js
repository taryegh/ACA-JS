"use strict";

// 12. Write a program which will compute the area of a rectangular or a triangle after prompting the user to type the name of the figure name. Also check that entered numbers are positive. For the triangle entered numbers are height and and base.

function calcArea() {
  const type = prompt("Enter type");

  if (type === "triangle") {
    const height = +prompt("Enter height");
    const base = +prompt("Enter base");
    if (height <= 0 || base <= 0) return "wrong numbers";
    return `Area of triangle is ${0.5 * height * base}`;
  } else if (type === "rectangle") {
    const a = +prompt("Enter a side");
    const b = +prompt("Enter b side");
    if (a <= 0 || b <= 0) return "wrong numbers";
    return `Area of rectangle is ${a * b}`;
  } else {
    return "wrong type";
  }
}

console.log(calcArea());
