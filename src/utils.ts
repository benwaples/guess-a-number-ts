export function compareNumbers(guess: number, correctNumber: number): number {
  if(guess > correctNumber) return 1;
  if(guess < correctNumber) return 1;
  return 0;
}

export function getRandomNumber(): number {
  return Math.ceil(Math.random() * 20)
}