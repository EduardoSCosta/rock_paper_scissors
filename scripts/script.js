// Rock == 1
// Paper == 2
// Scissors == 3

let yourScore = 0;
let opponentScore = 0;

function scoreCounter(win){
    if(win == 1){
        yourScore += 1;
        document.getElementById("your-score").innerHTML = yourScore;
    } else {
        opponentScore += 1;
        document.getElementById("opponent-score").innerHTML = opponentScore;
    }
    if(yourScore == 3){
        document.getElementById("result").innerHTML = "Congratulations! You won the game!";
        document.getElementById("options-container").style.display = "none";
    } else if(opponentScore == 3){
        document.getElementById("result").innerHTML = "You lost the game. Try again if you want.";
        document.getElementById("options-container").style.display = "none";
    }
}
//reset the game
function playAgain(){
    yourScore = 0;
    opponentScore = 0;
    document.getElementById("your-score").innerHTML = yourScore;
    document.getElementById("opponent-score").innerHTML = opponentScore;
    document.getElementById("options-container").style.display = "block";
    document.getElementById("result").innerHTML = "Result";
}

//generate a random number
function randomNumber() {
    return Math.floor(Math.random() * 3 + 1);
  }

function chooseRock(){
    let opponentChoice = randomNumber();
    if (opponentChoice == 1){
        document.getElementById("result").innerHTML = "It's a tie!";
    } else if(opponentChoice == 2){
        document.getElementById("result").innerHTML = "Paper beats rock. You lost the round!";
        scoreCounter(0);
    } else{
        document.getElementById("result").innerHTML = "Rock beats scissors. You won the round!";
        scoreCounter(1);
    }
}

function choosePaper(){
    let opponentChoice = randomNumber();
    if (opponentChoice == 2){
        document.getElementById("result").innerHTML = "It's a tie!";
    } else if(opponentChoice == 3){
        document.getElementById("result").innerHTML = "Scissors beats paper. You lost the round!";
        scoreCounter(0);
    } else{
        document.getElementById("result").innerHTML = "Paper beats rock. You won the round!";
        scoreCounter(1);
    }
}

function chooseScissors(){
    let opponentChoice = randomNumber();
    if (opponentChoice == 3){
        document.getElementById("result").innerHTML = "It's a tie!";
    } else if(opponentChoice == 1){
        document.getElementById("result").innerHTML = "Rock beats scissors. You lost the round!";
        scoreCounter(0);
    } else{
        document.getElementById("result").innerHTML = "Scissors beats paper. You won the round!";
        scoreCounter(1);
    }
}