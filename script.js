let playerScore = 0;
let computerScore = 0;
const pScore = document.querySelector(".player_score");
const cScore = document.querySelector(".computer_score");
const displayResults = document.querySelector(".results");
const startButton = document.querySelector(".start_btn");
const resetButton = document.querySelector(".reset_btn");
const playerChoices = document.querySelectorAll(".choices");
const pOptions = document.querySelector(".player_options");

function computerPlay() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) return "rock";
  if (computerChoice === 1) return "paper";
  if (computerChoice === 2) return "scissors";
}

// function playerChoice() {
//   // let response = prompt("Type: Rock, Paper, or Scissors").toLowerCase();
//   // return response;
// }

function updateScore() {
  pScore.textContent = playerScore;
  cScore.textContent = computerScore;
}

function playRound(playerSelection, computerSelection) {
  console.log(`you chose: ${playerSelection}`);
  console.log(`computer chose: ${computerSelection}`);

  if (playerSelection === computerSelection) {
    result = "It's a Tie";
    displayResults.textContent = result;
    console.log(result);
    return;
  }
  //Check for rock
  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      playerScore++;
      result = "You Win!";
    } else {
      computerScore++;
      result = "You Lose";
    }
    updateScore();
    displayResults.textContent = result;
    endGame();
    console.log(result);
    return;
  }
  //Check for paper
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      computerScore++;
      result = "You Lose";
    } else {
      playerScore++;
      result = "You Win!";
    }
    updateScore();
    displayResults.textContent = result;
    endGame();
    console.log(result);
    return;
  }
  //Check for scissors
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      result = "You Lose";
    } else {
      playerScore++;
      result = "You Win!";
    }
    updateScore();
    displayResults.textContent = result;
    endGame();
    console.log(result);
    return;
  }
}

function results() {
  let outcome;
  if (playerScore > computerScore) {
    outcome = "You Win! Press reset to play again";
  } else {
    outcome = "You Lose, Press reset to play again";
  }
  return (displayResults.textContent = outcome);
}

//Reset Function
function reset() {
  playerScore = 0;
  computerScore = 0;
  updateScore();
  displayResults.textContent = "Results";
  startButton.style.visibility = "visible";
  pOptions.style.visibility = "hidden";
}

function startGame() {
  startButton.style.visibility = "hidden";
  pOptions.style.visibility = "visible";
}

//  End Game function
function endGame() {
  if (pScore.textContent === "3" || cScore.textContent === "3") {
    pOptions.style.visibility = "hidden";
    startButton.style.visibility = "visible";
    results();
  }
}

//First to 3 wins
// if (playerScore === 3 || computerScore === 3) {
//   pOptions.style.visibility = "hidden";
//   results();

startButton.addEventListener("click", startGame);
resetButton.addEventListener("click", reset);
playerChoices.forEach((option) => {
  option.addEventListener("click", function (e) {
    playerSelection = e.target.id;
    playRound(playerSelection, computerPlay());
  });
});
