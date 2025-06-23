'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number !';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displyMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = 'No Number!';
    displyMessage('No Number!');

    // When player is win
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = 'Correct Number !';
    displyMessage('Correct Number !');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent = guess > secretNumber ? 'Too High !!!' : 'Too Low !!!';
      displyMessage(guess > secretNumber ? 'Too High !!!' : 'Too Low !!!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = ':( You lost the game!';
      displyMessage(':( You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // When guess is too High
  /*
   else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High !!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ':( You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too Low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low !!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ':( You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }*/
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //document.querySelector('.message').textContent = 'Start guessing...';
  displyMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
