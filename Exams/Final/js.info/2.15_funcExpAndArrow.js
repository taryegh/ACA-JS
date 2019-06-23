'use strict';


// 1. Replace Function Expressions with arrow functions in the code:

/* function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function () { alert("You agreed."); },
  function () { alert("You canceled the execution."); }
); */



function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

/* ask(
  'Do you agree?',
  () => alert('Agreed'),
  () => alert('Canceled')
); */
