//  Create two new variables named humanScore and computerScore in the global scope.
let humanScore = 0;
let computerScore = 0;

// function to get computers choice 

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

console.log(getComputerChoice());

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

console.log(getHumanChoice());



