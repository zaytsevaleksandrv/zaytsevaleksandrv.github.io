window.onload = function () {
    var practik1 = new Practik1('Практика 1');
    var practik2 = new Practik2('Практика 2');
    var practik3 = new Practik3('Практика 3');
    var practik4 = new Practik4('Практика 4');
    var practik5 = new Practik5('Практика 5');
    var practik6 = new Practik6('Практика 6');
    var practik7 = new Practik7('Практика 7');
    var practik8 = new Practik8('Практика 8');

    var elem = document.getElementsByClassName('header-elem');
    for (var i = 0; i < elem.length; i++) {
        (function (i) {
            elem[i].addEventListener('click', function () {
                var content = document.getElementsByClassName('content-elem');
                var headers = document.getElementsByClassName('header-elem');
                for (var j = 0; j < content.length; j++) {
                    if (i === j) { // Показать вкладку
                        headers[j].classList.add("selected");
                        content[j].classList.add("selected");
                    } else { // Скрыть вкладку
                        headers[j].classList.remove("selected");
                        content[j].classList.remove("selected");
                    }
                }
            });
        })(i);
    }

    // инициализация
    var content = document.getElementsByClassName('content-elem');
    var headers = document.getElementsByClassName('header-elem');
    for (var i = 0; i < content.length; i++) {
        if (i === 0) { // Показать вкладку
            headers[i].classList.add("selected");
            content[i].classList.add("selected");
        } else { //Скрыть вкладку
            headers[i].classList.remove("selected");
            content[i].classList.remove("selected");
        }
    }
};

