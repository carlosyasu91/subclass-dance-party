$(document).ready(function() {
  window.dancers = [];
  var player1;
  var player2;

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
    var climber2 = new climberMakerFunction(
      $("body").height()/2 + 330,
      $("body").width()/2 - 350,
      1000
      );
    player2 = climber2;
    $('body').append(climber2.$node);
  });
  
$(".lineUp").on("click", function(event) {
    for(var i=0;i<dancers.length;i++){
      dancers[i].lineUp(i*50);
    }
  });
$(this).keypress(function(event){
  if(event.keyCode === 105){
    if(player1.climb()){
      win(1);
    }
  }
  if(event.keyCode === 119){
    if(player2.climb()){
      win(2);
    }
  }
});

function win(player){
  $('body').append($('<h1>Player '+player+' wins!</h1>'));
}

});

