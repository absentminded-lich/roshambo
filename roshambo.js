// return rand int between 1 and 3
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}
// return user input
function getPlayerChoice() {
    return prompt("Rock, Scissors, or Paper?");
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
            return strChoice;
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
// game loop
function game() {
    let playerSelection, computerSelection;

    for (let i = 0; i < 5; i++) {
        // player input
        while (true) {
            playerSelection = getPlayerChoice();
            if (playerSelection === null) return; // Cancel

            playerSelection = getIntChoice(playerSelection);
            if (!isNaN(playerSelection)) break;
            console.log(`${playerSelection} is not a valid choice!`);
        }
        // computer "input"
        computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
    }
}

game();