var startState = (
    "start-window"
)


var secondsLeft = 100;


//START: Class tie ins from HTML to js variables
//START: Class tie ins from HTML to js variables
//START: Class tie ins from HTML to js variables

var startStateWindowEL = document.querySelector("#start-window");
var theTimerWindowEl = document.querySelector("#timer");
var quizQuestion1WindowEl = document.querySelector("#question1-window");
var quizQuestion2WindowEl = document.querySelector("#question2-window");
var scoreAndInitialsWindowEL = document.querySelector("#score-and-initials-window");
var scoresWindowEL = document.querySelector("#scores-window");
var initialsInput = document.querySelector("#text-box");

//END: Class tie ins from HTML to js variables
//END: Class tie ins from HTML to js variables
//END: Class tie ins from HTML to js variables


//START: Button tie ins from HTML to js variables
//START: Button tie ins from HTML to js variables
//START: Button tie ins from HTML to js variables

var startButton = document.querySelector("#start-window");
var question1ButtonA = document.querySelector("#question1-buttonA")
var question1ButtonB = document.querySelector("#question1-buttonB")
var question1ButtonC = document.querySelector("#question1-buttonC")
var question1ButtonD = document.querySelector("#question1-buttonD")
var question2ButtonA = document.querySelector("#question2-buttonA")
var question2ButtonB = document.querySelector("#question2-buttonB")
var question2ButtonC = document.querySelector("#question2-buttonC")
var question2ButtonD = document.querySelector("#question2-buttonD")
var scoreAndInitialsPageButton = document.querySelector("#submit-button")
var scoresWindowButton = document.querySelector("#scores-window")

//END: Button tie ins from HTML to js variables
//END: Button tie ins from HTML to js variables
//END: Button tie ins from HTML to js variables


//START: Timer function
//START: Timer function
//START: Timer function

function setTheTimer() {

    timeDisplay();
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
        }, 1000);

    function timeDisplay() {
        theTimerWindowEl.textContent = "You have " + secondsLeft + " seconds left until the game ends";
    }
}


//END: Timer function
//END: Timer function
//END: Timer function


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


//START: Button click listening scheme for main driver buttons
//START: Button click listening scheme for main driver buttons
//START: Button click listening scheme for main driver buttons

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
});

scoreAndInitialsPageButton.addEventListener("click", function () {
    startState = "scores-window";
    displayWindows();
});

scoresWindowButton.addEventListener("click", function () {
    startState = "start-window";
    secondsLeft = 100;
    displayWindows();
});

//END: Button click listening scheme scheme for main driver buttons
//END: Button click listening scheme scheme for main driver buttons
//END: Button click listening scheme scheme for main driver buttons


//START: Button click listening scheme for wrong button decrement 
//START: Button click listening scheme for wrong button decrement 
//START: Button click listening scheme for wrong button decrement 

question1ButtonA.addEventListener("click", function () {
    var penalty = 5;
    secondsLeft -= penalty;
    console.log(secondsLeft);
});

question1ButtonB.addEventListener("click", function () {
    var penalty = 5;
    secondsLeft -= penalty;
    console.log(secondsLeft);
});

question1ButtonD.addEventListener("click", function () {
    var penalty = 5;
    secondsLeft -= penalty;
    console.log(secondsLeft);
});

question2ButtonA.addEventListener("click", function () {
    var penalty = 5;
    secondsLeft -= penalty;
    console.log(secondsLeft);
});

question2ButtonC.addEventListener("click", function () {
    var penalty = 5;
    secondsLeft -= penalty;
    console.log(secondsLeft);
});

question2ButtonD.addEventListener("click", function () {
    var penalty = 5;
    secondsLeft -= penalty;
    console.log(secondsLeft);
});

//END: Button click listening scheme for wrong button decrement 
//END: Button click listening scheme for wrong button decrement 
//END: Button click listening scheme for wrong button decrement 


// START: Writing to local storage
// START: Writing to local storage
// START: Writing to local storage


scoreAndInitialsPageButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (initialsInput.value !== null) {
        var data = {
            initials: initialsInput.value, 
            score: secondsLeft
        }
        var scores = JSON.parse(localStorage.getItem("scores")) || [];
        scores.push(data)
        
        localStorage.setItem("scores", JSON.stringify(scores));
    }
});


// END: Writing to local storage
// END: Writing to local storage
// END: Writing to local storage


//Go Go Go
init();

//This one got away from me a bit but I got close!  