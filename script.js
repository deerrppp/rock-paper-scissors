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
  console.log(
    `Computer choice: ${
      compChoice.charAt(0).toUpperCase() + compChoice.slice(1).toLowerCase()
    }`
  );
  return compChoice;
}

function getPlayerChoice() {
  let playerChoice = prompt("Paper, Rock or Scissors?").toLowerCase();
  if (playerChoice === "" || playerChoice === null) {
    alert("You entered an invalid response");
  }
  console.log(
    `Player choice: ${
      playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase()
    }`
  );
  return playerChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie";
  } else if (playerSelection === "rock") {
    return computerSelection === "paper"
      ? `You lose! ${computerSelection} beats ${playerSelection}.`
      : `You win! ${playerSelection} beats ${computerSelection}.`;
  } else if (playerSelection === "scissors") {
    return computerSelection === "rock"
      ? `You lose! ${computerSelection} beats ${playerSelection}.`
      : `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "paper") {
    return computerSelection === "scissors"
      ? `You lose! ${computerSelection} beats ${playerSelection}.`
      : `You win! ${playerSelection} beats ${computerSelection}`;
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
