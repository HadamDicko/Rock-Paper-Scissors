let wins = 0;
let losses = 0;
let ties = 0;

const choices = ['rock', 'paper', 'scissors'];

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.dataset.choice;
        const computerChoice = getComputerChoice();
        const result = determineWinner(userChoice, computerChoice);

        updateScores(result);
        displayResult(userChoice, computerChoice, result);
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(user, computer) {
    if (user === computer) return 'tie';
    if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        return 'win';
    }
    return 'lose';
}

function updateScores(result) {
    if (result === 'win') {
        wins++;
        document.getElementById('wins').textContent = wins;
    } else if (result === 'lose') {
        losses++;
        document.getElementById('losses').textContent = losses;
    } else {
        ties++;
        document.getElementById('ties').textContent = ties;
    }
}

function displayResult(user, computer, result) {
    document.getElementById('result').textContent = `You chose ${user}, Computer chose ${computer}. You ${result}!`;
}

// Reset functionality
document.getElementById('reset').addEventListener('click', () => {
    wins = 0;
    losses = 0;
    ties = 0;

    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
    document.getElementById('ties').textContent = ties;
    document.getElementById('result').textContent = ""; // Clear the result message
});
