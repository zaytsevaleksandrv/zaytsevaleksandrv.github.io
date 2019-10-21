function Complex(re, im) {
    this.Re = re || 0;
    this.Im = im || 0;
}

function Matrix(n, m, defValue) {
    var res = [];
    for (var i = 0; i < n; i++) {
        res.push([]);
        var m = m || n;
        for (var j = 0; j < m; j++) {
            // variant 1
            var value = null;
            if (!isNaN(defValue)) {
                value = defValue;
            } else {
                if (defValue instanceof Function) {
                    value = new defValue();
                }
            }
            res[i][j] = value;
            // variant 2
            //res[i][j] = (!isNaN(defValue)) ? defValue : (defValue instanceof Function) ? new defValue() : null;
        }
    }
    return res;
}

function Vector(n, defValue) {
    var res = [];
    for (var i = 0; i < n; i++) {
        res.push((!isNaN(defValue)) ? defValue : (defValue instanceof Function) ? new defValue() : null);
    }
    return res;
}