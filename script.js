const userScoreElem = document.getElementById('UserScore');
const compScoreElem = document.getElementById('CompScore');
const userHandElem = document.getElementById('UserHand');
const compHandElem = document.getElementById('CompHand');
const messageElem = document.getElementById('message');

const choices = ['rock', 'paper', 'scissors'];
const emojis = {
    'rock': 'images/RockButton.png',
    'paper': 'images/PaperButton.png',
    'scissors': 'images/ScissorsButton.png'
};

let userScore = 0;
let compScore = 0;

document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

function playGame(userChoice) {
    const compChoice = choices[Math.floor(Math.random() * 3)];
    
    userHandElem.src = emojis[userChoice];
    compHandElem.src = emojis[compChoice];

    if (userChoice === compChoice) {
        messageElem.textContent = 'It\'s a draw!';
    } else if (
        (userChoice === 'rock' && compChoice === 'scissors') ||
        (userChoice === 'paper' && compChoice === 'rock') ||
        (userChoice === 'scissors' && compChoice === 'paper')
    ) {
        userScore++;
        userScoreElem.textContent = userScore;
        messageElem.textContent = 'You win!';
    } else {
        compScore++;
        compScoreElem.textContent = compScore;
        messageElem.textContent = 'Computer wins!';
    }
}