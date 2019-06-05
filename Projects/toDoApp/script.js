/* eslint-disable consistent-return */
/* eslint-disable prefer-const */
/* eslint-disable no-multiple-empty-lines */

'use strict';

// --------- GENERAL VARIABLES ---------

let uL = document.getElementById('uList');
let addButton = document.getElementById('add');
let li;








// --------- FUNCTIONS ---------
function addItem() {
  let input = document.getElementById('inputText');
  let item = input.value;
  let textNode = document.createTextNode(item);

  if (item === '') return false;

  li = document.createElement('li');
  li.setAttribute('id', 'complexList');




  // Checkbox
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.setAttribute('id', 'check');


  // Label
  let label = document.createElement('label');


  // Button
  let button = document.createElement('button');
  button.type = 'button';
  button.textContent = 'X';
  button.setAttribute('id', 'rem');


  uL.appendChild(li);
  label.appendChild(textNode);
  uL.insertBefore(li, uL.childNodes[0]);

  // li
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(button);

  input.value = '';
}







// Removing dynamically added elements
document.addEventListener('click', function (e) {
  if (!e.target || e.target.id !== 'rem') {
    return;
  }
  const parent = e.target.parentElement;
  if (!parent) {
    return;
  }
  const parentOfParent = parent.parentElement;
  parent.removeChild(e.target);
  if (!!parentOfParent) {
    parentOfParent.removeChild(parent);
  }
});




// --------- EVENT LISTENERS ---------

// Clicking input button or hitting Enter key
addButton.addEventListener('click', addItem);
document.addEventListener('keypress', (event) => {
  if (event.which === 13) {
    addItem();
  }
});








