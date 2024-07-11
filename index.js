function getComputerChoice(){
    const game = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * game.length);
    const randomChoice = game[random];
    return randomChoice;
}

console.log(getComputerChoice());

function getHumanChoice() {
    prompt("Type one: Rock, Paper or Scissors?")
    return 

}

getHumanChoice()
console.log(getHumanChoice())