'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// *********** declaring the secret number ⬇️ ***********
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// *********** hadling check button ⬇️ ***********
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // ⚠️⚠️⚠️⚠️⚠️ Something wrong here!!
  if (!guess) {
    /* document.querySelector('.message').textContent = '⛔ No number entered!'; */
    displayMessage('⛔ No number entered!');
  }

  // *********** when player wins ⬇️ ***********
  else if (guess === secretNumber) {
    /*document.querySelector('.message').textContent = '🎉 Correct number!';*/
    displayMessage('🎉 Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  }
  // *********** Bigger than secret number ⬇️ ***********
  else if (guess !== secretNumber) {
    if (score > 1) {
      /* document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!'; */

      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      /* document.querySelector('.message').textContent = '😒 Game Over'; */
      displayMessage('😒 Game Over');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#751717';
    }
  }

  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
  // *********** smaller than secret number ⬇️ ***********
  /*  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😒 Game Over';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#751717';
    }
  } */
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
 /*  document.querySelector('.message').textContent = 'Start guessing...'; */
 
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
