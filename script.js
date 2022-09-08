function getComputerChoice() {
    // generate random number, multiply by 3, and round to an integer
    const randNum = Math.floor((Math.random() * 3) + 1);
    // check the number and return ‘Rock’, ‘Paper’ or ‘Scissors’
    if (randNum === 1) return 'rock';
    else if (randNum === 2) return 'paper';
    else return 'scissors';
}

function playRound(playerSelection, computerSelection) {
    // compare the choices and return the winner accordingly
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') return 'You Win! Rock beats Scissors';
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') return 'You Win! Scissors beats Paper';
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') return 'You Win! Paper beats Rock';
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') return 'You Lose! Paper beats Rock';
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') return 'You Lose! Rock beats Scissors';
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') return 'You Lose! Scissors beats Paper';
    else return 'Draw!'
  }

  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));


/*
Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports
a winner or loser at the end.
Remember loops? This is a great opportunity to use one to play those five rounds:

for (let i = 0; i < 5; i++) {
   // your code here!
}
At this point you should be using console.log() to display the results of each round and the winner at the end.
Use prompt() to get input from the user. Read the docs here if you need to.
Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
Feel free to create more “helper” functions if you think it would be useful.
*/
