var state = 'start';
// // var state = 'question1';
// // var state = 'question2';
// // var state = 'end';


var startEl = document.querySelector("#start");
var quizQuestion1El = document.querySelector("#question1");
var quizQuestion2El = document.querySelector("#question2");
var scoreAndInitialsPage = document.querySelector("#score-and-initials-page");
var scoresWindow = document.querySelector("#scores-window");
var quizTitle = document.querySelector("#quiz #title");


//BUTTONS!!!!!!!!!!!!!!
//BUTTONS!!!!!!!!!!!!!!
//BUTTONS!!!!!!!!!!!!!!
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




function displayState() {
    if (state === 'start') {
        startEl.style.display = 'block';
        quizQuestion1El.style.display = 'none';
        quizQuestion2El.style.display = 'none';
        scoreAndInitialsPage.style.display = 'none';
        scoresWindow.style.display = 'none';

    }
    if (state === 'question1') {
        startEl.style.display = 'none';
        quizQuestion1El.style.display = 'block';
        quizQuestion2El.style.display = 'none';
        scoreAndInitialsPage.style.display = 'none';
        scoresWindow.style.display = 'none';

    }

    if (state === 'question2') {
        startEl.style.display = 'none';
        quizQuestion1El.style.display = 'none';
        quizQuestion2El.style.display = 'block';
        scoreAndInitialsPage.style.display = 'none';
        scoresWindow.style.display = 'none';

    }


    if (state === 'scores-and-initials-page') {
        startEl.style.display = 'none';
        quizQuestion1El.style.display = 'none';
        quizQuestion2El.style.display = 'none';
        scoreAndInitialsPage.style.display = 'block';
        scoresWindow.style.display = 'none';

    }

    if (state === 'scores-window') {
        startEl.style.display = 'none';
        quizQuestion1El.style.display = 'none';
        quizQuestion2El.style.display = 'none';
        scoreAndInitialsPage.style.display = 'none';
        scoresWindow.style.display = 'block';

    }



}

function init() {
    displayState();
}

startButton.addEventListener("click", function () {
    state = 'question1';
    displayState();
});

quizQuestion1El.addEventListener("click", function () {
    state = 'question2';
    displayState();
});

quizQuestion2El.addEventListener("click", function () {
    state = 'scores-and-initials-page';
    displayState();
});

scoreAndInitialsPageButton.addEventListener("click", function () {
    state = 'scores-window';
    displayState();
});

scoresWindowButton.addEventListener("click", function () {
    state = 'start';
    displayState();
});

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