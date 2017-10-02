function ComplexCalculator() {

    BasicCalculator.call(this);

    this.getType = function () {
        return Complex;
    };

    this.add = function (a, b) {
        return new Complex(a.Re + b.Re, a.Im + b.Im);
    };

    this.sub = function (a, b) {
        return new Complex(a.Re - b.Re, a.Im - b.Im);
    };

    this.mult = function (a, b) {
        return new Complex(a.Re * b.Re - a.Im * b.Im, a.Re * b.Im + a.Im * b.Re);
    };

    this.invert = function (a) {
        var den = a.Re * a.Re + a.Im * a.Im;
        if (den > 0) {
            return new Complex(a.Re / den, a.Im / den);
        }
        return null;
    };

    this.div = function (a, b) {
        b = invert(b);
        if (b) {
            return mult(a, b);
        }
        return null;
    };

    this.modul = function (a) {
        return Math.sqrt(a.Re * a.Re + a.Im * a.Im);
    };

    this.zero = function () {
        return new Complex();
    };

    this.one = function () {
        return new Complex(1);
    };

    this.scal = function (a, s) {
        return new Complex(a.Re * s, a.Im * s);
    };

    this.codj = function (a) {
        return new Complex(a.Re, -a.Im);
    };
}