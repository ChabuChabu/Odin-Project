const getComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * 3) + 1;

  if (computerChoice === 1) {
    computerChoice = "Rock";
  } else if (computerChoice === 2) {
    computerChoice = "Scissors";
  } else {
    computerChoice = "Paper";
  }

  console.log(`\nComputer chose: ${computerChoice}`);
  return computerChoice;
};

const getHumanChoice = () => {
  let humanChoice = parseInt(
    prompt("Enter 1 for Rock, 2 for Scissors, 3 for Paper")
  );

  if (humanChoice === 1) {
    return "Rock";
  } else if (humanChoice === 2) {
    return "Scissors";
  } else if (humanChoice === 3) {
    return "Paper";
  } else {
    console.log("Invalid choice. Please enter 1, 2, or 3.");
    return getHumanChoice(); // Recursively ask for a valid choice
  }
};

const playRound = (humanSelection, computerSelection) => {
  if (humanSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (
    (humanSelection === "Rock" && computerSelection === "Scissors") ||
    (humanSelection === "Scissors" && computerSelection === "Paper") ||
    (humanSelection === "Paper" && computerSelection === "Rock")
  ) {
    console.log("You win this round!");
    return "human";
  } else {
    console.log("Computer wins this round!");
    return "computer";
  }
};

const playGame = () => {
  let humanScore = 0;
  let computerScore = 0;
  let rounds = 5;

  for (let gameCount = 1; gameCount <= rounds; gameCount++) {
    console.log(`\nRound ${gameCount}`);

    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();

    let winner = playRound(humanSelection, computerSelection);

    if (winner === "human") {
      humanScore++;
    } else if (winner === "computer") {
      computerScore++;
    }
  }

  console.log("\nGame Over!");
  console.log(`Final Score - You: ${humanScore} | Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (humanScore < computerScore) {
    console.log("Computer wins the game! Better luck next time.");
  } else {
    console.log("It's a draw!");
  }
};

// Start the game
playGame();
