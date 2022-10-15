function getComputerChoice() {
    let rng = Math.floor(Math.random() * 3);
    switch(rng) {
        case 0: return 'Rock';
        case 1: return 'Scissors';
        case 2: return 'Paper';
        default: return 'How are you here?!';
    }
}

console.log(getComputerChoice());