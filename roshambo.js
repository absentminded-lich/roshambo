function generateRndVerb(withSpaces = true) {
    const verbs = ['slays', 'beats', 'conquers', 'overpowers', 'destroys', 'overwhelms', 'massacres', 'butchers',
        'zaps', 'erases', 'slaughters', 'kills', 'trounces', 'pulverizes', 'demolishes', 'annihilates', 'obliterates',
        'eliminates', 'exterminates', 'eradicates', 'liquidates', 'vanquishes', 'subdues', 'clobbers', 'quashes'];
    return (withSpaces ? ' ' : '') + verbs[Math.floor(Math.random() * verbs.length)].toUpperCase() + (withSpaces ? ' ' : '');
}

function getCPUSelection(maxRange = 3) {
    return Math.floor(Math.random() * maxRange);
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
    document.querySelector('#output').textContent = msg;
    console.log(msg);
}

function playRound(playerChoice) {
    let playerSelection = choices.findIndex(choice => playerChoice === choice);

    let cpuSelection = getCPUSelection();

    if (playerSelection === cpuSelection) {
        // player ties round
        outMsg('BALANCED');
    } else if (playerSelection > cpuSelection || (playerSelection == 0 && cpuSelection == 2)) {
        // player wins round
        outMsg(choices[playerSelection].toUpperCase() + generateRndVerb() + choices[cpuSelection].toUpperCase());
        incPlayerScore();
        if (playerScore >= minRounds) {
            outMsg('VICTORY');
        }
    } else {
        // player loses round
        outMsg(choices[cpuSelection].toUpperCase() + generateRndVerb() + choices[playerSelection].toUpperCase());
        incCPUScore();
        if (cpuScore >= minRounds) {
            outMsg('DEFEAT');
        }
    }
}

let cpuScore = 0;
let maxRounds = 9;
let playerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

let minRounds = Math.ceil((maxRounds / 2) + 0.01);

const btns = document.querySelectorAll('button');
btns.forEach(btn => {
    btn.addEventListener('click', () => playRound(btn.id));
    btn.addEventListener('mousedown', () => {
        btn.style.background = 'white';
        btn.style.color = 'black';
    });
    btn.addEventListener('mouseup', () => {
        btn.style.background = 'black';
        btn.style.color = 'white';
    });
});

const scores = document.querySelectorAll('.score');
scores.forEach(score => score.textContent = 0);