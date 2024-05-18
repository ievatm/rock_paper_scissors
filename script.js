//  Create two new variables named humanScore and computerScore in the global scope.
let humanScore = 0;
let computerScore = 0;

// function to get computers choice 

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// console.log(getComputerChoice());

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

// console.log(getHumanChoice());

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
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);