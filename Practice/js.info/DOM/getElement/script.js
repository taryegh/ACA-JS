'use strict';

// How to find?
// The table with id="age-table".
// All label elements inside that table (there should be 3 of them).
// The first td in that table (with the word “Age”).
// The form with the name search.
// The first input in that form.
// The last input in that form.



// 1. Table with id: age-table
let table = document.getElementById('age-table');
console.log(table);



// 2. All label elements inside that table
table.getElementsByTagName('label');
// or
document.querySelectorAll('#age-label label');



// 3. he first td in that table (with the word “Age”).
table.getElementsByTagName('td')[0]
// or
table.querySelector('td')



// 4. The form with the name search
let form = document.getElementsByName('search')[0]
// or, form specifically
document.querySelector('form[name="search"]')



// 5. The first input in that form.
form.getElementsByTagName('input')[0]
// or
form.querySelector('input')



// 6. The last input in that form.
let inputs = form.querySelectorAll('input')
let lInput = inputs[inputs.length - 1];
