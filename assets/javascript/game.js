
$(document).ready(function(){

//declaring variables

  var randomNumber = Math.floor(Math.random() * 120 + 19);
    $("#randomnumber").text(randomNumber);
  var wins = 0;
  var losses = 0;
  var numberOptions = Math.floor(Math.random()*12+1);
  var numberOptions2 = Math.floor(Math.random()*12+1);
  var numberOptions3 = Math.floor(Math.random()*12+1);
  var numberOptions4 = Math.floor(Math.random()*12+1);
  var totalScore= 0;

//start game function

function startGame(){
    randomNumber = Math.floor(Math.random() * 120 + 19);
    $("#randomnumber").text(randomNumber);
    numberOptions = Math.floor(Math.random()*12+1);
    numberOptions2 = Math.floor(Math.random()*12+1);
    numberOptions3 = Math.floor(Math.random()*12+1);
    numberOptions4 = Math.floor(Math.random()*12+1);
    totalScore= 0;
      $('#sumofcrystals').text(totalScore);
} 

//win function

function win(){
    alert("You win!!!");
    wins++; 
    $("#wins").text(wins);
    startGame();
}

//loss function

function lose(){
    alert ("You lose!!!");
    losses++;
    $("#losses").text(losses);
    startGame()
}

//on click functions i could not figure out how to make one for all 4 jewels

    $("#one").on('click', function(){
    totalScore = totalScore + numberOptions;
    $("#sumofcrystals").text(totalScore); 
        if (totalScore == randomNumber){
          win();
        }
        else if (totalScore > randomNumber){
          lose();
        }   
  })  

    $('#two').on ('click', function(){
    totalScore = totalScore + numberOptions2;
    $("#sumofcrystals").text(totalScore); 
        if (totalScore == randomNumber){
          win();
        }
        else if (totalScore > randomNumber){
          lose();
        } 
  })  

    $('#three').on ('click', function(){
    totalScore = totalScore + numberOptions3;
    $("#sumofcrystals").text(totalScore);
        if (totalScore == randomNumber){
          win();
        }
        else if (totalScore > randomNumber){
          lose();
        } 
  })  

    $('#four').on ('click', function(){
    totalScore = totalScore + numberOptions4;
    $("#sumofcrystals").text(totalScore); 
        if (totalScore == randomNumber){
          win();
        }
        else if (totalScore > randomNumber){
          lose();
        }
  });   
}); 
