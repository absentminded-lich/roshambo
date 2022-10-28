function endGame() {
    btns.forEach(btn => btn.classList.add('disable'));
}

function generateRndVerb(withSpaces = true) {
    const verbs = ['slays', 'beats', 'conquers', 'overpowers', 'destroys', 'overwhelms', 'massacres', 'butchers',
        'zaps', 'erases', 'slaughters', 'kills', 'trounces', 'pulverizes', 'demolishes', 'annihilates', 'obliterates',
        'eliminates', 'exterminates', 'eradicates', 'liquidates', 'vanquishes', 'subdues', 'clobbers', 'quashes'];
    return (withSpaces ? ' ' : '') + verbs[Math.floor(Math.random() * verbs.length)].toUpperCase() + (withSpaces ? ' ' : '');
}

function getCPUSelection() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function incPlayerScore(inc = 1) {
    playerScore += inc;
    document.querySelector('#player-score').textContent = playerScore;
}

function incCPUScore(inc = 1) {
    cpuScore += inc;
    document.querySelector('#cpu-score').textContent = cpuScore;
}

function outMsg(msg) {
    output.textContent = msg;
    console.log(msg);
}

function playRound(playerSelection) {
    let cpuSelection = getCPUSelection();

    if (playerSelection === cpuSelection) {
        // player ties round
        outMsg('STALEMATE');
    } else if ((playerSelection === 'rock' && cpuSelection === 'scissors') ||
            (playerSelection === 'paper' && cpuSelection === 'rock') ||
            (playerSelection === 'scissors' && cpuSelection === 'paper')) {
        // player wins round
        outMsg(playerSelection.toUpperCase() + generateRndVerb() + cpuSelection.toUpperCase());
        incPlayerScore();
        if (playerScore >= roundsToWin) {
            outMsg('VICTORY');
            endGame();
        }
    } else {
        // player loses round
        outMsg(cpuSelection.toUpperCase() + generateRndVerb() + playerSelection.toUpperCase());
        incCPUScore();
        if (cpuScore >= roundsToWin) {
            outMsg('DEFEAT');
            endGame();
        }
    }
}

let cpuScore = 0;
let playerScore = 0;
let roundsToWin = 5;

const output = document.querySelector('#output');
output.addEventListener('transitionend', () => {
    if (playerScore === roundsToWin || cpuScore === roundsToWin) {
        output.classList.add("fade-out-long");
    }
});

const btns = document.querySelectorAll('button');
btns.forEach(btn => {
    btn.addEventListener('click', () => playRound(btn.id));
    btn.addEventListener('mousedown', () => {
        btn.classList.add('mouse-down');
        output.classList.remove('fade-in');
        output.classList.add('reset');
    });
    btn.addEventListener('mouseup', () => {
        btn.classList.remove('mouse-down');
        output.classList.add('fade-in');
        output.classList.remove('reset');
    });
    btn.addEventListener('mouseout', () => btn.classList.remove('mouse-down'));
});

const scores = document.querySelectorAll('.score');
scores.forEach(score => score.textContent = 0);