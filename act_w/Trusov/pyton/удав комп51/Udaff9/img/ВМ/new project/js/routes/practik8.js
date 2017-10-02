function Practik8(name) {

    BaseRoute.call(this, name);
    var self = this;

    var calc = new ComplexCalculator();

    function createBlock1() {
        var block = document.createElement('div');
        var spanName = self.createSpan('Комплексный калькулятор');
        var aRe = self.createInput('0');
        var aIm = self.createInput('0');
        var bRe = self.createInput('0');
        var bIm = self.createInput('0');
        var spanRes = self.createSpan('Результат:');
        var addBut = self.createElement({
            tag: 'input', attribute: { type: 'button', value: '+' },
            event: {
                click: function () {
                    var a = new Complex(aRe.value - 0, aIm.value - 0);
                    var b = new Complex(bRe.value - 0, bIm.value - 0);
                    var c = calc.add(a, b);
                    spanRes.innerHTML = c.Re + "+i*" + c.Im;
                }
            }
        });
        var subBut = self.createElement({
            tag: 'input', attribute: { type: 'button', value: '-' },
            event: {
                click: function () {
                    var a = new Complex(aRe.value - 0, aIm.value - 0);
                    var b = new Complex(bRe.value - 0, bIm.value - 0);
                    var c = calc.sub(a, b);
                    spanRes.innerHTML = c.Re + "+i*" + c.Im;
                }
            }
        });

        var blockBig = self.createElement({ tag: 'div' });
        var blockA = self.createElement({ tag: 'div', attribute: { style: 'float:left'} });
        var blockButtons = self.createElement({ tag: 'div', attribute: { style: 'float:left'} });
        var blockB = self.createElement({ tag: 'div', attribute: { style: 'float:left'} });

        blockA.appendChild(aRe);
        blockA.appendChild(aIm);
        blockButtons.appendChild(addBut);
        blockButtons.appendChild(self.createBR());
        blockButtons.appendChild(subBut);
        blockB.appendChild(bRe);
        blockB.appendChild(bIm);
        blockB.appendChild(spanRes);
        blockBig.appendChild(blockA);
        blockBig.appendChild(blockButtons);
        blockBig.appendChild(blockB);

        block.appendChild(spanName);
        block.appendChild(self.createBR());
        block.appendChild(blockBig);
        return block;
    }

    self.appendBlock(createBlock1());
}