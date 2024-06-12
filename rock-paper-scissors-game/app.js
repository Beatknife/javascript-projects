const choices = ["Rock", "Paper", "Scissors"]
const playerChoiceDisplay = document.getElementById("playerChoiceDisplay");
const computerChoiceDisplay = document.getElementById("computerChoiceDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    resultDisplay.classList.remove("greenText", "redText", "whiteText");

    if (playerChoice === computerChoice) {
        resultDisplay.classList.add("whiteText");
        result = "It's a tie!";
    }
    else {
        switch(playerChoice) {
            case "Rock":
                result = (computerChoice === "Scissors") ? "You Win!" : "You Lose!";
                break;
            case "Paper":
                result = (computerChoice === "Rock") ? "You Win!" : "You Lose!";
                break;
            case "Scissors":
                result = (computerChoice === "Paper") ? "You Win!" : "You Lose!";
                break;
        }
    }

    playerChoiceDisplay.textContent = `Player: ${playerChoice}`
    computerChoiceDisplay.textContent = `Computer: ${computerChoice}`
    resultDisplay.textContent = result;


    switch(result) {
        case "You Win!":
        resultDisplay.classList.add("greenText");
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        break;
        case "You Lose!":
        resultDisplay.classList.add("redText");
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        break;
    }
}
