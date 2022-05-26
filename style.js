//START: Variables to indicate what window to start at or to toggle
//START: to indicate what window to start at or to toggle
//START: to indicate what window to start at or to toggle

var startState = (
    "start-window"
    // "question1-window"
    // "question2-window"
    // "scores-and-initials-window"
    // "scores-window"
)

//END: to indicate what window to start at or to toggle
//END: to indicate what window to start at or to toggle
//END: to indicate what window to start at or to toggle



//START: Class tie ins from HTML to js variables
//START: Class tie ins from HTML to js variables
//START: Class tie ins from HTML to js variables

//Start Window tie in from HTML to variable
var startStateWindowEL = document.querySelector("#start-window");

//Timer tie in from HTML to variable
var theTimerWindowEl = document.querySelector("#timer");

//Quiz question 1 tie in from HTML to variable
var quizQuestion1WindowEl = document.querySelector("#question1-window");

//Quiz question 2 tie in from HTML to variable
var quizQuestion2WindowEl = document.querySelector("#question2-window");

// Score and initials tie in from HTML to variable
var scoreAndInitialsWindowEL = document.querySelector("#score-and-initials-window");

// Score aggregate window tie in from HTML to variable
var scoresWindowEL = document.querySelector("#scores-window");

//END: Class tie ins from HTML to js variables
//END: Class tie ins from HTML to js variables
//END: Class tie ins from HTML to js variables



//START: Button tie ins from HTML to js variables
//START: Button tie ins from HTML to js variables
//START: Button tie ins from HTML to js variables

//Start button
var startButton = document.querySelector("#start-window button");

//Question 1 buttons (C is correct)
var question1ButtonB = document.querySelector("#question1-buttonB button")
var question1ButtonA = document.querySelector("#question1-buttonA button")
var question1ButtonC = document.querySelector("#question1-buttonC button")
var question1ButtonD = document.querySelector("#question1-buttonD button")

//Question 2 buttons (B is correct)
var question2ButtonA = document.querySelector("#question2-buttonA button")
var question2ButtonB = document.querySelector("#question2-buttonB button")
var question2ButtonC = document.querySelector("#question2-buttonC button")
var question2ButtonD = document.querySelector("#question2-buttonD button")

//Score and initials page button
var scoreAndInitialsPageButton = document.querySelector("#score-and-initials-window button")

//Scores window buttons 
var scoresWindowButton = document.querySelector("#scores-window button")

//END: Button tie ins from HTML to js variables
//END: Button tie ins from HTML to js variables
//END: Button tie ins from HTML to js variables


//START: Timer function
//START: Timer function
//START: Timer function

function setTheTimer() {

    timeDisplay();
    //setInterval is a thing...  Its built in.
    var secondsLeft = 100;
    var timerInterval = setInterval(
        function () {
            secondsLeft--;
            timeDisplay();

            if (secondsLeft === 0) {
                alert("Try Again");
                clearInterval(timerInterval);
                startStateWindowEL.style.display = "block";
                theTimerWindowEl.style.display = "none";
                quizQuestion1WindowEl.style.display = "none";
                quizQuestion2WindowEl.style.display = "none";
                scoreAndInitialsWindowEL.style.display = "none";
                scoresWindowEL.style.display = "none";

            }

            if (startState === "scores-and-initials-window") {
                clearInterval(timerInterval);
            }





            // if all([question1ButtonA, question1ButtonB, question1ButtonD, question2ButtonA, 
            // question2ButtonC, question2ButtonD]);


            

}, 1000);

function timeDisplay() {
    theTimerWindowEl.textContent = "You have " + secondsLeft + " seconds left until the game ends";
}

}


//START: Timer function
//START: Timer function
//START: Timer function


//START: Window toggle scheme
//START: Window toggle scheme
//START: Window toggle scheme
function displayWindows() {
    if (startState === "start-window") {
        startStateWindowEL.style.display = "block";
        theTimerWindowEl.style.display = "none";
        quizQuestion1WindowEl.style.display = "none";
        quizQuestion2WindowEl.style.display = "none";
        scoreAndInitialsWindowEL.style.display = "none";
        scoresWindowEL.style.display = "none";

    }

    if (startState === "question1-window") {
        startStateWindowEL.style.display = "none";
        theTimerWindowEl.style.display = "block";
        quizQuestion1WindowEl.style.display = "block";
        quizQuestion2WindowEl.style.display = "none";
        scoreAndInitialsWindowEL.style.display = "none";
        scoresWindowEL.style.display = "none";

    }

    if (startState === "question2-window") {
        startStateWindowEL.style.display = "none";
        theTimerWindowEl.style.display = "block";
        quizQuestion1WindowEl.style.display = "none";
        quizQuestion2WindowEl.style.display = "block";
        scoreAndInitialsWindowEL.style.display = "none";
        scoresWindowEL.style.display = "none";

    }

    if (startState === "scores-and-initials-window") {
        startStateWindowEL.style.display = "none";
        theTimerWindowEl.style.display = "none";
        quizQuestion1WindowEl.style.display = "none";
        quizQuestion2WindowEl.style.display = "none";
        scoreAndInitialsWindowEL.style.display = "block";
        scoresWindowEL.style.display = "none";

    }

    if (startState === "scores-window") {
        startStateWindowEL.style.display = "none";
        theTimerWindowEl.style.display = "none";
        quizQuestion1WindowEl.style.display = "none";
        quizQuestion2WindowEl.style.display = "none";
        scoreAndInitialsWindowEL.style.display = "none";
        scoresWindowEL.style.display = "block";

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
    startState = "question1-window";
    displayWindows();
    setTheTimer();

});

quizQuestion1WindowEl.addEventListener("click", function () {
    startState = "question2-window";
    displayWindows();
});

quizQuestion2WindowEl.addEventListener("click", function () {
    startState = "scores-and-initials-window";
    displayWindows();
    // clearInterval(timerInterval);

});

scoreAndInitialsPageButton.addEventListener("click", function () {
    startState = "scores-window";
    displayWindows();
});

scoresWindowButton.addEventListener("click", function () {
    startState = "start-window";
    displayWindows();
});

//END: Button click listening scheme
//END: Button click listening scheme
//END: Button click listening scheme



//Go Go Go
init();

