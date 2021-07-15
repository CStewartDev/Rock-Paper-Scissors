let compScore = 0;
let playerScore = 0;
let final = false;
const btns = document.querySelectorAll('[data-key]');
const compSpan = document.querySelector('[data-comp-score]');
const yourSpan = document.querySelector('[data-your-score]');
const score = document.querySelector('.score');

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

let isWinner = (selection,opponentSelection) => selection.beats === opponentSelection.name

let finalScore = () => {
    if(final) return `The final score is Player: ${playerScore} Computer: ${compScore}`
}
    
let result = (playerSelection, youWin, computerSelection,pcWin) => {
        if(youWin){
            return `WINNER this round! ${playerSelection.name} Beats ${computerSelection.name}`
        } else if (pcWin){
            return `LOSER this round! ${computerSelection.name} Beats ${playerSelection.name}`
        } else if (youWin === false && pcWin === false){;
            return `Draw. Try again.` 
        } else { return ""
        }
}

btns.forEach(btn => btn.addEventListener('click', game))

function isGameOver() {
    if(playerScore === 5 || compScore ===5) final = true;
}

function game() {
    if(final) return;
    this.classList.add('click');
    this.addEventListener('transitionend',removeTransition);
    const selectionName = this.dataset.key;
    const selection = SELECTIONS.find(selection=> selection.name === selectionName)
    makeSelection(selection)
}


function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('click');
  }

function makeSelection(selection) {    
    let computerSelection = randomSelection();
    const youWin = isWinner(selection,computerSelection);
    const pcWin = isWinner(computerSelection,selection);
    if(youWin) playerScore++
    if(pcWin) compScore++ 
    isGameOver();
    if(final) {
        score.textContent = finalScore();
        const reset = document.createElement('button');
        reset.classList.add('reset');
        reset.textContent = "Another Round?"
        score.appendChild(reset);
        reset.addEventListener('click',resetGame)
    } else {
        score.textContent = result(selection,youWin, computerSelection, pcWin)
    };

    compSpan.textContent = compScore;
    yourSpan.textContent = playerScore;
}

function resetGame () {
    compScore = 0;
    playerScore = 0;
    final = false;
    compSpan.textContent = compScore;
    yourSpan.textContent = playerScore;
    score.textContent = "";
}
 

