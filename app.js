let srtButton = document.querySelector(".start_btn");
let playerOptions = document.querySelectorAll(".player_options button");
let displayResults = document.querySelector(".results");
let playscore = document.querySelector(".player_score");
let compscore = document.querySelector(".computer_score");
let rstButton = document.querySelector(".reset_btn");
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) return "rock";
  if (computerChoice === 1) return "paper";
  if (computerChoice === 2) return "scissors";
}

//Start the Game
function startGame() {
  srtButton.addEventListener("click", () => {
    playerOptions.style.classList.add = ".reappear";
    srtButton.style.classList.add = ".invisible";
  });
}
//Play Round
function playRound() {
  playerOptions.forEach((option) => {
    option.addEventListener("click", function (e) {
      playerChoice = e.target.id;
      computerPlay();
      results(playerChoice, computerPlay);
    });
  });
}

function updateScore() {
  playscore.textContent = playerScore;
  compscore.textContent = computerScore;
}

function results(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return (result = "It's a Tie");
  }
  //Check for rock
  if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
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
  if (playerChoice === "paper") {
    if (computerChoice === "scissors") {
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
  if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
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

function reset() {
  playerScore = 0;
  computerScore = 0;
  updateScore();
  srtButton.style.classList.add = ".reappear";
  playerOptions.style.classList.add = ".invisible";
}

function playGame() {
  while (playerScore < 3 && computerScore < 3) {
    startGame();
    playRound();
  }
  displayResults.textContent = results();
}

srtButton.addEventListener("click", playGame);
rstButton.addEventListener("click", reset);
