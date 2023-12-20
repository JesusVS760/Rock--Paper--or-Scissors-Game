/* grabing elements by their id. Id assigned in HTML code ---> sent to a constant variable */
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
/* querySelectorAll ---> grabs all general tags aka button for this instance */
/*  NOTE: only use this when you don't plan to add any additional buttons in program */
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let results;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; // or you can use possible choice length ---> return a 3
  console.log(randomNumber);

  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "scissors";
  }
  if (randomNumber === 3) {
    computerChoice = "paper";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    results = "its a draw!";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    results = "you win!";
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    results = "you lost!";
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    results = "you win!";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    results = "you lost!";
  }
  if (computerChoice === "paper" && userChoice === "paper") {
    results = "its a draw!";
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    results = "you win!";
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    results = "you lost!";
  }
  if (computerChoice === "scissors" && userChoice === "scissors") {
    results = "its a draw!";
  }
  resultDisplay.innerHTML = results;
}
