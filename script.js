let compScore = 0;
let playerScore = 0;
const SELECTIONS = [
    {
        name: 'ROCK',
        beats: 'SCISSORS'
    },
    {
        name: 'PAPER',
        beats: 'ROCK'
    },
    {
        name: 'SCISSORS',
        beats: 'PAPER'
    }
]

let validatePlayerSelection = () => {
    let valid = 0;
    let playerSel;
    do {
        playerSel = prompt("ROCK,PAPER,SCISSORS?").toUpperCase();
        if(playerSel === "ROCK" || playerSel === "PAPER" || playerSel === "SCISSORS") {
            valid = 1;
            return playerSel
        }
    } while(valid !== 1);
}

let randomSelection = () => {
    let comp = Math.floor(Math.random()*SELECTIONS.length);
    return SELECTIONS[comp]
}

let yourSelection = () => {
    const validSelection = validatePlayerSelection();
    const selection = SELECTIONS.find(selection=> selection.name === validSelection)
    return selection;
}

let isWinner = (selection,opponentSelection) => selection.beats === opponentSelection.name

let playround = () => {
    let computerSelection = randomSelection();
    let playerSelection = yourSelection();
    const youWin = isWinner(playerSelection,computerSelection)
    const pcWin = isWinner(computerSelection,playerSelection)
    return result(playerSelection,youWin, computerSelection, pcWin)  
}

let scoreBoard = () => `The score is Player:${playerScore} Computer:${compScore}`

let result = (playerSelection, youWin, computerSelection,pcWin) => {
    if(youWin){
        playerScore++
        return `WINNER! ${playerSelection.name} Beats ${computerSelection.name}
        ${scoreBoard()}`
    } else if (pcWin){
        compScore++
        return `LOSER! ${computerSelection.name} Beats ${playerSelection.name}
        ${scoreBoard()}`
    } else if (youWin === false && pcWin === false){
        return `Draw. Try again.
        ${scoreBoard}` 
    } else {"HMM. That aint right. Try again"}
}

console.log(playround())

let game = () => {
    for(let i = 0;i>5,i++){
        console.log(playround())
    }
}


// let game = () => {
//     for(let i = 0; i<rounds;i++){
//         playerSelection = validatePlayerSelection(playerSelection);
//         console.log(playRound(playerSelection));
//         console.log(scoreBoard())
//     }
//     return scoreBoard()
// }

