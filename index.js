// Your code here
var dodger = document.getElementById('dodger');

function moveDodgerLeft() {  // create the function to be able to move to left
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerRight() { // create the function to be able to move to right
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = `${left + 1}px`
  }
}

document.addEventListener('keydown', function(e) { // add event listener which will carry out moveDodgerLeft
  if (e.which === "ArrowLeft") {
    moveDodgerLeft()
  }
})

document.addEventListener('keydown', function(e) {// add event listener which will carry out moveDodgerRight
  if (e.which === "ArrowRight") {
    moveDodgerRight()
  }
})