//  Initialize a variable for the computers choice 
let computerChoice;
/* Create a function that returns random answer out of: rock, paper, scissors  
This will be for the computers turn */ 
    function getComputerChoice () { 
/* Generate a random number  */ 
        number = Math.floor(Math.random() * 100 + 1)
/*  assign random number to a choice */
        if (number >= 1 && number <= 33 ) {return computerChoice = "rock"}
        else if (number >= 34 && number <= 66) {return computerChoice = "paper"}
        else if (number >= 67 && number <= 100) {return computerChoice = "scissors"} 
    }
/* compare answers to decide winner, loser or if its a tie  */ 
    function playRockPaperScissors (choice) {
        getComputerChoice()
        resultText = '';
        if (choice === "rock" && computerChoice === "scissors") {return resultText = "WIN"}
            else if (choice === "scissors" && computerChoice === "rock") {return resultText = "LOSE"}
            else if (choice === "paper" && computerChoice === "rock") {return resultText = "WIN"}
            else if (choice === "rock" && computerChoice === "paper") {return resultText = "LOSE"}
            else if (choice === "scissors" && computerChoice === "paper" ) {return resultText = "WIN"}
            else if (choice === "paper" && computerChoice === "scissors") {return resultText = "LOSE"}
            else if (choice === "rock" && computerChoice === "rock" ||
                     choice === "paper" && computerChoice === "paper" ||
                     choice === "scissors" && computerChoice === "scissors") {return resultText = "TIE"}
        }
// function to apply temporary green animation when player acquires a point
let win = document.getElementsByClassName('player-counter');
function tempGreen () {
win[0].style.cssText = `
    animation: greenGrow .5s;
    animation-timing-function: ease-in;`
}
// function to apply temporary red animation when computer acquires a point
let lose = document.getElementsByClassName('comp-counter');
function tempRed () {
lose[0].style.cssText = `
 animation: redGrow .5s;
 animation-timing-function: ease-in;
 `
}
// function to temporary yellow to both elements when a tie happens
function tempYellow () {
win[0].style.cssText = `
animation: yellowGrow .5s;
animation-timing-function: ease-in;` 
lose[0].style.cssText = `
animation: yellowGrow .5s;
animation-timing-function: ease-in;
`
}
// function to remove any style attributes before animations are triggered in order for those animations to be called upon repeatedly 
function removeRedGreen () {
    win[0].removeAttribute('style');
    lose[0].removeAttribute('style');
    }
// initialize two global variables for player and comp score to be used later to add score 
let playerscore = 0;
let computerscore = 0;
// create a nodelist containing all buttons 
const choices = document.querySelectorAll('button');
// store that nodelist in a variable while we iterate through the nodelist adding an event listener to each button that listens for a click to fire off the play function 
let choice = choices.forEach(button => button.addEventListener('click',play));
// create the function that is called when one of the buttons is clicked 
function play(e) {
    test = document.getElementsByClassName('counter-container');
    // e.target.className pulls the class name for the clicked button 
    let choice = e.target.className;
    // execute the above comparitive function passing the choice argument through 
    playRockPaperScissors (choice);
    // conditional to add to playerscore if player wins round, add an animation to visualize and then remove that css text so that the animation can be played multiple times 
    if (resultText === "WIN") {
    win[0].innerText = `Player Score: ${playerscore += 1}`;
    tempGreen();
    addEventListener('animationend',removeRedGreen)
    }
    // conditional to add to comp score if comp wins the round, add an animation to visualize and then remove that css text so that the animation can be played multiple times 
        else if (resultText === "LOSE") {
        lose[0].innerText = `Computer Score: ${computerscore += 1}`;
        tempRed();
        addEventListener('animationend',removeRedGreen)

        }
        // conditional to add animation to both comp counter and player counter to show that a ground resulted in a tie
        else if (resultText === "TIE") {
            tempYellow();
        }
    // conditional to check for and declare the player won, as well as reset the score innertext as well as the global variable and add styling
    if (playerscore >= 3){
    outcome = document.getElementsByClassName('outcome')
    outcome[0].innerText = 'YOU WIN';
    outcome[0].style.cssText = 'color:green; background-color: lightblue; border-radius: 10px; border: solid darkgrey 2px; padding: 2px;';
    win[0].innerText = `Player Score: 0`;
    lose[0].innerText = `Computer Score: 0`;
    return playerscore = 0, computerscore = 0;
}
        // conditional to check for and declare the player lost, as well as reset the score innertext as well as the global variable and add styling
        else if (computerscore >= 3){
        outcome = document.getElementsByClassName('outcome');
        outcome[0].innerText = 'YOU LOSE';
        outcome[0].style.cssText = 'color:red; background-color: beige; border-radius: 10px; border: solid darkgrey 2px; padding: 2px;'
        win[0].innerText = `Player Score: 0`;
        lose[0].innerText = `Computer Score: 0`;
        return playerscore = 0, computerscore = 0;
        }
    }





