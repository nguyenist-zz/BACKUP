//understanding the game

var myHand;
var botHand;
var myScore = 0;
var botScore = 0;
var outcome;

//You. click on button. Rock paper scissors. Triggers "playRock" function.

document.getElementById('rock').addEventListener('click', playRock);
document.getElementById('paper').addEventListener('click', playPaper);
document.getElementById('scissors').addEventListener('click', playScissors);

//computer working

function playRock() {
    playGame('rock');
}

function playPaper() {
    playGame('paper');
}

function playScissors() {
    playGame('scissors');
}

function playGame(move){
    myHand = move;
    botHand = getRandomMove();
    outcome = compareChoices();
    // update myscore if i won
    // update botscore if bot won
    // update the status div with what happened
    document.getElementById('humanScore').innerHTML = myScore;
    document.getElementById('computerScore').innerHTML = botScore;
    document.getElementById('status').innerHTML = "You played " + myHand + ". The bot played " + botHand + ". You " + outcome + ".";
}

function getRandomMove() {
    var moveNum = Math.random() * 3,
        moveBot = 'paper';

    if (moveNum >= 2) {
        moveBot = 'rock';
    } else if (moveNum >= 1) {
        moveBot = 'scissors';
    }
    return moveBot;
}

// Compare myChoice vs. botChoice
function compareChoices (){
    if(myHand == 'rock' && botHand == 'paper'){
            botScore = botScore + 1;
            return 'lost';
        }
    else if(myHand == 'rock' && botHand == 'scissors'){
            myScore = myScore + 1;
            return 'won';
        }
    else if(myHand == 'paper' && botHand == 'rock'){
            myScore = myScore + 1;
            return 'won';
        }
    else if(myHand == 'paper' && botHand == 'scissors'){
            botScore = botScore + 1;
            return 'lost';
        }
    else if(myHand == 'scissors' && botHand == 'rock'){
            botScore = botScore + 1;
            return 'lost';
        }
    else if(myHand == 'scissors' && botHand == 'paper'){
            myScore = myScore + 1;
            return 'won';
     }
    // If there's a tie
    else {
            return 'tied';
    }
}
// Start round again. While you keep clicking, keep doing the previous steps.

/*1. Click a button (rock paper scissors)

//You click a button (rock, paper, scissors)
document.getElementById('rock')
        .addEventListener('click', playGame(rock));
document.getElementById('paper')
        .addEventListener('click', playGame(paper));
document.getElementById('scissors')
        .addEventListener('click', playGame(scissors));


2. Computer chooses (rock paper scissors)

3. Compare myChoice vs. botChoice

If me wins, me gains point
  else if bot wins, bot gains point
  else if me = bot, then tie & me clicks again

4. Start next round

*/
