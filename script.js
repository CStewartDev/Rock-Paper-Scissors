let playerSelection;
let computerSelection;
let rounds = 5;
let compScore = 0;
let playerScore = 0;


let computerPlay = () => {
    let comp = Math.floor(Math.random()*3) +1;
    if(comp === 1) {
        return "ROCK"
    } else if(comp ===2) {
        return "PAPER"
    } else {
        return "SCISSORS"
    }
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
    } else {return "HMMM, THat ain't right. Try Again."}
}

let validatePlayerSelection = (playerSel) => {
    while(playerSel !== "ROCK" ||playerSel !== "PAPER" ||playerSel !== "SCISSORS") {
        playerSel = prompt("ROCK,PAPER,SCISSORS?")
        playerSel=playerSel.toUpperCase()
        if(playerSel === "ROCK" ||playerSel === "PAPER" ||playerSel === "SCISSORS")
        return playerSel
    }
}

let scoreBoard = () => `The score is Player:${playerScore} Computer:${compScore}`

let game = (playerSelection) => {
    for(let i = 0; i<rounds; i++){
        playRound(playerSelection);
    }
    scoreBoard()
}


computerSelection = computerPlay()
playerSelection = validatePlayerSelection(playerSelection);

console.log(game(playerSelection))
console.log(scoreBoard())
