'use strict';


// 1. Will alert be shown?
if ("0") {
  console.log( 'Hello' ); // yes
}



// 2. Using if..else, write the code which gets a number via prompt and then shows in alert:
/* 
1, if the value is greater than zero,
-1, if less than zero,
0, if equals zero.
In this task we assume that the input is always a number. */

function showAlert() {
  let pr = +prompt('Enter num');
  if (pr > 0) {
    console.log(1);
  } else if (pr < 0) {
    console.log(-1);
  } else if (pr === 0) {
    console.log(0);
  }
}
//showAlert();

function showAlertT() {
  let pr = +prompt('Enter num');
  console.log(pr > 0 ? 1 : pr < 0 ? -1 : pr === 0 ? 0 : null);
}
//showAlertT();



//3. Rewrite if..else using multiple ternary operators '?'. For readability, it’s recommended to split the code into multiple lines.

/* 
  let message;
  
  if (login == 'Employee') {
    message = 'Hello';
  } else if (login == 'Director') {
    message = 'Greetings';
  } else if (login == '') {
    message = 'No login';
  } else {
    message = '';
  }
*/

function log() {
  let login = prompt('Enter login');
  let message;

  message = login === 'Employee' ? 'Hello' :
            login === 'Director' ? 'Greetings' :
            login === '' ? 'No login' : '';
  console.log(message);
}
log();