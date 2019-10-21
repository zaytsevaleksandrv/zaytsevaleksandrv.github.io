function VectorCalculator(parentCalc) {

    var calc = (parentCalc instanceof Function) ? new parentCalc() : new BasicCalculator();
    var self = this;

    this.getType = function () {
        return calc.getType();
    };
    this.zero = function (n) {
        return new Vector(n, self.getType());
    };
    this.one = function (n) {
        var c = new Vector(n, self.getType());
        c[0] = calc.one();
        return c
    };

    this.add = function (a, b) {
        var c = self.zero(a.length);
        for (var i = 0; i < c.length; i++) {
            c[i] = calc.add(a[i], b[i]);
        }
        return c;
    };

    this.sub = function (a, b) {
        var c = self.zero(a.length);
        for (var i = 0; i < c.length; i++) {
            c[i] = calc.sub(a[i], b[i]);
        }
        return c;
    };

    this.scal = function (a, s) {
        //...
    };

    this.mult = function (a, b) {
        //...
    };
}

var calc = new VectorCalculator(ComplexCalculator);
var a = calc.one(3);
var b = calc.one(3);

console.log(calc.add(a, b));
