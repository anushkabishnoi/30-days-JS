const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')

let userChoice  //made global variable
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => 
{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
} ))

function generateComputerChoice()
{
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
   
    if (randomNumber === 1)
    computerChoice = 'rock' 

    if (randomNumber === 2)
    computerChoice = 'scissors'

    if (randomNumber === 3)
    computerChoice = 'paper'

computerChoiceDisplay.innerHTML = computerChoice
}

function getResult()
{
    if (computerChoice === userChoice)
    {result = 'its a draw!'}

    if(computerChoice === "rock" && userChoice === "paper")
    {result = "you win!"}

    if (computerChoice === "paper" && userChoice === "scissors")
    {result = 'you win!'}

    if(computerChoice === "scissors" && userChoice === "rock")
    {result = 'you win!'}

    else 
    {result = 'you lose!'}

    resultDisplay.innerHTML = result
}

//-------THEME PART---------

const bg = document.querySelector('#body')

bg.classList.toggle()