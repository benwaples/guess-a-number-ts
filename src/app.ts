// import functions and grab DOM elements
import { compareNumbers, getRandomNumber } from './utils.js'
const guessButton: HTMLButtonElement = document.querySelector('.submit')
const restartButton: HTMLButtonElement = document.querySelector('.restart')
restartButton.style.display = 'none'
// initialize state
let computerGuess = getRandomNumber()
let remainingGuesses = 4

// set event listeners to update state and DOM
guessButton.addEventListener('click', () => {
  const guessInput: number = document.querySelector('input').valueAsNumber;
  const responseDisplay: HTMLParagraphElement = document.querySelector('.response')
  
  const comparedNumbers = compareNumbers(guessInput, computerGuess)

  console.log(guessInput, computerGuess)

  if(comparedNumbers === 1) {
    remainingGuesses --;
    responseDisplay.textContent = `Your Guess was too high, you have ${remainingGuesses} guesses left`
  }
  if(comparedNumbers === -1) {
    remainingGuesses --;
    responseDisplay.textContent = `Your Guess was too low, you have ${remainingGuesses} guesses left`
  }
  if(!comparedNumbers) {
    responseDisplay.textContent = `Boom!! You guessed correctly with ${remainingGuesses} remaining`
    resetGame(remainingGuesses, computerGuess)
  }
  if(!remainingGuesses) {
    responseDisplay.textContent = "You Lose"
    disableGame(guessButton)
  }
})

function resetGame(guessesRemain, computerGuess) {
  guessesRemain = 4;
  computerGuess = getRandomNumber();
}

function disableGame(button) {
  button.disabled = true;
  restartButton.style.display = 'block'
}

restartButton.addEventListener('click', () => {
  resetGame(remainingGuesses, computerGuess)

}) 



