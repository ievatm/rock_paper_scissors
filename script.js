
    let humanScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;

function playGame() {

    while (roundsPlayed <5 && humanScore <3 && computerScore <3) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice(); 
        playRound(humanSelection, computerSelection);
        roundsPlayed++;
        alert("Round " + roundsPlayed + " played! Your score: " + humanScore + ". Computers score: " + computerScore + ".")
    }

    if (humanScore > computerScore) {
        alert("You win!");
    } else if (humanScore < computerScore) {
        alert("You lose!");
    } else {
       alert("It's a tie!");
    }
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let userInput = prompt("Which one do you choose: rock, paper or scissors?");
    userInput = userInput.toLowerCase(); 
    const validChoices = ["rock", "paper", "scissors"];
    if (validChoices.includes(userInput)) {
        return userInput;
    } else {
        alert("Wrong input, please try again and enter rock, paper or scissors!");
    }
    // prompt again
    return getHumanChoice();
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
         (humanChoice === "rock" && computerChoice === "scissors") ||
         (humanChoice === "paper" && computerChoice === "rock") ||
         (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    } else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
  }

playGame();

