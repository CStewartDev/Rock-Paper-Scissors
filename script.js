let compScore = 0;
let playerScore = 0;
let final = false;

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

const btns = document.querySelectorAll('[data-key]');
const compSpan = document.querySelector('[data-comp-score]')
const yourSpan = document.querySelector('[data-your-score]')

btns.forEach(btn => {
    btn.addEventListener('click', e => {
        btn.classList.add('click');
        btn.addEventListener('transitionend',removeTransition);
        const selectionName = btn.dataset.key;
        const selection = SELECTIONS.find(selection=> selection.name === selectionName)
        makeSelection(selection)
    })
})


function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('click');
  }

function makeSelection(selection) {
    const score = document.querySelector('.score')
    let computerSelection = randomSelection();
    const youWin = isWinner(selection,computerSelection);
    const pcWin = isWinner(computerSelection,selection);
    if(youWin) playerScore++
    if(pcWin) compScore++ 
    (() => {if(playerScore === 5 || compScore ===5) final = true})();
    if(final) {
        score.textContent = finalScore();
    } else score.textContent = result(selection,youWin, computerSelection, pcWin);

    compSpan.textContent = compScore;
    yourSpan.textContent = playerScore;
}
//Time to make a GUI and clean up some of this behavior. NO MORE PROMPTS!!! YUS!
 //Create element for each rock, paper,scissors
 // each one can have a data attribute to identify them.
 // add event listeners for player selection
 // Add a scoreboard to show the matches
 // show final score after 5 rounds have gone, excluding Draws.
 

