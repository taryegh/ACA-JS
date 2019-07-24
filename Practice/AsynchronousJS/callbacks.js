"use strict";


// ----------------------------------
// ----------- CALLBACKS ------------

const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" }
];

function getPosts() {
  setTimeout(()=> {
    let output = '';
    posts.forEach((post, index)=> {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML= output;
  }, 1000)
}

let date = new Date();
console.log(date.getSeconds());


function createPost(post, callback) {
  setTimeout(()=> {
    posts.push(post);
    callback();
    
    let date2 = new Date();
    console.log(date2.getSeconds());

  }, 2000);
}


createPost({title: 'Post Three', body: 'This is post three'}, getPosts);

