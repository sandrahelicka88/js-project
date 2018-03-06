/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScores,activePlayer,dice,playing_game;
scores = [0,0];
roundScores = 0;
activePlayer = 0;


start_game();

document.querySelector(".player-"+ activePlayer+"-panel").classList.add("active")

document.querySelector(".btn-roll").addEventListener("click",function(){
    dice = Math.floor(Math.random()*6) +1;
    document.querySelector(".dice").src = "dice-" + dice +".png";
    document.querySelector(".dice").style.display = "block";
    if (dice>1){
        roundScores+=dice;
        document.querySelector("#current-" + activePlayer).textContent = roundScores;
        winner();
    }else{
        roundScores = 0;
        document.querySelector("#current-" + activePlayer).textContent = roundScores;
        document.querySelector(".player-"+ activePlayer+"-panel").classList.toggle("active")
        active_player();
    };
});

document.querySelector(".btn-hold").addEventListener("click", function(){
    scores[activePlayer]+=roundScores;
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
    winner();
    document.querySelector(".player-"+ activePlayer+"-panel").classList.toggle("active")
    document.querySelector("#current-" + activePlayer).textContent = 0;
    roundScores = 0;
    active_player();
});


document.querySelector(".btn-new").addEventListener("click", start_game);
    
 
function start_game(){
    document.querySelector(".dice").style.display = "none";
    document.querySelector("#score-0").textContent = 0;
    document.querySelector("#score-1").textContent = 0;
    document.querySelector("#current-0").textContent = 0;
    document.querySelector("#current-1").textContent = 0;
};

function active_player(){
    if(activePlayer === 0){
            activePlayer =1;
        }else{
            activePlayer = 0;
        }    
}   

function winner(){
    if (scores[activePlayer]>=20){
        document.querySelector("#name-"+activePlayer).textContent = "WINNER";
        document.querySelector(".dice").style.display = "none";
        document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
        
}
};