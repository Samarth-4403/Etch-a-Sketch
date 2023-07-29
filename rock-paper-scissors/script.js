let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function play(playerSelection) {
  const computerSelection = getComputerChoice();
  let result;

  if (playerSelection === computerSelection) {
    result = "It's a tie! " + playerSelection + " cancels out " + computerSelection;
  } else if (
    (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper')
  ) {
    result = "You win! " + playerSelection + " beats " + computerSelection;
    playerScore++;
  } else {
    result = "You lose! " + computerSelection + " beats " + playerSelection;
    computerScore++;
  }

  displayResult(result);
  displayScore();
  checkWinner();
}

function displayResult(result) {
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = result;
}

function displayScore() {
  const playerScoreDiv = document.getElementById('player-score');
  const computerScoreDiv = document.getElementById('computer-score');
  playerScoreDiv.textContent = "Player Score: " + playerScore;
  computerScoreDiv.textContent = "Computer Score: " + computerScore;
}

function checkWinner() {
  const winnerDiv = document.getElementById('winner');
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore === 5) {
      winnerDiv.textContent = "Congratulations! You win the game!";
    } else {
      winnerDiv.textContent = "You lost the game. Better luck next time!";
    }
    resetScore();
  }
}

function resetScore() {
  playerScore = 0;
  computerScore = 0;
  displayScore();
}
