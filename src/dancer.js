// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  this.timeBetweenSteps = timeBetweenSteps;
  this.left = left;
  this.top = top;
  this.leader = false;
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

    //extra tick required
    setTimeout(this.step.bind(this), this.timeBetweenSteps);

    //no extra tick required
    // var context = this;
    // setTimeout(function(){ context.step();}, this.timeBetweenSteps);
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
  this.$node.animate(styleSettings, 300);
};

Dancer.prototype.mouseOver = function(){
  // this.leader = true;
  var styleSettings = {
    border : "20px solid yellow"
  };
  this.$node.css(styleSettings);
  // setTimeout(this.mouseOver.bind(this), 30);
};
