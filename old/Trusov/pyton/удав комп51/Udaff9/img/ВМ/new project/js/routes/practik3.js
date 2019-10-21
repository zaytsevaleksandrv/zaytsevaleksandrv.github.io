function Practik3(name) {

    BaseRoute.call(this, name);
    var self = this;

    // Пар 1
    function par(t) {
        var p = 1,
        s = 1;
        for (var k = 2; k <= 100; k++) {
            p = p * (t / k);
            s = s + p;
        }
        return s;
    }

    // Пар 2
    function par2(t) {
        var p = t,
        s = t;
        for (var k = 1; k <= 100; k++) {
            p = (-p) * (t * t) / (2 * k) / (2 * k + 1);
            s = s + p;
        }
        return s;
    }

    // Пар 3
    function par3(t) {
        var p = 1,
        s = 1;
        for (var k = 1; k <= 100; k++) {
            p = (-p) * (t * t) / (2 * k) / (2 * k - 1);
            s = s + p;
        }
        return s;
    }

    // Пар 4
    function par4(t, g) {
        var p = 1,
        q = 1,
        s = 1;
        for (var k = 1; k <= 100; k++) {
            p = p * t * (q / k);
            q = q * g;
            s = s + p;
        }
        return s;
    }

    // Пар 5
    function par5(t, h) {
        var p = 1,
        q = 1,
        s = 1;
        for (var k = 1; k <= 100; k++) {
            m = 2 * k;
            p = ((-p) * t * q) / m * (m - 1);
            q = q * h;
            s = s + p;
        }
        return s;
    }

    function createBlock1() {
        var block = document.createElement('div');
        var spanName = self.createSpan('Пример 1');
        var spanResult = self.createSpan('Результат');
        var t = self.createInput(0);

        var button = document.createElement('input');
        button.setAttribute('type', 'button');
        button.setAttribute('value', 'Нажми сюда!!!');
        button.addEventListener('click', function () {
            spanResult.innerHTML = par(t.value);
        });
        block.appendChild(spanName);
        block.appendChild(t);
        block.appendChild(button);
        block.appendChild(spanResult);
        return block;
    }

    function createBlock2() {
        var block = document.createElement('div');
        var spanName = self.createSpan('Пример 2');
        var spanResult = self.createSpan('Результат');
        var t = self.createInput(0);

        var button = document.createElement('input');
        button.setAttribute('type', 'button');
        button.setAttribute('value', 'Нажми сюда!!!');
        button.addEventListener('click', function () {
            spanResult.innerHTML = par2(t.value - 0);
        });
        block.appendChild(spanName);
        block.appendChild(t);
        block.appendChild(button);
        block.appendChild(spanResult);
        return block;
    }

    function createBlock3() {
        var block = document.createElement('div');
        var spanName = self.createSpan('Пример 3');
        var spanResult = self.createSpan('Результат');
        var t = self.createInput(0);

        var button = document.createElement('input');
        button.setAttribute('type', 'button');
        button.setAttribute('value', 'Нажми сюда!!!');
        button.addEventListener('click', function () {
            spanResult.innerHTML = par3(t.value - 0);
        });
        block.appendChild(spanName);
        block.appendChild(t);
        block.appendChild(button);
        block.appendChild(spanResult);
        return block;
    }

    function createBlock4() {
        var block = document.createElement('div');
        var spanName = self.createSpan('Пример 4');
        var spanResult = self.createSpan('Результат');
        var t = self.createInput(0);
        var g = self.createInput(0);

        var button = document.createElement('input');
        button.setAttribute('type', 'button');
        button.setAttribute('value', 'Нажми сюда!!!');
        button.addEventListener('click', function () {
            spanResult.innerHTML = par4(t.value , g.value);
        });
        block.appendChild(spanName);
        block.appendChild(t);
        block.appendChild(g);
        block.appendChild(button);
        block.appendChild(spanResult);
        return block;
    }

    function createBlock5() {
        var block = document.createElement('div');
        var spanName = self.createSpan('Пример 5');
        var spanResult = self.createSpan('Результат');
        var t = self.createInput(0);
        var h = self.createInput(0);

        var button = document.createElement('input');
        button.setAttribute('type', 'button');
        button.setAttribute('value', 'Нажми сюда!!!');
        button.addEventListener('click', function () {
            spanResult.innerHTML = par5(t.value, h.value);
        });
        block.appendChild(spanName);
        block.appendChild(t);
        block.appendChild(h);
        block.appendChild(button);
        block.appendChild(spanResult);
        return block;
    }

    self.appendBlock(createBlock1());
    self.appendBlock(createBlock2());
    self.appendBlock(createBlock3());
    self.appendBlock(createBlock4());
    self.appendBlock(createBlock5());
 }