'use strict';

// --------- GENERAL VARIABLES ---------

const addButton = document.getElementById('add');







// --------- FUNCTIONS ---------
function addItem() {
  const input = document.getElementById('inputText');
  const item = input.value;
  const text = document.createTextNode(item);
  
  if (item === '') return false;


  // ul
  const uL = document.getElementById('uList');
  

  // li
  const li = document.createElement('li');
  li.setAttribute('id', 'complexList');


  // checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.setAttribute('id', 'check');


  // label
  const label = document.createElement('label');


  // Remove Button
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = 'X';
  button.setAttribute('id', 'rem');


  // Appending Children
  uL.appendChild(li);
  li.appendChild(checkbox);
  li.appendChild(label);
  label.appendChild(text);
  li.appendChild(button);
  uL.insertBefore(li, uL.childNodes[0]);


  // Removing the input field
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

  if (parentOfParent) {
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
