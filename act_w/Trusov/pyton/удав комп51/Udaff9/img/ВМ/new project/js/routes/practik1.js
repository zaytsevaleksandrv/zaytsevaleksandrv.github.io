function Practik1(name) {

    BaseRoute.call(this, name);
    var self = this;

    // выстрел в мишень
    function fireTo(x, y) {
        if (Math.abs(x * x + y * y) <= 1) {
            return 'Попал';
        }
        return 'Не попал';
    }

    // выстрел в квадратную мишень
    function fireTo2(x, y) {
        if ((Math.abs(x)) &&
        (Math.abs(y) <= 14)) {
            return 'Попал';
        }
        return 'Не попал';
    }

    // выстрел в квадратную мишень 2
    function fireTo3(x, y) {
        if ((Math.abs(x * x) <= 1) &&
            (Math.abs(y * y * y) <= 1)) {
            return 'Попал';
        }
        return 'не фортануло';
    }

    // выстрел в квадратную мишень 3
    function fireTo4(x, y) {
        if ((x * x + y * y) <= 1) {
            if (y >= 0) {
                return 'Попал';
            }
        } else {
            return 'не попал';
        }
    }

    function createBlock1() {
        var block = document.createElement('div');
        var spanName = self.createSpan('Пример 1');
        var spanResult = self.createSpan('Результат');
        var x = self.createInput(0);
        var y = self.createInput(0);

        var button = document.createElement('input');
        button.setAttribute('type', 'button');
        button.setAttribute('value', 'Нажми сюда!!!');
        button.addEventListener('click', function () {
            spanResult.innerHTML = fireTo(x.value, y.value);
        });
        block.appendChild(spanName);
        block.appendChild(x);
        block.appendChild(y);
        block.appendChild(button);
        block.appendChild(spanResult);
        return block;
    }

    function createBlock2() {
        var block = document.createElement('div');
        var spanName = self.createSpan('Пример 2');
        var spanResult = self.createSpan('Результат');
        var x = self.createInput(0);
        var y = self.createInput(0);

        var button = document.createElement('input');
        button.setAttribute('type', 'button');
        button.setAttribute('value', 'Нажми сюда!!!');
        button.addEventListener('click', function () {
            spanResult.innerHTML = fireTo2(x.value, y.value);
        });
        block.appendChild(spanName);
        block.appendChild(x);
        block.appendChild(y);
        block.appendChild(button);
        block.appendChild(spanResult);
        return block;
    }

    function createBlock3() {
        var block = document.createElement('div');
        var spanName = self.createSpan('Пример 3');
        var spanResult = self.createSpan('Результат');
        var x = self.createInput(0);
        var y = self.createInput(0);

        var button = document.createElement('input');
        button.setAttribute('type', 'button');
        button.setAttribute('value', 'Нажми сюда!!!');
        button.addEventListener('click', function () {
            spanResult.innerHTML = fireTo3(x.value, y.value);
        });
        block.appendChild(spanName);
        block.appendChild(x);
        block.appendChild(y);
        block.appendChild(button);
        block.appendChild(spanResult);
        return block;
    }

    function createBlock4() {
        var block = document.createElement('div');
        var spanName = self.createSpan('Пример 4');
        var spanResult = self.createSpan('Результат');
        var x = self.createInput(0);
        var y = self.createInput(0);

        var button = document.createElement('input');
        button.setAttribute('type', 'button');
        button.setAttribute('value', 'Нажми сюда!!!');
        button.addEventListener('click', function () {
            spanResult.innerHTML = fireTo4(x.value, y.value);
        });
        block.appendChild(spanName);
        block.appendChild(x);
        block.appendChild(y);
        block.appendChild(button);
        block.appendChild(spanResult);
        return block;
    }

    self.appendBlock(createBlock1());
    self.appendBlock(createBlock2());
    self.appendBlock(createBlock3());
    self.appendBlock(createBlock4());
}