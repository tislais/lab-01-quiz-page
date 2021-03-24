import {
    isYes
} from './utils.js';

// initialize state

const startQuizButton = document.getElementById('start-quiz-button');
const quizResultsDiv = document.getElementById('quiz-results-div');
const quizResultsComment = document.getElementById('quiz-results-comment');

// set event listeners to update state and DOM

startQuizButton.addEventListener('click', () => {

    alert('Welcome to the Twisty Puzzle Quiz!!');
    const userName = prompt('Before we start, what is your name?');
    const wantsToTakeQuiz = confirm(`Ok, ${userName}. Are you really sure you want to take this extremely hard quiz?`);

    if (!wantsToTakeQuiz) {
        alert('Hey, no worries! I hope you enjoyed learning about twisty puzzles anyway!');
        return;
    }

    let score = 0;
    let questionCount = 0;

    // Question One
    const questionOneAnswer = prompt('Does the original Rubiks Cube have 6 sides?'); // Yes
    if (isYes(questionOneAnswer)) score++;
    questionCount++;

    // Question Two
    const questionTwoAnswer = prompt('Is the Megaminx an example of an irregular cuboid?'); // No
    if (!isYes(questionTwoAnswer)) score++;
    questionCount++;

    // Question Three
    const questionThreeAnswer = prompt('Is the Square-1 puzzle my favorite cuboid?'); // Yes
    if (isYes(questionThreeAnswer)) score++;
    questionCount++;


    const quizResultsPercent = (score / questionCount) * 100;
    const percent = Math.round(quizResultsPercent);

    quizResultsDiv.textContent = `You scored ${percent}%`;
    quizResultsComment.classList.remove('hidden');
    
    if(score === 0) {
        quizResultsComment.textContent = 'Now that\'s just sad.';
    } else if (score < questionCount && score > 0) {
        quizResultsComment.textContent = `Not bad, but I think you could do better.`;
    } else {
        quizResultsComment.textContent = 'Whoa! Perfect!';
    }
    


});