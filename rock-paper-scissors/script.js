function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
      return "It's a tie! " + playerSelection + " cancels out " + computerSelection;
    } else if (
      (playerSelection === 'scissors' && computerSelection === 'paper') ||
      (playerSelection ===  'rock' && computerSelection ==='scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock')
   )  {
      return "You win! " + playerSelection + " beats " + computerSelection ;
   }  else {
      return "You lose! " + computerSelection + " beats " + playerSelection ;
   }  
}

function displayResult(result) {
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = result;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
      const playerSelection = prompt("Round " + round + ": Enter your choice (Rock/Paper/Scissors)").trim();
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);

      displayResult(result);

      console.log(result);

      if (result.includes("win")){
        playerScore++;
      } else if (result.includes("lose")) {
        computerScore++;
      }
    }

    console.log("Final Score: You " + playerScore + " Computer: " + computerScore);

    if (playerScore > computerScore) {
      console.log("Congratulations! You win the game!");
    } else if (computerScore > playerScore) {
      console.log("Sorry you lost this time. Better luck next time");
    } else {
      console.log("The game ends in a draw.");
    }
}

game();