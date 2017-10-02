window.onload = function () { // событие завершения загрузки окна

    var field = {
        width: 50,
        height: 50
    };
    var canvas = {
        width: 500,
        height: 500
    };

    var data = new Data(field.width, field.height);
    var graph = new Graph(canvas.width, canvas.height);
    var input = new Input(directionCallback);

    function getXs(x) {
        return canvas.width / field.width * x;
    }
    function getYs(y) {
        return canvas.height / field.height * y;
    }

    function directionCallback(direction) {
        data.changeDirection(direction);
    }

    function render() {
        // очистить экран
        graph.fillRect("#d0d0d0");
        // нарисовать еду
        var field = data.getField();
        for (var i = 0; i < field.length; i++) {
            for (var j = 0; j < field[i].length; j++) {
                if (field[i][j] > 0) {
                    graph.fillSmallRect(getXs(i), getYs(j), getXs(1), getYs(1));
                }
            }
        }
        // нарисовать удава
        var udaff = data.getUdaff();
        for (var i = 0; i < udaff.length; i++) {
            if (i === 0) { // рисуем голову
                var r = getXs(1) / 2;
                graph.circle(getXs(udaff[i].x) + r, getYs(udaff[i].y) + r, r);
            } else { // рисуем тело
                graph.rect(getXs(udaff[i].x), getYs(udaff[i].y), getXs(1), getYs(1));
            }
        }
    }

    render();

    setInterval(function () {
        data.refresh();
        render();
    }, 200);
};