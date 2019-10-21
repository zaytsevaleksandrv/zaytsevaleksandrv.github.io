window.onload = function () { // событие завершения загрузки окна

    var field = {
        width: 30,
        height: 30
    };
    var canvas = {
        width: 800,
        height: 800
    };
    var interval;
    var isGame = true;

    var data = new Data(field.width, field.height, gameOverCallback);
    var graph = new Graph(canvas.width, canvas.height);
    var input = new Input(directionCallback);

    var img = new Image();
    img.src = "img/snake-sprite.png";

    function getXs(x) {
        return canvas.width / field.width * x;
    }
    function getYs(y) {
        return canvas.height / field.height * y;
    }

    function directionCallback(direction) {
        data.changeDirection(direction);
    }

    function gameOverCallback(text) {
        isGame = false;
        clearInterval(interval);
        graph.text(text, canvas.width / 2, canvas.height / 2, "red");
    }

    function render() {
        if (isGame) {
            // очистить экран
            graph.fillRect("#d0d0d0");
            // нарисовать еду
            var field = data.getField();
            for (var i = 0; i < field.length; i++) {
                for (var j = 0; j < field[i].length; j++) {
                    if (field[i][j] > 0) {
                        graph.sprite(img, 0, 192, 64, 64, getXs(i), getYs(j), getXs(1), getYs(1));
                    }
                }
            }
            // нарисовать удава
            var udaff = data.getUdaff();
            for (var i = 0; i < udaff.length; i++) {
                if (i === 0) { // рисуем голову
                    if (udaff[i].y < udaff[i + 1].y) { // смотрит вверх
                        graph.sprite(img, 192, 0, 64, 64, getXs(udaff[i].x), getYs(udaff[i].y), getXs(1), getYs(1));
                    }
                    if (udaff[i].y > udaff[i + 1].y) { // смотрит вниз
                        graph.sprite(img, 256, 64, 64, 64, getXs(udaff[i].x), getYs(udaff[i].y), getXs(1), getYs(1));
                    }
                    if (udaff[i].x < udaff[i + 1].x) { // смотрит влево
                        graph.sprite(img, 192, 64, 64, 64, getXs(udaff[i].x), getYs(udaff[i].y), getXs(1), getYs(1));
                    }
                    if (udaff[i].x > udaff[i + 1].x) { // смотрит вправо
                        graph.sprite(img, 256, 0, 64, 64, getXs(udaff[i].x), getYs(udaff[i].y), getXs(1), getYs(1));
                    }
                } else { // рисуем тело
                    if (i === udaff.length - 1) { // рисуем хвост
                        if (udaff[i].y < udaff[i - 1].y) { // смотрит вверх
                            graph.sprite(img, 256, 192, 64, 64, getXs(udaff[i].x), getYs(udaff[i].y), getXs(1), getYs(1));
                        }
                        if (udaff[i].y > udaff[i - 1].y) { // смотрит вниз
                            graph.sprite(img, 192, 128, 64, 64, getXs(udaff[i].x), getYs(udaff[i].y), getXs(1), getYs(1));
                        }
                        if (udaff[i].x < udaff[i - 1].x) { // смотрит влево
                            graph.sprite(img, 256, 128, 64, 64, getXs(udaff[i].x), getYs(udaff[i].y), getXs(1), getYs(1));
                        }
                        if (udaff[i].x > udaff[i - 1].x) { // смотрит вправо
                            graph.sprite(img, 192, 192, 64, 64, getXs(udaff[i].x), getYs(udaff[i].y), getXs(1), getYs(1));
                        }
                    } else {
                        if (udaff[i + 1].y === udaff[i - 1].y) {
                            graph.sprite(img, 64, 0, 64, 64, getXs(udaff[i].x), getYs(udaff[i].y), getXs(1), getYs(1));
                        } else if (udaff[i + 1].x === udaff[i - 1].x) {
                            graph.sprite(img, 128, 64, 64, 64, getXs(udaff[i].x), getYs(udaff[i].y), getXs(1), getYs(1));
                        }

                        if (udaff[i + 1].x > udaff[i - 1].x &&//1
                        udaff[i + 1].y > udaff[i - 1].y &&
                        udaff[i].y < udaff[i + 1].y) {
                        graph.sprite(img, 128, 0, 64, 64, getXs(udaff[i].x), getYs(udaff[i].y), getXs(1), getYs(1));
                        }

                        if (udaff[i + 1].x > udaff[i - 1].x &&//2
                        udaff[i + 1].y > udaff[i - 1].y &&
                        udaff[i].x < udaff[i + 1].x) {
                        graph.sprite(img, 0, 64, 64, 64, getXs(udaff[i].x), getYs(udaff[i].y), getXs(1), getYs(1));
                        }

                        if (udaff[i + 1].x < udaff[i - 1].x &&//3
                        udaff[i + 1].y < udaff[i - 1].y &&
                        udaff[i].y > udaff[i + 1].y) {
                            graph.sprite(img, 0, 64, 64, 64, getXs(udaff[i].x), getYs(udaff[i].y), getXs(1), getYs(1));
                        } else if (udaff[i + 1].x < udaff[i - 1].x &&
                        udaff[i + 1].y < udaff[i - 1].y) {
                            graph.sprite(img, 128, 0, 64, 64, getXs(udaff[i].x), getYs(udaff[i].y), getXs(1), getYs(1));
                        } 

                        if (udaff[i + 1].x > udaff[i - 1].x &&//4
                        udaff[i + 1].y < udaff[i - 1].y &&
                        udaff[i].x < udaff[i + 1].x) {
                        graph.sprite(img, 0, 0, 64, 64, getXs(udaff[i].x), getYs(udaff[i].y), getXs(1), getYs(1));
                        } else if (udaff[i + 1].x > udaff[i - 1].x &&
                        udaff[i + 1].y < udaff[i - 1].y) {
                            graph.sprite(img, 128, 128, 64, 64, getXs(udaff[i].x), getYs(udaff[i].y), getXs(1), getYs(1));
                        }

                        if (udaff[i + 1].x < udaff[i - 1].x &&//5
                        udaff[i + 1].y > udaff[i - 1].y &&
                        udaff[i].y == udaff[i + 1].y) {
                            graph.sprite(img, 128, 128, 64, 64, getXs(udaff[i].x), getYs(udaff[i].y), getXs(1), getYs(1));
                        }

                        if (udaff[i + 1].x < udaff[i - 1].x &&//5
                        udaff[i + 1].y > udaff[i - 1].y &&
                        udaff[i].y < udaff[i + 1].y ) {
                            graph.sprite(img, 0, 0, 64, 64, getXs(udaff[i].x), getYs(udaff[i].y), getXs(1), getYs(1));
                        }
                    }
                }
            }
        }
    }

    render();

    interval = setInterval(function () {
        data.refresh();
        render();
    }, 200);
};