let playerScore = 0;
let computerScore = 0;

// Computer play function will randomly return rock paper or scissors
function computerPlay() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) return "rock";
  if (computerChoice === 1) return "paper";
  if (computerChoice === 2) return "scissors";
}

// function that plays a single round
function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  playerSelection = prompt("choose: rock, paper, or scissors").toLowerCase;
  if (playerSelection !== "rock" || "paper" || "scissors")
    alert("please choose either: rock, paper, or scissors");

  if (computerSelection === playerSelection) return "its a tie";

  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
      return "you lose, paper beats rock";
    }
    if (computerSelection === "scissors") {
      playerScore++;
      return "you win, rock beats scissors";
    }
  }

  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerScore++;
      return "you win, paper beats rock";
    }
    if (computerSelection === "scissors") {
      computerScore++;
      return "you lose, scissors beats paper";
    }
  }

  if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      playerScore++;
      return "you win, scissors beats paper";
    }
    if (computerSelection === "rock") {
      computerScore++;
      return "you lose, rock beats scissors";
    }
  }
  // Save score to screen
}

// game function, 5 rounds, keep score, report winner
function playGame(playRound) {
  while (playerScore < 3 && computerScore < 3) {
    playRound();
    if ((playerScore = 3)) {
      return "You Win";
    }
    if ((computerScore = 3)) {
      return "You Lose";
    }
  }
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  // Add play game button
}

// Event Listeners: player selection prompt(play game button)
