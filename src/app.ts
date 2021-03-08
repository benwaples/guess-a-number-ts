// import functions and grab DOM elements
import { compareNumbers, getRandomNumber } from './utils.js'
const guessButton = document.querySelector('button')

// initialize state
let computerGuess = getRandomNumber()

// set event listeners to update state and DOM
guessButton.addEventListener('click', () => {
  const guessInput: number = document.querySelector('input').valueAsNumber;
  console.log(guessInput)
  const responseDisplay: HTMLParagraphElement = document.querySelector('response')

  const comparedNumbers = compareNumbers(guessInput, computerGuess)




})
