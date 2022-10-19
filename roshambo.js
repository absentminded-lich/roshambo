// return rand int between 1 and 3
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}
// return int corresponding string
function displayChoice(numChoice) {
    switch(numChoice) {
        case 0: return 'Paper';
        case 1: return 'Scissors';
        case 2: return 'Rock';
        default: return 'N/A';
    }
}
// process outcome and return as string message
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        // player ties
        return 'A Tie! An interesting declaration beats this generic one.';
    } else if (playerSelection > computerSelection || (playerSelection === 2 && computerSelection == 0)) {
        // player wins
        return 'You Win! ' + displayChoice(playerSelection) + ' beats ' + displayChoice(computerSelection);
    } else {
        // player loses
        return 'You Lose! ' + displayChoice(computerSelection) + ' beats ' + displayChoice(playerSelection);
    }
}

let playerSelection = 1; // rock
let computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));