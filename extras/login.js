// Write the code which asks for a login with prompt.

/* If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled.”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled.” */


function checkPass() {
  let l = prompt('Who\'s there?');
  if (l === 'Admin' || l === 'admin') {
    let p = prompt('Enter pass');
    if (p === 'TheMaster') {
      return 'Welcome';
    } else if (p === '' || p === null) {
      return 'Canceled';
    } else {
      return 'Wrong password'
    }
  }
  else if (l === '' || l === null) {
    return 'Canceled';
  } else {
    return 'I don’t know you'
  }
}

console.log(checkPass());
