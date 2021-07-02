let playerSelection;
let computerSelection;
let rounds = 5;
let compScore = 0;
let playerScore = 0;
let moves = ["ROCK","PAPER","SCISSORS"]


let computerPlay = () => {
    let comp = Math.floor(Math.random()*3);
    return moves[comp]
}

let playRound = (playerSelection) => {
    let computerSelection = computerPlay();
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if(playerSelection == "ROCK") {
        if(computerSelection === "ROCK"){
            return "Draw. Try again."
        } else if(computerSelection == "SCISSORS") {
            playerScore++;
            return "WINNER! Rock Crushes Scissors!"
        } else if(computerSelection == "PAPER"){
            compScore++; 
            return "Loser! Paper Covers Rock!"
        } else{"HMM. That aint right. Try again"}
    } else if(playerSelection =="SCISSORS"){
        if(computerSelection === "SCISSORS"){
            return "Draw. Try again"
        } else if(computerSelection == "ROCK") {
            compScore++;
            return "LOSER! Rock Crushes Scissors!"
        } else if(computerSelection == "PAPER"){
            playerScore++ 
            return "WINNER! Scissors cut Paper!"
        } else{"HMM. That ain't right. Try again"}
    } else if(playerSelection =="PAPER") {
        if(computerSelection === "PAPER"){
            return "Draw. Try again"
        } else if(computerSelection == "ROCK") {
            playerScore++;
            return "WINNER! Paper Covers Rock!"
        } else if(computerSelection == "SCISSORS"){
            compScore++; 
            return "LOSER! Scissors cut Paper!"
        } else{"HMM. That ain't right. Try again"}
    } else {return "HMMM, That ain't right. Try Again."}
}

let validatePlayerSelection = (playerSel) => {
    let valid = 0;
    do {
        playerSel = prompt("ROCK,PAPER,SCISSORS?").toUpperCase();
        if(playerSel === "ROCK" || playerSel === "PAPER" || playerSel === "SCISSORS") {
            valid = 1;
        }
    return playerSel }
    while(valid !== 1);
}

let scoreBoard = () => `The score is Player:${playerScore} Computer:${compScore}`

let game = () => {
    for(let i = 0; i<rounds; i++){
        playerSelection = validatePlayerSelection(playerSelection);
        console.log(playRound(playerSelection));
        console.log(scoreBoard())
    }
    return scoreBoard()
}


computerSelection = computerPlay()


console.log(game())
