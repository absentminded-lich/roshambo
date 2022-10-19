// return rand int between 1 and 3
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}
// return string corresponding int
function getIntChoice(strChoice) {
    switch(strChoice.toLowerCase()) {
        case 'p':
        case 'paper':
            return 0;
        case 's':
        case 'scissors':
            return 1;
        case 'r':
        case 'rock': 
            return 2;
        default:
            return undefined;
    }
}
// return int corresponding string
function getStrChoice(intChoice) {
    switch(intChoice) {
        case 0: return 'Paper';
        case 1: return 'Scissors';
        case 2: return 'Rock';
        default: return undefined;
    }
}
// process outcome and return as string message
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        // player ties
        return 'A Tie! An interesting declaration beats this generic one.';
    } else if (playerSelection > computerSelection || (playerSelection === 2 && computerSelection == 0)) {
        // player wins
        return 'You Win! ' + getStrChoice(playerSelection) + ' beats ' + getStrChoice(computerSelection);
    } else {
        // player loses
        return 'You Lose! ' + getStrChoice(computerSelection) + ' beats ' + getStrChoice(playerSelection);
    }
}

let playerSelection = 0; // rock
let computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));