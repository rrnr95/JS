/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = generateWinningNum(min, max),
    guessesLeft = 3;

// UI elements
const UIgame = document.querySelector('#game'),
      UIminNum = document.querySelector('.min-num'),
      UImaxNum = document.querySelector('.max-num'),
      UIguessBtn = document.querySelector('#guess-btn'),
      UIguessInput = document.querySelector('#guess-input'),
      UImessage = document.querySelector('.message');

// Assign UI min and max
UIminNum.textContent = min;
UImaxNum.textContent = max;

// Listen for guess
UIguessBtn.addEventListener('click', function(){
  let guess = parseInt(UIguessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    return;
  } 

  // Check if won
  if (guess === winningNum) {
    // Game over - won
    gameOver(true, `${winningNum} is correct! You win!`);

  } else {
    // Wrong number
    guessesLeft -= 1;

    if(guessesLeft === 0){
      // Game over - lost
      
      gameOver(false, `Game over, you lost. The correct number was ${winningNum}.`);
      
    } else{
      // Game continues
      
      // Clear input
      UIguessInput.value = '';
      // Change border color
      UIguessInput.style.borderColor = 'orange';
      // Set message
      if(guess < winningNum) {
        setMessage(`${guess} is not correct. Try aiming higher You have ${guessesLeft} guesses left.`, 'orange');
      } else {
        setMessage(`${guess} is not correct. Try aiming lower You have ${guessesLeft} guesses left.`, 'orange');
      }
    }
  }
});

// Play again event Listener
UIgame.addEventListener('mousedown', function(e) {
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});

// Generate a random integer between min and max
function generateWinningNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function setMessage(msg, color) {
  UImessage.style.color = color;
  UImessage.textContent = msg;
}

function gameOver(won, msg) {

  won === true ? color = 'green' : color = 'red';
  
  // Disable input
  UIguessInput.disabled = true;
  // Change border color
  UIguessInput.style.borderColor = color;
  // Set message
  setMessage(msg, color);

  // Play again?
  UIguessBtn.value = 'Play Again';
  UIguessBtn.className += 'play-again';
}