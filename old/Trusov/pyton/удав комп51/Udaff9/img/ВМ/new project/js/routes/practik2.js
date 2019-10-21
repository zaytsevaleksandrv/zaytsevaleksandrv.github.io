function Practik2(name) {

    BaseRoute.call(this, name);
    var self = this;

//sum1
    function sum1() {
        var s = 0;
        for (var n = 1; n <= 100; n++) {
            s += 1 / n / n;
        }
        return s;
    }

//sum2
    function sum2() {
        var s = 0;
        for (var k = 1; k <= 50; k++) {
            s = s + (2 * k) / (2 * k - 1) / (2 * k + 1) / (2 * k + 1);
        }
        return s;
    }

//sum3
    function sum3() {
        var s = 0;
        for (var k = 1; k <= 33; k++) {
            s = s + 1 / (3 * k - 2) / (3 * k + 1);
        }
        return s;
    }


//sum4
    function sum4() {
        var P = 1;
        for (var n = 2; n <= 100; n++) {
            P = P * (1 - 1 / n / n);
        }
        return P;
    }


//sum5
    function sum5() {
        var p = 1, s = 0;
        for (var k = 1; k <= 14; k++) {
            p = p / k;
            s = s + (k + 1) * p;
        }
        return s;
    }

    function createBlock1() {
        var block = document.createElement('div');
        block.appendChild(self.createSpan('Сумма 1 = ' + sum1()));
        block.appendChild(self.createBR());
        block.appendChild(self.createSpan('Сумма 2 = ' + sum2()));
        block.appendChild(self.createBR());
        block.appendChild(self.createSpan('Сумма 3 = ' + sum3()));
        block.appendChild(self.createBR());
        block.appendChild(self.createSpan('Сумма 4 = ' + sum4()));
        block.appendChild(self.createBR());
        block.appendChild(self.createSpan('Сумма 5 = ' + sum5()));
        block.appendChild(self.createBR());
        return block;
     }

     self.appendBlock(createBlock1());
}