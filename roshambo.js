// return a random int between 0 and maxRange
function getEnemyChoice(maxRange = 3) {
    return Math.floor(Math.random() * maxRange);
}
// prompt the player for maxRounds and return that value
function getMaxRounds(msg, initVal = 5) {
    let maxRounds;

    while (true) {
        maxRounds = prompt(msg, initVal);
        if (maxRounds === null) return null;
        if (!isNaN(maxRounds)) {
            if(maxRounds <= 0) continue;
            return maxRounds;
        }
    }
}
// prompt the player for a specific value and return that value
function getPlayerChoice(msg, choices) {
    let playerChoice;

    while (true) {
        playerChoice = prompt(msg);
        if (playerChoice === null) return null;
        let test = choices.findIndex(n => n.toLowerCase() === playerChoice.toLowerCase() || n.charAt(0).toLowerCase() == playerChoice.toLowerCase());
        if (test !== -1) return test;
    }
}
// game loop
function game() {
    let playerChoice, enemyChoice;
    let playerWins = 0;
    let enemyWins = 0;

    const choices = ['Rock', 'Paper', 'Scissors'];

    let maxRounds = getMaxRounds("Best out of?");
    if (maxRounds === null) return; // cancel

    let roundsToWin = Math.ceil((maxRounds / 2) + 0.01);

    for (let round = 1; round <= maxRounds; round++) {
        // player input
        playerChoice = getPlayerChoice(`[R]ock, [P]aper, or [S]cissors? (Round ${round} of ${maxRounds})`, choices);
        if (playerChoice === null) return; // cancel
        // computer "input"
        enemyChoice = getEnemyChoice(choices.length);

        if (playerChoice === enemyChoice) {
            // player ties round
            console.log('A Tie! Try again!');
            round--;
            continue;
        } else if (playerChoice > enemyChoice || (playerChoice == 0 && enemyChoice == 2)) {
            // player wins round
            console.log(`You Win! ${choices[playerChoice]} beats ${choices[enemyChoice]} [Wins: ${++playerWins}]`);
            if (playerWins >= roundsToWin) {
                // player wins game
                console.log(`Congratulations! You have won ${playerWins} out of ${maxRounds} rounds!`);
                return;
            }
        } else {
            // player loses round
            console.log(`You Lose! ${choices[enemyChoice]} beats ${choices[playerChoice]}  [Losses: ${++enemyWins}]`);
            if (enemyWins >= roundsToWin) {
                // player loses game
                console.log(`Defeat! The computer has won ${enemyWins} out of ${maxRounds} rounds!`);
                return;
            }
        }
    }
}

game();