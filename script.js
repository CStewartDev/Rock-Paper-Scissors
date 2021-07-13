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

let randomSelection = () => {
    let comp = Math.floor(Math.random()*SELECTIONS.length);
    return SELECTIONS[comp]
}

let yourSelection = (key) => {
    const selection = SELECTIONS.find(selection=> selection.name === key)
    return selection;
}

let isWinner = (selection,opponentSelection) => selection.beats === opponentSelection.name

let playround = (key) => {
    let computerSelection = randomSelection();
    let playerSelection = yourSelection(key);
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
        } else if (youWin === false && pcWin === false){;
            return `Draw. Try again.
            ${scoreBoard()}` 
        } else { return ""
        }
}


function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('click');
  }

function selectionMade(e) {
    const key = e.target.dataset.key;
    const btn = document.querySelector(`button[data-key="${key}"]`);
    const score = document.querySelector('.score');
    btn.classList.add('click')
    score.textContent = playround(key);
}

const btns = document.querySelectorAll('.btn');
btns.forEach(btn=>btn.addEventListener('click',selectionMade));
btns.forEach(btn=>btn.addEventListener('transitionend',removeTransition));


 //Time to make a GUI and clean up some of this behavior. NO MORE PROMPTS!!! YUS!
 //Create element for each rock, paper,scissors
 // each one can have a data attribute to identify them.
 // add event listeners for player selection
 // Add a scoreboard to show the matches
 // show final score after 5 rounds have gone, excluding Draws.
 

