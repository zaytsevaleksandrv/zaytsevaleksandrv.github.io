function BasicCalculator() {

    this.getType = function () {
        return 0;
    };

    this.add = function (a, b) {
        return a + b;
    };
    this.sub = function (a, b) {
        return a - b;
    };
    this.mult = function (a, b) {
        return a * b;
    };
    this.div = function (a, b) {
        if (b) {
            return a / b;
        }
        return null;
    };
    this.scal = function (a, s) {
        return a * s;
    };
    this.zero = function () {
        return 0;
    };
    this.one = function () {
        return 1;
    };
}