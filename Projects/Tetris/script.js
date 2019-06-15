'use strict';

/////////////////////////////////////////
// --------- CREATING CANVAS ------------
const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');
context.scale(20, 20); // scaling everything 20x









//////////////////////////////////////
// --------- TETROMINOES ------------
function createPiece(type) {
  if (type === 'T') {
    return [
      [0, 0, 0],
      [1, 1, 1],
      [0, 1, 0],
    ];
  }
  if (type === 'O') {
    return [
      [2, 2],
      [2, 2],
    ];
  }
  if (type === 'L') {
    return [
      [0, 3, 0],
      [0, 3, 0],
      [0, 3, 3],
    ];
  }
  if (type === 'J') {
    return [
      [0, 4, 0],
      [0, 4, 0],
      [4, 4, 0],
    ];
  }
  if (type === 'I') {
    return [
      [0, 5, 0, 0],
      [0, 5, 0, 0],
      [0, 5, 0, 0],
      [0, 5, 0, 0],
    ];
  }
  if (type === 'S') {
    return [
      [0, 6, 6],
      [6, 6, 0],
      [0, 0, 0],
    ];
  }
  if (type === 'Z') {
    return [
      [7, 7, 0],
      [0, 7, 7],
      [0, 0, 0],
    ];
  }
}


const colors = [
  null,
  '#A3CB38',
  '#45aaf2',
  '#F79F1F',
  '#EE5A24',
  '#12CBC4',
  '#D980FA',
  '#B53471',
];








/////////////////////////////////
// --------- PLAYER ------------

// Player structure
const player = {
  pos: { x: 0, y: 0 },
  matrix: null,
  score: 0,
};


// Resetting Player
function playerReset() {
  const pieces = 'ILJOTSZ';

  // 1. Accessing pieces var
  player.matrix = createPiece(pieces[pieces.length * Math.random() | 0]);

  // 2. Moving piece to the top
  player.pos.y = 0;

  // 3. Centring the piece
  player.pos.x = (arena[0].length / 2 | 0) - (player.matrix[0].length / 2 | 0);

  // 4. GAME OVER - When pieces reach to the top
  if (collide(arena, player)) {
    arena.forEach(row => row.fill(0));
    player.score = 0;
    updateScore();
  }
}









///////////////////////////////////////////////////
// --------- DRAWING PIECES ON CANVAS ------------

// Drawing matrix
function drawMatrix(matrix, offset) { // offset to move the figure later
  matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        context.fillStyle = colors[value];
        context.fillRect(x + offset.x,
          y + offset.y,
          1, 1);
      }
    });
  });
}


// Drawing init function
function draw() {
  // 1. Updating canvas - clearing
  context.fillStyle = '#171f28';
  context.fillRect(0, 0, canvas.width, canvas.height);

  // 2. Calling drawMatrix()
  drawMatrix(player.matrix, player.pos);

  // 3. Drawing Arena
  drawMatrix(arena, { x: 0, y: 0 });
}


// Updating drawing process
let dropCounter = 0;
const dropInterval = 1000;
let lastTime = 0;

function update(time = 0) {
  const deltaTime = time - lastTime;
  lastTime = time;

  dropCounter += deltaTime; // deltaTime always 16.67
  if (dropCounter > dropInterval) {
    playerDrop();
  }

  draw(); // Calling draw()
  requestAnimationFrame(update);
}


// dropping a piece
function playerDrop() {
  player.pos.y++;
  if (collide(arena, player)) {
    player.pos.y--;
    merge(arena, player);
    playerReset();
    arenaSweep()
    updateScore();
  }
  dropCounter = 0;
}


// moving piece right or left
function playerMove(dir) {
  player.pos.x += dir;
  if (collide(arena, player)) {
    player.pos.x -= dir;
  }
}


// rotating piece
function rotate(matrix) {
  for (let y = 0; y < matrix.length; ++y) {
    for (let x = 0; x < y; ++x) {
      [ // like [a, b] = [b, a]
        matrix[x][y],
        matrix[y][x],
      ] = [
        matrix[y][x],
        matrix[x][y],
      ];
    }
  }

  matrix.reverse();

}


// rotating player, checking if no collision
function playerRotate() {
  const pos = player.pos.x;
  let offset = 1;
  rotate(player.matrix);
  while (collide(arena, player)) {
    player.pos.x += offset;
    offset = -(offset + (offset > 0 ? 1 : -1));
    if (offset > player.matrix[0].length) {
      rotate(player.matrix);
      player.pos.x = pos;
      return;
    }
  }
}











////////////////////////////////////////
// --------- ARENA MATRIX ------------

function createMatrix(w, h) { // width and height
  const matrix = [];
  while (h--) {
    matrix.push(new Array(w).fill(0));
  }
  return matrix;
}


// Creating arena for the 12x20 arena
const arena = createMatrix(12, 20);


// Copying figure into the arena
function merge(arena, player) {
  player.matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        arena[y + player.pos.y][x + player.pos.x] = value;
      }
    });
  });
}


// Detecting collision
function collide(arena, player) {
  const [m, p] = [player.matrix, player.pos];

  for (let y = 0; y < m.length; ++y) {
    for (let x = 0; x < m[y].length; ++x) {
      if (m[y][x] !== 0 &&
        (arena[y + p.y] &&
          arena[y + p.y][x + p.x]) !== 0) {
        return true;
      }
    }
  }
  return false;
}


// Sweeping Arena
function arenaSweep() {
  
  let rowCount = 1;
  
  outer: for (let y = arena.length - 1; y > 0; --y) {
    for (let x = 0; x < arena[y].length; ++x) {
      if (arena[y][x] === 0) {
        continue outer;
      }
    }
    const row = arena.splice(y, 1)[0].fill(0);
    arena.unshift(row);
    ++y;

    player.score += rowCount * 10;
    rowCount *= 2;
  }
}










/////////////////////////////////
// --------- UPDATING SCORES ------------
function updateScore() {
  document.getElementById('score').innerText = player.score;
}







//////////////////////////////////////////////////////
// --------- KEYBOARD AND MOUSE CONTROLS ------------

document.addEventListener('keydown', event => {
  // left
  if (event.which === 37) {
    playerMove(-1);
  }

  // right
  if (event.which === 39) {
    playerMove(+1);
  }

  // down
  if (event.which === 40) {
    playerDrop();
  }

  // up
  if (event.which === 38) {
    playerRotate();
  }
});


// init
start.addEventListener('click', function() {
  document.getElementById('start-container').style.display = 'none';
  document.getElementById('score-container').style.display = 'block';

  init();

});












// INIT

function init() {
  playerReset();
  updateScore();
  update();
}




