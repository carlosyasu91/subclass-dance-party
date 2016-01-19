$(document).ready(function() {
  window.dancers = [];
  window.players = [];
  window.apples = [];
  var player1;
  var player2;
  var hasWon = false;

  $(".addDancerButton").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
      $('body').append(dancer.$node);
      dancers.push(dancer);
      dancer.$node.hover(dancer.mouseOver.bind(dancer));
    });

$(".addLoopyButton").on("click", function(event) {
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var radius = Math.floor(Math.random() * 50);
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,
      radius);
    $('body').append(dancer.$node);
    dancers.push(dancer);
    dancer.$node.hover(dancer.mouseOver.bind(dancer));
  });

$(".addGrowingButton").on("click", function(event) {
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
      );
    $('body').append(dancer.$node);
    dancers.push(dancer);
    dancer.$node.hover(dancer.mouseOver.bind(dancer));
  });

$(".addClimber").on("click", function(event) {
    var climberMakerFunctionName = $(this).data("climber-maker-function-name");
    // get the maker function for the kind of dancer we're supposed to make
    var climberMakerFunction = window[climberMakerFunctionName];

    // make a dancer with a random position
    var climber = new climberMakerFunction(
      $("body").height()/2 + 330,
      $("body").width()/2 + 250,
      1000
      );
    player1 = climber;
    $('body').append(climber.$node);
    players.push(player1);
    var climber2 = new climberMakerFunction(
      $("body").height()/2 + 330,
      $("body").width()/2 - 350,
      1000
      );
    player2 = climber2;
    $('body').append(climber2.$node);
    players.push(player2);
  });

function createApples(){
    var appleMakerFunctionName = $(".addApples").data("apple-maker-function-name");
    // get the maker function for the kind of dancer we're supposed to make
    var appleMakerFunction = window[appleMakerFunctionName];
    var offset = Math.floor(Math.random()*100);
    // make a dancer with a random position
    var apple = new appleMakerFunction(
      $("body").height()/2 - 330,
      $("body").width()/2 + 200 + offset,
      1500
      );
    $('body').append(apple.$node);
    apples.push(apple);
    var apple2 = new appleMakerFunction(
      $("body").height()/2 - 330,
      $("body").width()/2 - 250 - offset,
      1500
    );
    $('body').append(apple2.$node);
    apples.push(apple2);
}

setInterval(createApples, 3000);

  function overlap() {
    console.log(player1.getPosition);
    if(apple.getPosition === player1.getPosition) {
      player1.getHit();
    }
  }

//setInterval(overlap, 50);

  //overlap();

$(".lineUp").on("click", function(event) {
    for(var i=0;i<dancers.length;i++){
      dancers[i].lineUp(i*50);
    }
  });


$(this).keypress(function(event){

  //player 1 controllers

  if(event.keyCode === 105){ // I Key pressed
    if(player1.climb()){
      if(!hasWon){
        win(1);
        hasWon = true;
      }
    }
  }

  if(event.keyCode === 106){ // J key pressed
    player1.moveLeft();
  }
  if(event.keyCode === 108){ // L key pressed
    player1.moveRight();
  }

  //Player 2 controllers
  if(event.keyCode === 119){ //W key pressed
    if(player2.climb()){
      if(!hasWon){
        win(2);
        hasWon = true;
      }
    }
  }

  if(event.keyCode === 97){ // A key pressed
    player2.moveLeft();
  }
  if(event.keyCode === 100){ // D key pressed
    player2.moveRight();
  }
});

function win(player){
  $('body').append($('<h1 class="wins">Player '+player+' wins!</h1>'));
}

});

