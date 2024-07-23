const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function getHumanChoice() {
    let input;

    while (true) {
        input = prompt("Rock, Paper or Scissors?");

        if (input === null){
            alert("You must type one of the following: Rock, Paper or Scissors.")
            continue
        }

        input = input.toLowerCase();

        if (input === "rock" || input === "paper" || input === "scissors") {
            return input;
        } else {
            alert("Invalid input. Please enter Rock, Paper, or Scissors.");
        }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice ) {
        humanChoice = humanChoice.toLowerCase();

        if(humanChoice === computerChoice) {
            console.log("It's a tie!")
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You won the round! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You lost the round! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`);
            computerScore++;
        }
        console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
    }

    for(let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(`Round ${i + 1}:`);
        console.log("Human chose:", humanChoice);
        console.log("Computer chose:", computerChoice);
        playRound(humanChoice, computerChoice);
    }

    if(humanScore > computerScore) {
        console.log(`Congratulations! You won the game with a score of ${humanScore} to ${computerScore}`);
    } else if (humanScore < computerScore)  {
        console.log(`Sorry! You lost the game. The final score is ${computerScore} to ${humanScore}`);        
    } else {
        console.log(`It's a tie! With both scores at ${humanScore}`)
    }
}

playGame();

