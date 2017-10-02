function Practik6(name) {

    BaseRoute.call(this, name);
    var self = this;

    function SpecSortArray(n) {
        var arr1 = [];
        var arr2 = [];
        for (var i = 0; i < n; i++) {
            //arr1.push(Math.round(Math.random() * 100));
            arr1.push(i + 1);
        }
        for (var i = 0; i < n; i++) {
            if ((i + 1) % 3 == 0 && (i + 1) >= 3) {
                arr2[i] = arr1[i - 1];
                arr2[i - 1] = arr1[i - 2];
                arr2[i - 2] = arr1[i];
            } else {
                arr2[i] = arr1[i];
            }
        }
        return {
            arr1: arr1,
            arr2: arr2
        };
    }

    function createBlock1() {
        var block = document.createElement('div');
        var name = self.createSpan('Пример 1');
        var resName = self.createSpan('Результат: ');
        var res1 = self.createSpan('');
        var res2 = self.createSpan('');
        var a = self.createInput('');
        var button = self.createElement({
            tag: 'input',
            attribute: { type: 'button', value: 'Задать длину массива' },
            event: {
                click: function () {
                    var n = a.value;
                    if (isNaN(n)) {
                        alert('Введите численное значение!');
                    } else {
                        var result = SpecSortArray(n - 0);
                        res1.innerHTML = result.arr1.join(', ');
                        res2.innerHTML = result.arr2.join(', ');
                    }
                }
            }
        });
        block.appendChild(name);
        block.appendChild(self.createBR());
        block.appendChild(a);
        block.appendChild(button);
        block.appendChild(self.createBR());
        block.appendChild(resName);
        block.appendChild(self.createBR());
        block.appendChild(res1);
        block.appendChild(self.createBR());
        block.appendChild(res2);
        return block;
    }

    function generateMatrix(size, text, idPref) {
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

    self.appendBlock(createBlock1());
}