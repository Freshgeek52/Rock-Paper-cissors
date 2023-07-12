function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  // Testing the function
  console.log(getComputerChoice());

  function playRound(playerSelection, computerSelection) {
    // Convert playerSelection to lowercase for case-insensitive comparison
    playerSelection = playerSelection.toLowerCase();
  
    // Validate playerSelection
    if (
      playerSelection !== 'rock' &&
      playerSelection !== 'paper' &&
      playerSelection !== 'scissors'
    ) {
      return 'Invalid selection. Please choose either Rock, Paper, or Scissors.';
    }
  
    // Determine the winner
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
  
  // Testing the function
  const playerSelection = 'Rock';
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
    
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      const playerSelection = getPlayerSelection();
      const computerSelection = getComputerChoice();
  
      const result = playRound(playerSelection, computerSelection);
      console.log(result);
  
      if (result.includes('Win')) {
        playerScore++;
      } else if (result.includes('Lose')) {
        computerScore++;
      }
    }
  
    console.log(`Final Score - You: ${playerScore} | Computer: ${computerScore}`);
  
    if (playerScore > computerScore) {
      console.log('Congratulations! You win the game!');
    } else if (playerScore < computerScore) {
      console.log('Oops! You lose the game.');
    } else {
      console.log("It's a tie game!");
    }
  }
  
  function getPlayerSelection() {
    let playerSelection = prompt(
      'Enter your choice: Rock, Paper, or Scissors'
    );
  
    // Keep prompting until a valid selection is made
    while (
      playerSelection !== 'rock' &&
      playerSelection !== 'paper' &&
      playerSelection !== 'scissors'
    ) {
      playerSelection = prompt(
        'Invalid selection. Please choose either Rock, Paper, or Scissors.'
      );
    }
  
    return playerSelection;
  }
  
  // Start the game
  game();
  