"us strict";

function say(phrase) {
  alert(this.name + ": " + phrase);
}

let user = { name: "John" };

// user becomes this, and "Hello" becomes the first argument
say.call(user, "Hello"); // John: Hello
