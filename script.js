
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return "You win! " + humanChoice + " beats " + computerChoice;
    } else {
        computerScore++;
        return "You lose! " + computerChoice + " beats " + humanChoice;
    }
}

function updateScore() {
    const scoreDiv = document.getElementById('score');
    scoreDiv.textContent = "Your Score: " + humanScore + " | Computer's Score: " + computerScore;
}

function checkWinner() {
    if (humanScore === 5) {
        document.getElementById('result').textContent = "Congratulations! You won the game!";
        disableButtons();
    } else if (computerScore === 5) {
        document.getElementById('result').textContent = "Sorry, you lost the game!";
        disableButtons();
    }
}

function disableButtons() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}

// Event listeners for buttons
document.getElementById('rock').addEventListener('click', () => {
    const result = playRound('rock', getComputerChoice());
    document.getElementById('result').textContent = result;
    updateScore();
    checkWinner();
});

document.getElementById('paper').addEventListener('click', () => {
    const result = playRound('paper', getComputerChoice());
    document.getElementById('result').textContent = result;
    updateScore();
    checkWinner();
});

document.getElementById('scissors').addEventListener('click', () => {
    const result = playRound('scissors', getComputerChoice());
    document.getElementById('result').textContent = result;
    updateScore();
    checkWinner();
});