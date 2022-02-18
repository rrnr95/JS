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
    winningNum = 2,
    guessesLeft = 3;

// UI elements
const UIgame = document.querySelector('game'),
      UIminNum = document.querySelector('.min-num'),
      UImaxNum = document.querySelector('.max-num'),
      UIguessBtn = document.querySelector('#guess-btn'),
      UIguessInput = document.querySelector('#guess-input'),
      UImessage = document.querySelector('.message');

// Assign UI min and max
UIminNum.textContent = min;
UImaxNum.textContent = max;

UIguessBtn.addEventListener('click', function(){
  let guess = parseInt(UIguessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
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

      // Disable submit 
      UIguessBtn.disabled = true;
      
    } else{
      // Game continues
      
      // Clear input
      UIguessInput.value = '';
      // Change border color
      UIguessInput.style.borderColor = 'orange';
      // Set winning message
      setMessage(`${guess} is not correct. You have ${guessesLeft} guesses left.`, 'orange');
      
    }
  }
});

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

  
}