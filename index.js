const dodger = document.getElementById('dodger');
const gameWidth = document.getElementById('game').clientWidth;

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);

  // if (left + dodger.clientWidth < gameWidth) {
  dodger.style.left = `${left + 1}px`;
  // }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    moveDodgerLeft();
  }
  if (e.key === 'ArrowRight') {
    moveDodgerRight();
  }
});
