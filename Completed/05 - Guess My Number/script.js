'use strict';
//-| DOM = Document Object Model / A connection point for access by javaScript;
// > DOM is part of WEB APIs Application Programming Interface                ;

// document.querySelector('.message');
/*
document.querySelector('.message').textContent = '🤣 Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.message').textContent);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
const displayMessage = function (dM) {
  document.querySelector('.message').textContent = dM;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //-| When there is no input;
  if (!guess) {
    dM('🛑 Not a Number!');
    // document.querySelector('.message').textContent = '🛑 Not a Number!';

    //-|  When player wins;
  } else if (guess === secretNumber) {
    dM('🤣 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //-| High Score;
    if (score > highScore) {
      dM("🤣 Correct! That's New High Score!");
      document.querySelector('.highscore').textContent = score;
    }
  }

  //-| When guess is different;
  if (guess !== secretNumber) {
    if (score > 1) {
      dM(guess > secretNumber ? '⛰️ Too High!' : '🧊 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      dM('🤡 LOOSER');
      document.querySelector('body').style.backgroundColor = '#d44';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//-| Reset / Reload;
document.querySelector('.again').addEventListener('click', function () {
  dM("Let's Try Again!");
  score = '20';
  document.querySelector('.guess').value - ' ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
});
