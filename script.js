let playerScore = 0;
let computerScore = 0;
const pScore = document.querySelector(".player_score");
const cScore = document.querySelector(".computer_score");
const displayResults = document.querySelector(".results");

function computerPlay() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) return "rock";
  if (computerChoice === 1) return "paper";
  if (computerChoice === 2) return "scissors";
}

function playerChoice() {
  let response = prompt("Type: Rock, Paper, or Scissors").toLowerCase();
  return response;
}

function updateScore() {
  pScore.textContent = playerScore;
  cScore.textContent = computerScore;
}

function results(playerSelection, computerSelection) {
  playerSelection = playerChoice();
  computerSelection = computerPlay();
  console.log(`you chose: ${playerSelection}`);
  console.log(`computer chose: ${computerSelection}`);

  if (playerSelection === computerSelection) {
    return (result = "It's a Tie");
  }
  //Check for rock
  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      playerScore++;
      updateScore();
      return (result = "You Win!");
    } else {
      computerScore++;
      updateScore();
      return (result = "You Lose");
    }
  }
  //Check for paper
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      computerScore++;
      updateScore();
      return (result = "You Lose");
    } else {
      playerScore++;
      updateScore();
      return (result = "You Win!");
    }
  }
  //Check for scissors
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      updateScore();
      return (result = "You Lose");
    } else {
      playerScore++;
      updateScore();
      return (result = "You Win");
    }
  }
}

// function playRound(playerSelection, computerSelection) {

//   return results(playerSelection, computerSelection);
// }

//Best of 5 match
function playGame() {}
