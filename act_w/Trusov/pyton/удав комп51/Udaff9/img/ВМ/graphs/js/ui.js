function sin(x) { return Math.sin(x); }
function cos(x) { return Math.cos(x); }

function UI(callback) {

    var div = null;
    var i = 0;

    function inputKeyUpHandler(event) {
        try {
            callback.addCB(this.id, eval("a = function(x) { return " + this.value + "; }"));
        } catch (e) { }
    }

    function buttonAppendClickHandler() {
        var id = "input_" + i;
        // создать чекбокс
        var checkbox = document.createElement('input');
        checkbox.setAttribute("type", "checkbox");
        (function (i) {
            checkbox.addEventListener("click", function () {
                this.clicked = !(this.clicked);
                if (this.clicked) {
                    callback.polyCB(null, null, id);
                } else {
                    callback.polyCB(null, null, null, id);
                }
            });
        })(i);
        // создать инпут
        var input = document.createElement('input');
        input.setAttribute("type", "text");
        input.setAttribute("id", id);
        input.addEventListener("keyup", inputKeyUpHandler);
        // создать кнопку удаления инпута
        var buttonDel = document.createElement('input');
        buttonDel.setAttribute("type", "button");
        buttonDel.setAttribute("value", "Удалить функцию");
        (function (i) {
            buttonDel.addEventListener("click", function () {
                div.removeChild(br);
                div.removeChild(input);
                div.removeChild(buttonDel);
                callback.delCB(id);
            });
        })(i);
        var br = document.createElement('br');
        div.appendChild(br);
        div.appendChild(checkbox);
        div.appendChild(input);
        div.appendChild(buttonDel);
        i++;
    }

    function init() {
        div = document.createElement('div');
        var buttonAppend = document.createElement('input');
            buttonAppend.setAttribute("type", "button");
            buttonAppend.setAttribute("value", "Добавить функцию");
            buttonAppend.addEventListener("click", buttonAppendClickHandler);
        div.appendChild(buttonAppend);
        var inputX1 = document.createElement('input');
            inputX1.addEventListener("keyup", function () {
                if (!isNaN(this.value)) {
                    callback.polyCB(this.value - 0, null, null);
                }
            });
        var inputX2 = document.createElement('input');
            inputX2.addEventListener("keyup", function () {
                if (!isNaN(this.value)) {
                    callback.polyCB(null, this.value - 0, null);
                }
            });
        document.querySelector('body').appendChild(div);
        document.querySelector('body').appendChild(inputX1);
        document.querySelector('body').appendChild(inputX2);
    }
    init();
}