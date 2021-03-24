// import functions and grab DOM elements
import {
    isYes
} from './utils.js';

// initialize state

const startQuizButton = document.getElementById('start-quiz-button');
const quizResultsButton = document.getElementById('quiz-results-button');

// set event listeners to update state and DOM

startQuizButton.addEventListener('click', () => {
    alert('Welcome to the Twisty Puzzle Quiz!!');
})