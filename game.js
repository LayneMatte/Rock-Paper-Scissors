/* Initialize two choice variables to be compared later on */
    let computerChoice;
    let playerChoice;
/* Create a function that returns random answer out of: rock, paper, scissors  
This will be for the computers turn */ 
    function getComputerChoice () { 
/* Generate a random number  */ 
        number = Math.floor(Math.random() * 100 + 1)
/*  assign random number to a choice */
        if (number >= 1 && number <= 33 ) {computerChoice = "rock"}
        else if (number >= 34 && number <= 66) {computerChoice = "paper"}
        else if (number >= 67 && number <= 100) {computerChoice = "scissors"} 
    }
/* create a function to get player input  */ 
    function getPlayerChoice () {
/* stores player input as a variable and makes lower case to be case insensitive */
        playerChoice = (prompt("Please pick: rock, paper, or scissors")).toLowerCase()
 /* this if statement ensures only rock, paper, or scissors is passed as variable */
        if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {}
        else {notValid = alert ("This is not a valid option")}
    }
/* compare answers to decide winner, loser or if its a tie  */ 
    let outcome;
    function playRockPaperScissors () {
        getPlayerChoice()
        getComputerChoice()
        if (playerChoice === "rock" && computerChoice === "scissors") {return outcome = 1, console.log("You win! rock beats scissors!")}
            else if (playerChoice === "scissors" && computerChoice === "rock") {return outcome = 2, console.log("You lose! rock beats scissors")}
            else if (playerChoice === "paper" && computerChoice === "rock") {return outcome = 1, console.log("You win! paper beats rock!")}
            else if (playerChoice === "rock" && computerChoice === "paper") {return outcome = 2, console.log("You lose! paper beats rock!")}
            else if (playerChoice === "scissors" && computerChoice === "paper" ) {return outcome = 1, console.log("You win! scissors beats paper!")}
            else if (playerChoice === "paper" && computerChoice === "scissors") {return outcome = 2,  console.log("You lose! scissors beats paper!")}
            /* These two else if statements dictate that if the game is a tie or if the player choice is not valid, the game runs again */
            else if (playerChoice === "rock" && computerChoice === "rock" ||
                     playerChoice === "paper" && computerChoice === "paper" ||
                     playerChoice === "scissors" && computerChoice === "scissors") {console.log("Its a tie!"), playRockPaperScissors()}
            else {playRockPaperScissors()}

        }
 /* create function that executes 5 game rounds and decides a winner based on who wins the most that also does not include the ties or not valid options*/
    function game () {
        let playerScore = 0;
        let computerScore = 0;
        for (i = 0, outcome >= 1; i < 5 ; i++)
            {playRockPaperScissors()
            if (outcome === 1) {playerScore++}
            else if (outcome === 2) {computerScore++}
            else if (outcome === 3) {console.log("no win!")}}
        if (playerScore > computerScore) {console.log("YOU WIN!")}
        else {console.log("YOU LOSE")}
    } 

    game ()
/* */ 
/* */ 
/* */ 


