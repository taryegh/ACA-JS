'use strict';


// --------- Arrows revisited ---------

// using arrow function to iterate inside an object method

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach(
      el => console.log(this.title + ': ' + el)
    );
  }
};

group.showList();
// Our Group: John
// Our Group: Pete
// Our Group: Alice


