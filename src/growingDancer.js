var makeGrowingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  };

//delegation relationship
makeGrowingDancer.prototype = Object.create(Dancer.prototype);
makeGrowingDancer.prototype.constructor = makeGrowingDancer;
// makeGrowingDancer.prototype.oldStep = Dancer.prototype.step;

makeGrowingDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // this.oldStep();
  Dancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  if(this.$node){
    this.$node.toggle(function(){
      $(this).animate({
        width: "10px",
        height: "10px"
      }, 500);
    }, function(){
      $(this).animate({
        width: "100px",
        height: "100px"
      }, 500);
    });
  }

  // setTimeout(this.$node.toggle(), this.timeBetweenSteps);
};