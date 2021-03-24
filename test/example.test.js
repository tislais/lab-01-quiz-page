// IMPORT MODULES under test here:
// import { example } from '../example.js';
import {
    isYes
} from '../utils.js';

const test = QUnit.test;

test('a function that returns true when the user inputs an answer that starts with Y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = isYes('yeah');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected, 'yes returns true');
    expect.equal(isYes('YEEEEE'), true, 'YEEEEE returns true');
    expect.equal(isYes('nyEaaupP'), false, 'nyEaaupP returns false');
});
