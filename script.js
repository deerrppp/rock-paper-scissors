//Game that loops 5 times using console
function getComputerChoice() {
  let number = Math.floor(Math.random() * 3) + 1;
  switch (number) {
    case 1:
      compChoice = "rock";
      break;
    case 2:
      compChoice = "paper";
      break;
    case 3:
      compChoice = "scissors";
      break;
  }
  console.log(`Computer choice: ${compChoice}`);
  return compChoice;
}

function getPlayerChoice() {
  let playerChoice = prompt("Paper, Rock or Scissors?").toLowerCase();
  if (playerChoice === "") {
    alert("You entered an invalid response");
  }
  console.log(`Player choice: ${playerChoice}`);
  return playerChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie";
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return `You lose! ${computerSelection} beats ${playerSelection}.`;
    } else {
      return `You win! ${playerSelection} beats ${computerSelection}`; //SCISSORS
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return `You lose! ${computerSelection} beats ${playerSelection}.`;
    } else {
      return `You win! ${playerSelection} beats ${computerSelection}`;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return `You lose! ${computerSelection} beats ${playerSelection}.`;
    } else {
      return `You win! ${playerSelection} beats ${computerSelection}`;
    }
  } else {
    return "You made an invalid choice!";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
