function MatrixCalculator(parentCalc) {

    var calc = (parentCalc instanceof Function) ? new parentCalc() : new BasicCalculator();
    var self = this;

    this.getType = function () {
        return calc.getType();
    };
    this.zero = function (n, m) {
        var type = self.getType();
        return new Matrix(n, m || n, type);
    };
    this.one = function (n, m) {
        var type = self.getType();
        var c = new Matrix(n, m || n, type);
        for (var i = 0; i < c.length; i++) {
            for (var j = 0; j < c[i].length; j++) {
                if (i === j) {
                    c[i][j] = calc.one();
                }
            }
        }
        return c;
    };

    this.add = function (a, b) {
        var c = self.zero(a.length, a[0].length);
        for (var i = 0; i < c.length; i++) {
            for (var j = 0; j < c[i].length; j++) {
                c[i][j] = calc.add(a[i][j], b[i][j]);
            }
        }
        return c;
    };

    this.sub = function (a, b) {
        var c = self.zero(a.length, a[0].length);
        for (var i = 0; i < c.length; i++) {
            for (var j = 0; j < c[i].length; j++) {
                c[i][j] = calc.sub(a[i][j], b[i][j]);
            }
        }
        return c;
    };

    this.scal = function (a, s) {
        var c = self.zero(a.length, a[0].length);
        for (var i = 0; i < c.length; i++) {
            for (var j = 0; j < c[i].length; j++) {
                c[i][j] = calc.scal(a[i][j], s);
            }
        }
        return c;
    };

    this.mult = function (a, b) { 
        //...
    };
}

/*var calc = new MatrixCalculator(ComplexCalculator);
var a = new Matrix(3, null, Complex);
var b = new Matrix(3, null, Complex);

console.log(calc.one(5));*/