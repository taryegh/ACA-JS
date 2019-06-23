'use strict';


// 1. Write the code using if..else which would correspond to the following switch:
/* 
switch (browser) {
  case 'Edge':
    alert("You've got the Edge!");
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert('Okay we support these browsers too');
    break;

  default:
    alert('We hope that this page looks ok!');
}
*/

function f1(st) {
  if (st === 'Edge') {
    console.log("You've got the Edge!");
  } else if (st === 'Chrome' ||
             st === 'Firefox' ||
             st === 'Safari' ||
             st === 'Opera') {
               console.log('Okay we support these browsers too');
  } else {
      console.log('We hope that this page looks ok!');
  }
}
//f1('Chrome');




// 2. Rewrite the code below using a single switch statement:


/* let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
} */

function f2(st) {
  switch (st) {
    case 0:
      console.log(0);
      break;
    case 1:
      console.log(1);
      break;
    case 2 || 3:
      console.log('2,3');
      break;
    default:
      break;
  }
}
f2(2);


