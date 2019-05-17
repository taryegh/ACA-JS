'use strict'


// 6. Declare variable. Initialize it with the value, which shows temperature in degrees Celsius. Print its equivalent in degrees Fahrenheit. To convert temperatures in degrees Celsius to Fahrenheit use the following formula: °C * 1.8 +32 = °F.

function showFahr(c) {
    return `${c} Celsius = ${c * 1.8 + 32} Fahrenheit`;
}

console.log(showFahr(-40));
console.log(showFahr(0));
console.log(showFahr(50));
