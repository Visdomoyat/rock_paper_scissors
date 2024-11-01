/*-----------------------constants-------------------------------------*/
const choices = ['rock', 'paper', 'scissors'];



/*-----------------------Variable-------------------------------------*/
let playerChoice;
let computerChoice;
let msg;

/*-----------------------cached element references-------------------------------------*/
const resultDisplayEl = document.querySelector('#result-display');


/*-----------------------functions-------------------------------------*/
function getPlayerChoice(event) {
    playerChoice = event.target.id

}

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randomIndex];
};

function compare() {
    if (playerChoice === computerChoice) {
        msg = 'You tied';
    } else if (playerChoice === choices[0] && computerChoice === choices[2]) {
        // "rock" vs "scissor"
        msg = 'Congrats! You win!';
    } else if (playerChoice === choices[1] && computerChoice === choices[0]) {
        // "paper" vs "rock"
        msg = 'congrats! You win!';
    } else if (playerChoice === choices[2] && computerChoice === choices[1]) {
        // "scissors" vs "paper"
        msg ='congrats! You win!';
    } else {
        msg = 'You lose! Try again?';
    }
};

function render() {
    resultDisplayEl.textContent =`You chose ${playerChoice} and computer chose ${computerChoice}. ${msg}`
};

function play(event) {
    getPlayerChoice(event);
    getComputerChoice();
    compare();
    render();
};

/*-----------------------Event listeners-------------------------------------*/
// REFERENCE: TRY NOT TO USE THE CODE IN LINE 31 THROUGH 33 AND USE THE CODE IN LINE 35-36 TO AVOID REPETITION

// document.querySelector('#rock').addEventListener('click', play);
// document.querySelector('#paper').addEventListener('click', play);
// document.querySelector('#scissors').addEventListener('click', play);

document.querySelectorAll('button').forEach(function (button) {
    button.addEventListener('click', play)
})
