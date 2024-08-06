let number = parseInt(Math.random() * 100 + 1);

const guessed = document.querySelector("#guessed");
const submit = document.querySelector("#submit");
const result = document.querySelector("#result");
const previous = document.querySelector("#previous");
const attempts = document.querySelector("#attempts");
const lowOrHigh = document.querySelector("#lowOrHigh");
const startOver = document.querySelector("#startOver");

let prevGuesses = [];
let numOfAttempt = 1;
let playGame = true;

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const guess = parseInt(guessed.value);
  validate(guess);
});

function validate(guess) {
  if (isNaN(guess) || guess <= 0 || guess > 100) {
    alert("Please enter a number between 1 and 100");
  } else {
    if (numOfAttempt === 10) {
      displayGuess(guess);
      message(`Game over! The number was ${number}`);
      endGame();
    } else {
      prevGuesses.push(guess);
      displayGuess(guess);
      check(guess);
    }
  }
}

function check(guess) {
  if (guess === number) {
    message("KUDOS!! You guessed it right");
    endGame();
  } else if (guess > number) {
    message("Your number is TOO high");
  } else if (guess < number) {
    message("Your number is TOO low");
  } else {
    message("WTF!! I don't know what is happening");
  }
}

function displayGuess(guess) {
  guessed.value = "";
  previous.innerHTML += `${guess}, `;
  numOfAttempt++;
  attempts.innerHTML = 11 - numOfAttempt;
}

function message(msg) {
  lowOrHigh.innerHTML = `<h3>${msg}</h3>`;
}

function endGame() {
  guessed.disabled = true;
  submit.disabled = true;
  startOver.style.display = "block";
}
window.onload = function () {
  startOver.style.display = "none";
};

startOver.addEventListener("click", newGame);
function newGame() {
  let number = parseInt(Math.random() * 100 + 1);
  guessed.disabled = false;
  submit.disabled = false;
  startOver.style.display = "none";
  previous.innerHTML = "";
  prevGuesses = [];
  numOfAttempt = 1;
  lowOrHigh.innerHTML = "";
  attempts.innerHTML = 10;
  playGame = true;
}
