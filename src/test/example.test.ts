// IMPORT MODULES under test here:
export {};
import { compareNumbers } from '../utils.js'
const test = QUnit.test;

test('compareNumbers() if guess is too high', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(14, 10);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
