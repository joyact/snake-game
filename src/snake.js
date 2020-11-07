import { getInputDirection } from './input.js';

export const SNAKE_SPEED = 1; // snake's move per sec
const snakeBody = [{ x: 11, y: 11 }];

export function update() {
  const inputDirection = getInputDirection();

  // from the second-to-last element in the snake to head
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] }; // shifting. move forward
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y; // negative Y, move up. positive Y, move down.
}

export function draw(gameBoard) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add('snake');
    gameBoard.appendChild(snakeElement);
  });
}
