
$(document).ready(function(){

//declaring variables

  var randomNumber = Math.floor(Math.random() * 120 + 19);
    $("#randomnumber").text(randomNumber);
  var wins = 0;
  var losses = 0;
  var totalScore= 0;
  var numberOptions = Math.floor(Math.random()*12+1);
  var numberOptions2 = Math.floor(Math.random()*12+1);
  var numberOptions3 = Math.floor(Math.random()*12+1);
  var numberOptions4 = Math.floor(Math.random()*12+1);
  
//start game function

function startGame(){
  randomNumber = Math.floor(Math.random() * 120 + 19);
    $("#randomnumber").text(randomNumber);
  totalScore= 0;
    $('#sumofcrystals').text(totalScore);    
  numberOptions = Math.floor(Math.random()*12+1);
  numberOptions2 = Math.floor(Math.random()*12+1);
  numberOptions3 = Math.floor(Math.random()*12+1);
  numberOptions4 = Math.floor(Math.random()*12+1);
} 

//win function

function win(){
  wins++; 
    $("#wins").text(wins);
  alert("You win!!!");
  startGame();
}

//loss function

function lose(){
  losses++;
    $("#losses").text(losses);
  alert ("You lose!!!");
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
