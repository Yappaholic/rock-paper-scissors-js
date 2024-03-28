const ROCK = document.querySelector("#rock")
const RESULT = document.querySelector("#result")
const FINAL = document.createElement("h2")
const PAPER = document.querySelector("#paper")
const SCISSORS = document.querySelector("#scissors")
const DIV = document.querySelector("#title")
const TITLE = document.createElement("h1")
const BUTTON = document.querySelector("button")
const choice = ["rock", "paper", "scissors"]
let playerCount = 0
let computerCount = 0
let roundCount = 0

function getComputerChoice() {
  const random = Math.floor(Math.random() * choice.length);
  return choice[random]
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    return NaN
  } else if (playerChoice == choice[0] && computerChoice == choice[1]) {
    computerCount += 1;
  } else if (playerChoice == choice[2] && computerChoice == choice[0]) {
    computerCount += 1;
  } else if (playerChoice == choice[1] && computerChoice == choice[2]) {
    computerCount += 1;
  } else if (playerChoice == choice[0] && computerChoice == choice[2]) {
    playerCount += 1;
  } else if (playerChoice == choice[1] && computerChoice == choice[0]) {
    playerCount += 1;
  } else if (playerChoice == choice[2] && computerChoice == choice[1]) {
    playerCount += 1;
  };
  if (playerCount >= 5) {
    FINAL.textContent = "You win!"
    RESULT.appendChild(FINAL)
  } else if (computerCount >= 5) {
    FINAL.textContent = "You lose!"
    RESULT.appendChild(FINAL)
  }
  console.log(computerCount)
};
ROCK.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
  });
PAPER.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
  });
SCISSORS.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());  
  });
TITLE.style.textAlign = "center";
TITLE.textContent = "Round : 1";
let round = 1
BUTTON.addEventListener("click", () => {
  round += 1
  TITLE.textContent = "Round : " + round
});
 DIV.appendChild(TITLE);
