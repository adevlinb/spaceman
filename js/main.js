/*----- constants -----*/
const MAX_WRONG_GUESSES = 5;
const WORDS = [
    'black hole',
    'planets',
    'space force',
    'light speed',
    'interstellar',
    'exploration',
    'cosmic',
    'sputnik',
    'gravity',
    'asteroid',
    'galaxy',
    'star'
];




/*----- app's state (variables) -----*/
let wrongGuesses; //array to hold incorrect letters
let secret; // array of the chars for the randomly selected word
let guess; // array of current guessed letters
let gameStatus; // null -> game in progress; "W" -> win, "L" -> lost

/*----- cached element references -----*/
const replayBtn = document.getElementById("play-again-btn");
const guessEl = document.getElementById("guess")
const spacemanImg = document.querySelector('img')



/*----- event listeners -----*/
document.querySelector("article")
    .addEventListener("click", handleLetterClick);



/*----- functions -----*/

function init() {
    wrongGuesses = [];
    const randomIdx = Math.floor(Math.random() * WORDS.length);
    secret = WORDS[randomIdx].split("")
    guess = secret.map((letter) => letter === " " ? " " : "_");
    gameStatus = null;
    render();
}

function render() {
    // render the message
    spacemanImg.src = `imgs/spaceman-${0}.jpg`
    guessEl.textContent = guess.join("")
    // render the buttons
    renderButtons();


}

function renderButtons() {
    replayBtn.style.visibility = winner ? 'visible' : 'hidden';
}

function handleLetterClick(e) {
    const letter = e.target.textContent;
    //guards if game is over
    if(
        gameStatus || 
        e.target.tabName !== "BUTTON" ||
        wrongGuesses.includes(letter) ||
        guessArray.includes(letter) ||
    ) return

}
