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
let wrongGuesses;  // Array to hold incorrect letters
let secret;  // Array of the chars for the randomly selected word
let guess;  // Array of current guessed letters
let gameStatus;  // null -> game in progress; 'W' -> won; 'L' -> lost

/*----- cached element references -----*/
const replayBtn = document.getElementById('play-again-btn');
const guessEl = document.getElementById('guess');
const spacemanImg = document.querySelector('img');
const letterBtns = [...document.querySelectorAll("article > button")]

/*----- event listeners -----*/
document.querySelector('article')
    .addEventListener('click', handleLetterClick);

/*----- functions -----*/
init();

function init() {
    wrongGuesses = [];
    const rndIdx = Math.floor(Math.random() * WORDS.length);
    secret = WORDS[rndIdx].toUpperCase().split('');
    // map always returns a NEW array of the same # of elements
    guess = secret.map(ltr => ltr === ' ' ? ' ' : '_');
    gameStatus = null;
    console.log("hello", secret)
    render();
}

function render() {
    // render the message
    // render the spaceman
    spacemanImg.src = `images/spaceman-${wrongGuesses.length}.jpeg`;
    // render the guess
    guessEl.textContent = guess.join('');
    // render the buttons
    renderButtons();
}

function renderButtons() {
    letterBtns.forEach(function(btn) {
        ltr = btn.textContent
        if (wrongGuesses.includes(ltr)) {
            btn.className = "wrong";
        } else if (guess.includes(ltr)) {
            btn.className = "correct";
        } else {
            btn.className = "";
        }
    })
    replayBtn.style.visibility = gameStatus ? 'visible' : 'hidden';
}

function handleLetterClick(evt) {
    const ltr = evt.target.textContent;
    // guards
    if (
        gameStatus ||
        evt.target.tagName !== 'BUTTON' ||
        wrongGuesses.includes(ltr) ||
        guess.includes(ltr)
    ) return;

    if (secret.includes(ltr)) {
        //correct guess
        secret.forEach(function(char, idx) {
            if (char === ltr) guess[idx] = ltr
        });
    } else {
        //wrong guess
        wrongGuesses.push(ltr);
    }
    render();

}