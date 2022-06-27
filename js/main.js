/*----- constants -----*/
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
let winner; // null -> game in progress; "W" -> win, "L" -> lost
let secret; // array of the chars for the randomly selected word
let guess; // array of current guessed letters

/*----- cached element references -----*/





/*----- event listeners -----*/




/*----- functions -----*/

function init() {
    wrongGuesses = [];
    winner = null;
    const randomIdx = Math.floor(Math.random() * WORDS.length);
    secret = WORDS[randomIdx].split("")
    guess = secret.map((letter) => letter === " " ? " " : "_");
    winner = null;
    render();
}

function render() {
    
}
