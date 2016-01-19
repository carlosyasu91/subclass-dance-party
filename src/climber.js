var makeClimber = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node = $('<img src="images/climbingguy.gif" class="climber"></img>');

  this.setPosition(top, left);
  };

//delegation relationship
makeClimber.prototype = Object.create(Dancer.prototype);
makeClimber.prototype.constructor = makeClimber;
// makeClimber.prototype.oldStep = Dancer.prototype.step;

makeClimber.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // this.oldStep();
  Dancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  if(this.$node){
    
  }
  // makeClimber.prototype.setPosition = function(top, left){};  
  // setTimeout(this.$node.toggle(), this.timeBetweenSteps);
};
makeClimber.prototype.climb = function(){
  if(this.top > 50){
    this.top-=10;
  }
  this.setPosition(this.top, this.left);
  if(this.top < 50){
    return true;
  }
  return false;
};

makeClimber.prototype.moveRight = function() {
  this.left += 10;
  this.setPosition(this.top, this.left);
};

makeClimber.prototype.moveLeft = function() {
  this.left -= 10;
  this.setPosition(this.top, this.left);
};

makeClimber.prototype.getHit = function() {
  this.top += 70;
  this.setPosition(this.top, this.left);
};