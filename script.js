
//  Create two new variables named humanScore and computerScore in the global scope.
// rounds played added
    let humanScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;

//  Write the logic to play the entire game for 5 rounds and declare a winner at the end.
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

// function to get computers choice 

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// The logic to get the human choice

function getHumanChoice() {
    let userInput = prompt("Which one do you choose: rock, paper or scissors?");
    userInput = userInput.toLowerCase(); 
    // check for valid choice
    const validChoices = ["rock", "paper", "scissors"];
    if (validChoices.includes(userInput)) {
        return userInput;
    } else {
        alert("Wrong input, please try again and enter rock, paper or scissors!");
    }
    // prompt again
    return getHumanChoice();
}

// Write the logic to play a single round

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
        // Increment the humanScore variable based on the round winner.
        humanScore++;
    } else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        // Increment the computerScore variable based on the round winner.
        computerScore++;
    }
  }

playGame();

