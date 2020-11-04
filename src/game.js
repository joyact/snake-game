import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js';

let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board');

function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);
// set up game loop (constantly update the render)

function update() {
  updateSnake();
}

function draw() {
  gameBoard.innerHTML = ''; // reset preious piece
  drawSnake(gameBoard);
}
