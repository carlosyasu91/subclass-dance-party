// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  this.timeBetweenSteps = timeBetweenSteps;
  this.left = left;
  this.top = top;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  // this.position = this.setPosition(top, left);
};

Dancer.prototype.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    //this.callCount = (this.callCount + 1) || 0;
    //console.log(this.timeBetweenSteps);
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
};
Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
Dancer.prototype.getPosition = function(){
  return {top: this.top, left: this.left };
};
Dancer.prototype.lineUp = function(position){
  var styleSettings = {
    top: 500,
    left: position
  };
  this.$node.css(styleSettings);
};
Dancer.prototype.mouseOver = function(){
  var styleSettings ={
    border: "10px solid yellow"
  };
  this.$node.css(styleSettings);
};
