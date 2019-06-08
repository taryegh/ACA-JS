'use strict';

// GENERAL VARIABLES

const container = document.getElementById('imgContainer');
const images = ['./src/img1.jpg', './src/img2.jpg', './src/img3.jpg', './src/img4.jpg'];
let counter = 0;
let interval;

// Buttons
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const play = document.getElementById('play');
const pause = document.getElementById('pause');





// EVENT LISTENERS
next.addEventListener('click', nextImg);
prev.addEventListener('click', prevImg);
play.addEventListener('click', playImg);
pause.addEventListener('click', pauseImg);








// FUNCTIONS

// Next Image
function nextImg() {
  if (counter === images.length - 1) {
    counter = 0;
  } else {
    counter++;
  }

  container.style.backgroundImage = `url(${images[counter]})`;
}




// Previous Image
function prevImg() {
  if (counter === 0) {
    counter = images.length - 1;
  } else {
    --counter;
  }

  container.style.backgroundImage = `url(${images[counter]})`;
}




// Play
function playImg() {
  init();
}

// Pause
function pauseImg() {
  clearInterval(interval);
}




// INITIATION
function init() {
  interval = setInterval(nextImg, 2000);
  return interval;
}

init();
