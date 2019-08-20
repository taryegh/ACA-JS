"use strict";

// printing odd numbers
function printOdds(n) {
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) continue;
    console.log(i);
  }
}
printOdds(10);