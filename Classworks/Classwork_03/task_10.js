'use strict';


// 10.	Given a string and symbols. Change first symbol by the second one in the string.
function changeSym(str, s1, s2) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === s1) {
      newStr += s2;
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}
console.log(changeSym("The results are not recorded yet", "t", "w"));
