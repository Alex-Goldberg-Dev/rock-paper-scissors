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
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {console.log('You Win! Rock beats Scissors'); return 'player';}
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {console.log('You Win! Scissors beats Paper'); return 'player';}
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {console.log('You Win! Paper beats Rock'); return 'player';}
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {console.log('You Lose! Paper beats Rock'); return 'computer';}
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {console.log('You Lose! Rock beats Scissors'); return 'computer';}
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {console.log('You Lose! Scissors beats Paper'); return 'computer';}
    else {console.log('Draw!'); return 'draw'}
  }

const playerSelection = "rock";
const computerSelection = getComputerChoice();

// function to play a best-of-five series
function game() {
    let playerWins = 0;
    let computerWins = 0
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Select rock, paper, or scissors!');
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        if (result === 'player') playerWins++;
        else if (result === 'computer') computerWins++;
        else i--;
        if (playerWins === 3 || computerWins === 3) i = 5;
        else console.log(`User: ${playerWins} Computer: ${computerWins}`)
    }
    if (playerWins === 3) {console.log('Congratulations! You win!')}
    else {console.log('Try again! You lose!')}
}
