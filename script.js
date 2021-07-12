let compScore = 0;
let playerScore = 0;
let rounds = 5;
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

let scoreBoard = (isFinal) => `The score is Player:${playerScore} Computer:${compScore}`

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
        rounds++;
        return `Draw. Try again.
        ${scoreBoard()}` 
    } else {
        rounds++
        return "HMM. That aint right. Try again"
    }
}

let game = () => {
    for(let i = 0;i<rounds;i++){
        console.log(playround())
    }
    return `The FINAL score is Player:${playerScore} Computer:${compScore}`
}
 console.log(game())

 //Time to make a GUI and clean up some of this behavior. NO MORE PROMPTS!!! YUS!
 //Create element for each rock, paper,scissors
 // each one can have a data attribute to identify them.
 // add event listeners for player selection
 // Add a scoreboard to show the matches
 // show final score after 5 rounds have gone, excluding Draws.
 

