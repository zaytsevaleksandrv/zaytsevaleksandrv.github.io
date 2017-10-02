function Practik5(name) {

    BaseRoute.call(this, name);
    var self = this;

    function sumArray(a,b) {
        var c = [];
        for (var i = 0; i < a.length; i++) {
            c.push((a[i]-0) + (b[i]-0));
        }
        return c;

    }

    function sumArray1(a, b) {
        var c = 0;        
        for (var i = 0; i < a.length; i++) {
            c += (a[i] - 0) * (b[i] - 0);            
        }
        return c;

    }

    function sumArray2(a, b) {
        var c = 0;
        for (var i = 0; i < a.length; i++) {
            c = c + ((a[i] - 0) * (b[i] - 0)) / Math.sqrt((a[i]-0) * (a[i]-0)) * Math.sqrt((b[i]-0)*(b[i]-0));
        }
        return c;
    }

    function sumMatrix(a, b) {
        var c = [];
        for (var i = 0; i < a.length; i++) {
            c[i] = [];
        }
        for (var i = 0; i < a.length; i++) {
            for (var j = 0; j < a[i].length; j++) {
                c[i].push(a[i][j] + b[i][j]);
            }
        }
        return c;
    }

    function createBlock1() {
        var block = document.createElement('div');
        var spanName = self.createSpan('Пример 1');
        var spanResult = self.createSpan('Результат');
        var a = self.createInput('');
        var b = self.createInput('');
        var button = self.createElement({
            tag: 'input',
            attribute: { type: 'button', value: 'Нажми сюда!!!' },
            event: {
                click: function () {
                    var strA = a.value;
                    var strB = b.value;
                    spanResult.innerHTML = sumArray(strA.split(' '), strB.split(' ')).toString();
                }
            }
        });
        block.appendChild(spanName);
        block.appendChild(a);
        block.appendChild(b);
        block.appendChild(button);
        block.appendChild(spanResult);
        return block;
    }

    function createBlock2() {
        var block = document.createElement('div');
        var spanName = self.createSpan('Пример 2');
        var spanResult = self.createSpan('Результат');
        var a = self.createInput('');
        var b = self.createInput('');
        var button = self.createElement({
            tag: 'input',
            attribute: { type: 'button', value: 'нажми сюда!!!' },
            event: {
                click: function () {
                    var strA = a.value;
                    var strB = b.value;
                    spanResult.innerHTML = sumArray1(strA.split(' '), strB.split(' '));
                }
            }
        });
        
        block.appendChild(spanName);
        block.appendChild(a);
        block.appendChild(b);
        block.appendChild(button);
        block.appendChild(spanResult);
        return block;
    }

    function createBlock3() {
        var block = document.createElement('div');
        var spanName = self.createSpan('Пример 3');
        var spanResult = self.createSpan('Результат');
        var a = self.createInput('');
        var b = self.createInput('');
        var button = self.createElement({
            tag: 'input',
            attribute: { type: 'button', value: 'нажми сюда!!!' },
            event: {
                click: function () {
                    var strA = a.value;
                    var strB = b.value;
                    spanResult.innerHTML = sumArray2(strA.split(' '), strB.split(' ')).toString();
                }
            }
        });
        block.appendChild(spanName);
        block.appendChild(a);
        block.appendChild(b);
        block.appendChild(button);
        block.appendChild(spanResult);
        return block;
    }

    function generateMatrix(size,text, idPref){
        var block = document.createElement('div');
        block.appendChild(self.createSpan(text));
        block.appendChild(self.createBR());
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                block.appendChild(self.createInput('0', idPref + i + j));
        }
            block.appendChild(self.createBR());
        }
        return block;
    }

    function createBlock4() {
        var block = document.createElement('div');
        var spanName = self.createSpan('Пример 4');
        var size = self.createInput('2');

        var matrixA = null;
        var matrixB = null;

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
                            if (matrixA) {block.removeChild(matrixA); }
                            if (matrixB) {block.removeChild(matrixB);}
                            try {
                                block.removeChild(sumButton);
                            } catch (e) {
                                console.log(e);
                            }
                            matrixA = (generateMatrix(value, 'Матрица А', 'a'));
                            matrixB = (generateMatrix(value, 'Матрица В', 'b'));
                            block.appendChild(matrixA);
                            block.appendChild(matrixB);
                            block.appendChild(sumButton);
                        } else {
                            alert('Значение должно быть положительным!!!');
                        }
                    }
                }
            }
        });
        var sumButton = self.createElement({
            tag: 'input',
            attribute: { type: 'button', value: 'Посчитать' },
            event: {
                click: function () {
                    var value = size.value - 0;
                    var a = [];
                    var b = [];
                    for (var i = 0; i < value; i++) {
                        a[i] = [];
                        b[i] = [];
                    }
                    for (var i = 0; i < value; i++) {
                        for (var j = 0; j < value; j++) {
                            a[i].push(document.getElementById('a' + i + j).value - 0);
                            b[i].push(document.getElementById('b' + i + j).value - 0);
                        }
                    }
                    var c = sumMatrix(a, b);

                    var elems = document.getElementsByClassName('matrix-result');
                    for (var i = elems.length - 1; i > 0; i--) {
                        block.removeChild(elems[i]);
                    }

                    block.appendChild(self.createElement({ tag: 'br', attribute: { class: 'matrix-result'} }));
                    for (var i = 0; i < c.length; i++) {
                        block.appendChild(self.createElement({ tag: 'span', innerHTML: '(' + c[i].toString() + ')', attribute: { class: 'matrix-result'} }));
                        block.appendChild(self.createElement({ tag: 'br', attribute: { class: 'matrix-result'} }));
                    }
                }
            }
        });
        block.appendChild(spanName);
        block.appendChild(size);
        block.appendChild(button);        
        return block;
    }

    self.appendBlock(createBlock1());
    self.appendBlock(createBlock2());
    self.appendBlock(createBlock3());
    self.appendBlock(createBlock4());
}