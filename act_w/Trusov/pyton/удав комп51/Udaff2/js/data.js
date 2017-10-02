function Data(width, height, gameOverCallback) {

    var field = [];
    var udaff = [];
    var direction;
    var isLive;
    var food = 0;

    this.getUdaff = function () {
        return udaff;
    };

    this.getField = function () {
        return field;
    };

    function genNewFood() {
        var x = Math.floor(Math.random() * field.length);
        var y = Math.floor(Math.random() * field[0].length);
        var food = Math.floor(Math.random() * 8 + 1);
        for (var j = 0; j < udaff.length; j++) {
            if (x === udaff[j].x && y === udaff[j].y) {
                food = 0;
            }
        }
        field[x][y] = food;
    }

    function moveUdaff() {
        switch (direction) {
            case "up"   : udaff.unshift({ x: udaff[0].x,     y: udaff[0].y - 1 }); break;
            case "down" : udaff.unshift({ x: udaff[0].x,     y: udaff[0].y + 1 }); break;
            case "left" : udaff.unshift({ x: udaff[0].x - 1, y: udaff[0].y     }); break;
            case "right": udaff.unshift({ x: udaff[0].x + 1, y: udaff[0].y     }); break;
        }
    }

    function cutUdaff() {
        if (field[udaff[0].x][udaff[0].y]) {
            food += field[udaff[0].x][udaff[0].y];
            field[udaff[0].x][udaff[0].y] = 0;
            genNewFood();
        }
        if (food) {
            food--;
        } else {
            udaff.pop();
        }
    }

    function isUdaffLive() {
        // проверить, не вылез ли за границы поля
        if (udaff[0].x < 0 ||
            udaff[0].y < 0 ||
            udaff[0].x >= field.length ||
            udaff[0].y >= field[0].length) {
            isLive = false;
            gameOverCallback('GAME OVER!!!');
            return false;
        }
        // проверить, не сожрал ли сам себя
        for (var i = 1; i < udaff.length; i++) {
            if (udaff[0].x === udaff[i].x && udaff[0].y === udaff[i].y) {
                isLive = false;
                gameOverCallback('GAME OVER!!!');
                return false;
            }
        }
        return true;
    }

    this.refresh = function () {
        if (isLive) {
            moveUdaff();
            if (isUdaffLive()) {
                cutUdaff();
            }
        }
    };

    this.changeDirection = function (_direction) {
        direction = _direction;
    };

    function init() {
        // проинициализировать поле
        for (var i = 0; i < width; i++) {
            field[i] = [];
            for (var j = 0; j < height; j++) {
                field[i].push(0);
            }
        }
        // создать змейку
        var centerX = Math.floor(field.length / 2);
        var centerY = Math.floor(field[0].length / 2);
        udaff.push({ x: centerX, y: centerY });
        udaff.push({ x: centerX, y: centerY + 1 });
        udaff.push({ x: centerX, y: centerY + 2 });
        direction = "up";
        isLive = true;
        // добавить на поле еду
        for (var i = 0; i < 10; i++) {
            genNewFood();
        }
    }
    init();
}