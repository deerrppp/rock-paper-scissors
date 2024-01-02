const button = document.querySelectorAll("button");
const body = document.querySelector("body");
const resultText = document.createElement("div");
let playerText = document.createElement("div");
let computerText = document.createElement("div");
let whoWins = document.createElement("div");
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    playerSelection = btn.id;
    getComputerChoice();
    resultText.textContent = playGame();
    playerText.textContent = `Player: ${playerScore}`;
    computerText.textContent = `Computer: ${computerScore}`;
    whoWins.textContent = checkWinner();
    body.appendChild(playerText);
    body.appendChild(computerText);
    body.appendChild(resultText);
    body.appendChild(whoWins);
  });
});

function getComputerChoice() {
  let number = Math.floor(Math.random() * 3) + 1;
  switch (number) {
    case 1:
      computerSelection = "rock";
      break;
    case 2:
      computerSelection = "paper";
      break;
    case 3:
      computerSelection = "scissors";
      break;
  }
  // console.log(`comp choice: ${compChoice}`);
  return computerSelection;
}

function playGame() {
  while (playerScore < 5 && computerScore < 5) {
    if (playerSelection === computerSelection) {
      return "Its a tie";
    } else if (playerSelection === "rock") {
      if (computerSelection === "paper") {
        computerScore += 1;
        return `You lose! ${playerSelection} loses to ${computerSelection}.`;
      } else {
        playerScore += 1;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
      }
    } else if (playerSelection === "scissors") {
      if (computerSelection === "rock") {
        computerScore += 1;
        return `You lose! ${playerSelection} loses to ${computerSelection}.`;
      } else {
        playerScore += 1;
        return `You win! ${playerSelection} beats ${computerSelection}`;
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "scissors") {
        computerScore += 1;
        return `You lose! ${playerSelection} loses to ${computerSelection}.`;
      } else {
        playerScore += 1;
        return `You win! ${playerSelection} beats ${computerSelection}`;
      }
    } else {
      return "You made an invalid choice!";
    }
  }
}

function checkWinner() {
  if (playerScore === 5) {
    disableButtons();
    return "Player Wins!";
  } else if (computerScore === 5) {
    disableButtons();
    return "Computer Wins!";
  }
}

function disableButtons() {
  button.forEach((btn) => {
    btn.disabled = true;
  });
}
