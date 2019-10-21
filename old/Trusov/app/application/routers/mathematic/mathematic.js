var BaseRouter = require('../baseRouter');

function Mathematic() {
  BaseRouter.call(this);

  var self = this;

  this.square = function(a, b, c) {
    return self.answer({a, b, c});
  };

  this.cube = function(a, b, c, d) {
    return self.answer('cube');
  };
}

module.exports = Mathematic;
