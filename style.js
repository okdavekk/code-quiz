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




//START: Other variables
//START: Other variables
//START: Other variables

var secondsLeft = 100;

//END: Other variables
//END: Other variables
//END: Other variables





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
var startButton = document.querySelector("#start-window");

//Question 1 buttons
var question1ButtonA = document.querySelector("#question1-buttonA")
var question1ButtonB = document.querySelector("#question1-buttonB")
var question1ButtonC = document.querySelector("#question1-buttonC")
var question1ButtonD = document.querySelector("#question1-buttonD")

//Question 2 buttons
var question2ButtonA = document.querySelector("#question2-buttonA")
var question2ButtonB = document.querySelector("#question2-buttonB")
var question2ButtonC = document.querySelector("#question2-buttonC")
var question2ButtonD = document.querySelector("#question2-buttonD")

//Score and initials page button
var scoreAndInitialsPageButton = document.querySelector("#score-and-initials-window")

//Scores window buttons 
var scoresWindowButton = document.querySelector("#scores-window")

//END: Button tie ins from HTML to js variables
//END: Button tie ins from HTML to js variables
//END: Button tie ins from HTML to js variables


//START: Timer function
//START: Timer function
//START: Timer function

function setTheTimer() {

    timeDisplay();
    //setInterval is a thing...  Its built in.
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
    console.log (secondsLeft);
});

question1ButtonB.addEventListener("click", function () {
    var penalty = 5; 
    secondsLeft -= penalty;
    console.log (secondsLeft);

});

question1ButtonD.addEventListener("click", function () {
    var penalty = 5; 
    secondsLeft -= penalty;
    console.log (secondsLeft);

});

question2ButtonA.addEventListener("click", function () {
    var penalty = 5; 
    secondsLeft -= penalty;
    console.log (secondsLeft);

});

question2ButtonC.addEventListener("click", function () {
    var penalty = 5; 
    secondsLeft -= penalty;
    console.log (secondsLeft);

});

question2ButtonD.addEventListener("click", function () {
    var penalty = 5; 
    secondsLeft -= penalty;
    console.log (secondsLeft);
    

});

//END: Button click listening scheme for wrong button decrement 
//END: Button click listening scheme for wrong button decrement 
//END: Button click listening scheme for wrong button decrement 




function saveToLocalStorage(initials) {
    localStorage.setItem("initials", JSON.stringify([]))
    // var savedItem = localStorage.getItem("test")
    // var parsedItem = JSON.parse(savedItem)
    console.log(typeof parsedItem)


}

saveToLocalStorage();



//Go Go Go
init();

