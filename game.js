//  Initialize a varible for the computers choice 
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
// create a nodelist containing all buttons 
const choices = document.querySelectorAll('button');
// iterate throught the nodelist adding an event listener to each buttont that listens for a click to fire off the play function 
// store that iterator into a variable 
let choice = choices.forEach(button => button.addEventListener('click',play));
// create the function that is called when one of the button is clicked 
function play(e) {
    // e.target.className pulls the class name for the clicked object 
    let choice = e.target.className;
    console.log(choice)
    //execute the above comparitive function passing the choice argument through 
    playRockPaperScissors (choice);
    // select the outcome class using query selector 
    let outcome = document.querySelector('.outcome');
    //create an if statement for when there is already an answer that will delete the answer first 
    if (outcome.childElementCount > 1) {
        let unwantedChild = document.getElementsByClassName('outcome_text');
        console.log(unwantedChild.nodeType)
        outcome.removeChild(outcome.lastChild)}
    else {let outcome_text = document.createElement('h2');
    outcome_text.classList.add('outcome_text');
    outcome_text.textContent = `${resultText}`;
    outcome.appendChild(outcome_text);}}

// BELOW TEXT WAS FOR EXERCISE THAT REQUIRED A FUNCTION TO EXECUTE 5 ROUNDS OF THE GAME AND PICK A WINNER BETWEEN PLAYER AND COMPUTER 

        // function alertFunction () {
//     buttons.addEventListener(click,() => (alert('hey')))
// }
 /* create function that executes 5 game rounds and decides a winner based on who wins the most that also does not include the ties or not valid options*/
    // function game () {
    //     let playerScore = 0;
    //     let computerScore = 0;
    //     for (i = 0, outcome >= 1; i < 5 ; i++)
    //         {playRockPaperScissors()
    //         if (outcome === 1) {playerScore++}
    //         else if (outcome === 2) {computerScore++}
    //         else if (outcome === 3) {console.log("no win!")}}
    //     if (playerScore > computerScore) {console.log("YOU WIN!")}
    //     else {console.log("YOU LOSE")}
    // } 
/* */ 
/* */ 
/* */ 


