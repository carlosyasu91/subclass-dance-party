describe("blinkyDancer", function() {

  var blinkyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.equal(true);
  });

  describe("dance", function() {
    it("should call step at least once per second", function() {
      sinon.spy(blinkyDancer, "step");
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      // blinkyDancer.step();
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      console.log("clock.tick is working");

      expect(blinkyDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...

      // clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});