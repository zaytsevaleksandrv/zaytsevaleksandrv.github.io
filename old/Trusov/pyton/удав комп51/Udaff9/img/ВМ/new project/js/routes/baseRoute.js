function BaseRoute(name) {

    var self = this;

    this.createElement = function (data) {
        if (data && data.tag) {
            var elem = document.createElement(data.tag);
            if (data.innerHTML) {
                elem.innerHTML = data.innerHTML;
            }
            if (data.attribute) {
                for (var key in data.attribute) {
                    elem.setAttribute(key, data.attribute[key]);
                }
            }
            if (data.event) {
                for (var key in data.event) {
                    elem.addEventListener(key, data.event[key]);
                }
            }
            return elem;
        }
        return null;
    };

    this.createBR = function () {
        var br = document.createElement('br');
        return br;
    };

    this.createSpan = function (value) {
        var span = document.createElement('span');
        span.innerHTML = value;
        return span;
    };

    this.createInput = function (value, id) {
        var input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('value', value);
        if (id) {
            input.setAttribute('id', id);
        }
        return input;
    };

    var field = null;
    this.appendBlock = function (block) {
        field.appendChild(block);
    };

    function init() {
        // добавить заголовок
        document.getElementById('header').appendChild(self.createElement({
            tag: 'div',
            innerHTML: name,
            attribute: { class: 'header-elem' }
        }));
        // Добавить контент
        field = self.createElement({ tag: 'div', attribute: { class: 'content-elem'} });
        document.getElementById('content').appendChild(field);
    }
    init();
}