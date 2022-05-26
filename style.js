//START: Variables to indicate what window to start at or to toggle
//START: to indicate what window to start at or to toggle
//START: to indicate what window to start at or to toggle

var startState = (
    "start"
    // "question1"
    // "question2"
    // "scores-and-initials-page"
    // "scores-window"
)

//END: to indicate what window to start at or to toggle
//END: to indicate what window to start at or to toggle
//END: to indicate what window to start at or to toggle



//START: Class tie ins from HTML to js variables
//START: Class tie ins from HTML to js variables
//START: Class tie ins from HTML to js variables

//Start Window tie in from HTML to variable
var startStateEL = document.querySelector("#start");
//Quiz question 1 tie in from HTML to variable
var quizQuestion1El = document.querySelector("#question1");
//Quiz question 2 tie in from HTML to variable
var quizQuestion2El = document.querySelector("#question2");
// Score and initials tie in from HTML to variable
var scoreAndInitialsPageEL = document.querySelector("#score-and-initials-page");
// Score aggregate window tie in from HTML to variable
var scoresWindowEL = document.querySelector("#scores-window");
// Score and initials tie in from HTML to variable
// var quizTitle = document.querySelector("#quiz #title");

//END: Class tie ins from HTML to js variables
//END: Class tie ins from HTML to js variables
//END: Class tie ins from HTML to js variables



//START: Button tie ins from HTML to js variables
//START: Button tie ins from HTML to js variables
//START: Button tie ins from HTML to js variables

//Start button
var startButton = document.querySelector("#start button");

//Question 1 buttons
var question1ButtonA = document.querySelector("#question1-buttonA button")
var question1ButtonB = document.querySelector("#question1-buttonB button")
var question1ButtonC = document.querySelector("#question1-buttonC button")
var question1ButtonD = document.querySelector("#question1-buttonD button")

//Question 2 buttons
var question2ButtonA = document.querySelector("#question2-buttonA button")
var question2ButtonB = document.querySelector("#question2-buttonB button")
var question2ButtonC = document.querySelector("#question2-buttonC button")
var question2ButtonD = document.querySelector("#question2-buttonD button")

//Score and initials page button
var scoreAndInitialsPageButton = document.querySelector("#score-and-initials-page button")

//Scores window buttons 
var scoresWindowButton = document.querySelector("#scores-window button")

//END: Button tie ins from HTML to js variables
//END: Button tie ins from HTML to js variables
//END: Button tie ins from HTML to js variables



//START: Window toggle scheme
//START: Window toggle scheme
//START: Window toggle scheme
function displayWindows() {
    if (startState === 'start') {
        startStateEL.style.display = 'block';
        quizQuestion1El.style.display = 'none';
        quizQuestion2El.style.display = 'none';
        scoreAndInitialsPageEL.style.display = 'none';
        scoresWindowEL.style.display = 'none';

    }

    if (startState === 'question1') {
        startStateEL.style.display = 'none';
        quizQuestion1El.style.display = 'block';
        quizQuestion2El.style.display = 'none';
        scoreAndInitialsPageEL.style.display = 'none';
        scoresWindowEL.style.display = 'none';

    }

    if (startState === 'question2') {
        startStateEL.style.display = 'none';
        quizQuestion1El.style.display = 'none';
        quizQuestion2El.style.display = 'block';
        scoreAndInitialsPageEL.style.display = 'none';
        scoresWindowEL.style.display = 'none';

    }

    if (startState === 'scores-and-initials-page') {
        startStateEL.style.display = 'none';
        quizQuestion1El.style.display = 'none';
        quizQuestion2El.style.display = 'none';
        scoreAndInitialsPageEL.style.display = 'block';
        scoresWindowEL.style.display = 'none';

    }

    if (startState === 'scores-window') {
        startStateEL.style.display = 'none';
        quizQuestion1El.style.display = 'none';
        quizQuestion2El.style.display = 'none';
        scoreAndInitialsPageEL.style.display = 'none';
        scoresWindowEL.style.display = 'block';

    }

}

//END: Window toggle scheme
//END: Window toggle scheme
//END: Window toggle scheme


//START: Button click listening scheme
//START: Button click listening scheme
//START: Button click listening scheme

function init() {
    displayWindows();
}

startButton.addEventListener("click", function () {
    startState = 'question1';
    displayWindows();
});

quizQuestion1El.addEventListener("click", function () {
    startState = 'question2';
    displayWindows();
});

quizQuestion2El.addEventListener("click", function () {
    startState = 'scores-and-initials-page';
    displayWindows();
});

scoreAndInitialsPageButton.addEventListener("click", function () {
    startState = 'scores-window';
    displayWindows();
});

scoresWindowButton.addEventListener("click", function () {
    startState = 'start';
    displayWindows();
});

//END: Button click listening scheme
//END: Button click listening scheme
//END: Button click listening scheme



init();





// //Provided by Anthony.  Thank you!
// var state = 'start';

// var startEl = document.querySelector("#start");
// var quizEl = document.querySelector("#quiz");
// var endEl = document.querySelector("#end");
// var startBtn = document.querySelector("#start button");
// var quizTitle = document.querySelector("#quiz #title");

// function displayState() {
//   if (state === 'start') {
//     startEl.style.display = 'block';
//     quizEl.style.display = 'none';
//     endEl.style.display = 'none';
//   }
//   if (state === 'quiz') {
//     startEl.style.display = 'none';
//     quizEl.style.display = 'block';
//     endEl.style.display = 'none';
//   }
//   if (state === 'end') {
//     startEl.style.display = 'none';
//     quizEl.style.display = 'none';
//     endEl.style.display = 'block';
//   }
// }

// function init() {
//   displayState();
// }

// startBtn.addEventListener("click", function() {
//   state = 'quiz';
//   displayState();
// });

// quizTitle.addEventListener("click", function () {
//   state = 'end';
//   displayState();
// });

// init();