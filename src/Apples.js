var makeApples = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node = $('<img src="images/apple.gif" class="apple"></img>');
  this.setPosition(top, left);
  };

//delegation relationship
makeApples.prototype = Object.create(Dancer.prototype);
makeApples.prototype.constructor = makeApples;
// makeApples.prototype.oldStep = Dancer.prototype.step;

makeApples.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // this.oldStep();
  Dancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  if(this.$node){
    this.top += 100;
    this.$node.animate({
      top: this.top,
    }, 30);
    // this.$node.toggle();
  }

  // setTimeout(this.$node.toggle(), this.timeBetweenSteps);
};