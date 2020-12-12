// Function that takes input from user
// Fucntion that takes input from Computer
// Function that compares inputs and impacts winner
// Function that u can provide varibales

let userInput = prompt("Podaj swoją odpowiedź");

function userChoice(userInput) {

    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else if (userInput === '') {
        return 'nope';
    }
    else {
        return 'nope';
    }
}



function computerChoice() {
    const randomAnswer = Math.floor(Math.random() * 3);

    if (randomAnswer === 0) {
        return 'rock';
    }
    else if (randomAnswer === 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

const users = userChoice(userInput);
const computers = computerChoice();

function whoIsWinner(users, computers) {
    if (computers === users) {
        return `It's draw!`;
    }

    if (users === 'rock') {
        if (computers === 'scissors') {
            return `User won!`;
        } else {
            return `Computer won!`;
        }
    } else if (users === 'scissors') {
        if (computers === 'rock') {
            return 'Computer won!';
        } else {
            return 'User won';
        }
    } else if (users === 'bomb') {
        return 'User won';
    }
    else {
        if (computers === 'scissors') {
            return 'Computer won!';
        } else {
            return 'User won!'
        }
    }
}


function playGame() {
    const getUserChoice = userChoice(userInput);
    if (getUserChoice === 'nope') {
        console.log("Nie umiesz w to grać");
        return;
    }
    const getComputerChoice = computerChoice();
    console.log(`User picked ${getUserChoice}!`);
    console.log(`Computer picked ${getComputerChoice}!`);
    const winner = whoIsWinner(getUserChoice, getComputerChoice);
    console.log(winner);
}
playGame();

