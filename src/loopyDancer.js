var makeLoopyDancer = function(top, left, timeBetweenSteps, radius) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.radius = radius;
  this.time = 0;
  this.top = top;
  this.left = left;
  this.newTop;
  this.newLeft;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  };

//delegation relationship
makeLoopyDancer.prototype = Object.create(Dancer.prototype);
makeLoopyDancer.prototype.constructor = makeLoopyDancer;
// makeLoopyDancer.prototype.oldStep = Dancer.prototype.step;

makeLoopyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // this.oldStep();

  Dancer.prototype.step.call(this);
  this.time += 0.05;

  this.newTop = Math.floor(this.top + this.radius*Math.cos(this.time));
  this.newLeft = Math.floor(this.left + this.radius*Math.sin(this.time));



  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  if(this.$node){
    this.$node.animate({
      top: this.newTop,
      left: this.newLeft,
    }, 1, this.step.bind(this));
    // this.$node.toggle();
  }

  // setTimeout(this.$node.toggle(), this.timeBetweenSteps);
};