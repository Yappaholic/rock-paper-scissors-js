const choice = ["rock", "paper", "scissors"]
function getComputerChoice() {
  const random = Math.floor(Math.random() * choice.length);
  console.log(choice[random])
  return choice[random]
}
function playRound(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    console.log("Draw")
  } else if (playerChoice == choice[0] && computerChoice == choice[1]) {
    console.log("You lose!")
  } else if (playerChoice == choice[2] && computerChoice == choice[0]) {
    console.log("You lose!")
  } else if (playerChoice == choice[1] && computerChoice == choice[2]) {
    console.log("You lose!")
  } else if (playerChoice == choice[0] && computerChoice == choice[2]) {
    console.log("You win!")
  } else if (playerChoice == choice[1] && computerChoice == choice[0]) {
    console.log("You win!")
  } else if (playerChoice == choice[2] && computerChoice == choice[1]) {
    console.log("You win!")
  }
}
const playerChoice = (prompt("Your choice?").toLowerCase())
playRound(playerChoice, getComputerChoice())
