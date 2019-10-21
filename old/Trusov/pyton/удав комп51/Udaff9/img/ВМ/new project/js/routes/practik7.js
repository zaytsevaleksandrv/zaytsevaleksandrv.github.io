function Practik7(name) {

    BaseRoute.call(this, name);
    var self = this;

    function fillMatrix1(n) {
        var arr = [];
        // init matrix
        for (var i = 0; i < n; i++) {
            arr[i] = [];
            for (var j = 0; j < n; j++) {
                arr[i][j] = 0;
            }
        }
        // fill matrix
        for (var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {
                if (i == j) {
                    arr[i][j] = 1;
                }
            }
        }
        return arr;
    }

    function fillMatrix2(n) {
        var arr = [];
        // init matrix
        for (var i = 0; i < n; i++) {
            arr[i] = [];
            for (var j = 0; j < n; j++) {
                arr[i][j] = 0;
            }
        }
        // fill matrix
        for (var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {
                if (i == n - 1 - j) {
                    arr[i][j] = n - i;
                }
            }
        }
        return arr;
    }

    function generateMatrix(matrix, text) {
        var block = document.createElement('div');
        block.appendChild(self.createSpan(text));
        block.appendChild(self.createBR());
        for (var i = 0; i < matrix.length; i++) {
            block.appendChild(self.createSpan(matrix[i].join(' ')));
            block.appendChild(self.createBR());
        }
        return block;
    }

    function createBlock1() {
        var block = document.createElement('div');
        var spanName = self.createSpan('Пример 1');
        var size = self.createInput('2');
        var matrix = null;
        var button = self.createElement({
            tag: 'input',
            attribute: { type: 'button', value: 'Задать размер матриц' },
            event: {
                click: function () {
                    var value = size.value - 0;
                    if (isNaN(value)) {
                        alert('Введите численное значение!!!');
                    } else {
                        if (value > 0) {
                            if (matrix) { block.removeChild(matrix); }
                            matrix = generateMatrix(fillMatrix1(value), 'Матрица');
                            block.appendChild(matrix);
                        } else {
                            alert('Значение должно быть положительным!!!');
                        }
                    }
                }
            }
        });
        block.appendChild(spanName);
        block.appendChild(self.createBR());
        block.appendChild(size);
        block.appendChild(button);
        return block;
    }

    function createBlock2() {
        var block = document.createElement('div');
        var spanName = self.createSpan('Пример 2');
        var size = self.createInput('2');
        var matrix = null;
        var button = self.createElement({
            tag: 'input',
            attribute: { type: 'button', value: 'Задать размер матриц' },
            event: {
                click: function () {
                    var value = size.value - 0;
                    if (isNaN(value)) {
                        alert('Введите численное значение!!!');
                    } else {
                        if (value > 0) {
                            if (matrix) { block.removeChild(matrix); }
                            matrix = generateMatrix(fillMatrix2(value), 'Матрица');
                            block.appendChild(matrix);
                        } else {
                            alert('Значение должно быть положительным!!!');
                        }
                    }
                }
            }
        });
        block.appendChild(spanName);
        block.appendChild(self.createBR());
        block.appendChild(size);
        block.appendChild(button);
        return block;
    }

    self.appendBlock(createBlock1());
    self.appendBlock(createBlock2());
}