// var state = 'start';
var state = 'quiz';
// var state = 'end';


var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var startBtn = document.querySelector("#start button");
var quizTitle = document.querySelector("#quiz #title");

function displayState() {
  if (state === 'start') {
    startEl.style.display = 'block';
    quizEl.style.display = 'none';
    endEl.style.display = 'none';
  }
  if (state === 'quiz') {
    startEl.style.display = 'none';
    quizEl.style.display = 'block';
    endEl.style.display = 'none';
  }
  if (state === 'end') {
    startEl.style.display = 'none';
    quizEl.style.display = 'none';
    endEl.style.display = 'block';
  }
}

function init() {
  displayState();
}

startBtn.addEventListener("click", function() {
  state = 'quiz';
  displayState();
});

quizTitle.addEventListener("click", function () {
  state = 'end';
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