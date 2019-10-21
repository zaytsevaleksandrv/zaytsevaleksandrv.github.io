function Data(options) {

    var detail = 1000;

    var ekran = {
        left  : -5,
        bottom: -5,
        width :  10,
        height:  10
    };
    var deltaEkr = 1;
    var Width = options.width;
    var Height = options.height;

    var Fs = options.functions || [];

    // из локальной в экранную
    function getXs(x) {
        return (x - ekran.left) * Width / ekran.width;
    }
    function getYs(y) {
        return Height - (y - ekran.bottom) * Height / ekran.height;
    }
    // из экранной в локальную
    function getX(x) {
        return ekran.width * x / Width;
    }
    function getY(y) {
        return -ekran.height * y / Height;
    }

    function printGraphic(F, color, cb) {
        if (F instanceof Function) {
            var x = ekran.left;
            var dx = ekran.width / detail;
            var y1, y2;
            while (true) {
                try {
                    y1 = F(x);
                    y2 = F(x + dx);
                    if (Math.abs(y1 - y2) < ekran.height) {
                        cb({ x1: getXs(x), y1: getYs(y1), x2: getXs(x + dx), y2: getYs(y2) }, color);
                    }
                } catch (e) { }
                x += dx;
                if (x > ekran.width + ekran.left) {
                    break;
                }
            }
        }
    }

    function printGraphics(cb) {
        for (var i = 0; i < Fs.length; i++) {
            printGraphic(Fs[i].F, Fs[i].color, cb);
        }
    }

    function printOXY(cb) {
        cb({ x1: getXs(ekran.left), y1: getYs(0), x2: getXs(ekran.left + ekran.width), y2: getYs(0) }, 'black');
        cb({ x1: getXs(0), y1: getYs(ekran.bottom), x2: getXs(0), y2: getYs(ekran.bottom + ekran.height) }, 'black');
    }

    function printSetka(cb) {
        var color = '#D0D0D0';
        // сетка от начала вправо
        var x = 0;
        while (true) {
            if (x > ekran.left + ekran.width) {
                break;
            }
            cb({ x1: getXs(x), y1: getYs(ekran.bottom), x2: getXs(x), y2: getYs(ekran.bottom + ekran.height) }, color);
            x++;
        }
        // сетка от начала влево
        x = 0;
        while (true) {
            if (x < ekran.left) {
                break;
            }
            cb({ x1: getXs(x), y1: getYs(ekran.bottom), x2: getXs(x), y2: getYs(ekran.bottom + ekran.height) }, color);
            x--;
        }
        // сетка от начала вверх
        var y = 0;
        while (true) {
            if (y > ekran.bottom + ekran.height) {
                break;
            }
            cb({ x1: getXs(ekran.left), y1: getYs(y), x2: getXs(ekran.left + ekran.width), y2: getYs(y) }, color);
            y++;
        }
        // сетка от начала вниз
        y = 0;
        while (true) {
            if (y < ekran.bottom) {
                break;
            }
            cb({ x1: getXs(ekran.left), y1: getYs(y), x2: getXs(ekran.left + ekran.width), y2: getYs(y) }, color);
            y--;
        }
    }

    function printArrows(cb) {
        var x = getXs(ekran.left + ekran.width);
        var y = getYs(0);
        // стрелка на оси Ох
        cb({ x1: x, y1: y, x2: x - 8, y2: y + 4 }, "black");
        cb({ x1: x, y1: y, x2: x - 8, y2: y - 4 }, "black");
        // стрелка на оси Оу
        x = getXs(0);
        y = getYs(ekran.bottom + ekran.height);
        cb({ x1: x, y1: y, x2: x + 4, y2: y + 8 }, "black");
        cb({ x1: x, y1: y, x2: x - 4, y2: y + 8 }, "black");
    }

    this.updateFuncs = function (fs) {
        if (fs instanceof Array) {
            Fs = fs;
        }
    };

    this.getPoints = function (x1, x2, id1, id2) {
        if (x1 > x2) {
            var x3 = x1;
            x1 = x2;
            x2 = x3;
        }
        var points = [];
        for (var i = 0; i < Fs.length; i++) {
            if (Fs[i].id === id1) {
                var dx = (x2 - x1) / detail;
                for (var x = x1; x < x2; x += dx) {
                    points.push({ x: getXs(x), y: getYs(Fs[i].F(x)) });
                }
                break;
            }
        }
        for (var i = 0; i < Fs.length; i++) {
            if (Fs[i].id === id2) {
                var dx = (x2 - x1) / detail;
                for (var x = x2; x > x1; x -= dx) {
                    points.push({ x: getXs(x), y: getYs(Fs[i].F(x)) });
                }
                break;
            }
        }
        return points;
    };

    this.render = function (cb) {
        printSetka(cb);
        printOXY(cb);
        printArrows(cb);
        printGraphics(cb);
    };

    this.zoom = function (zoomPlus) {
        if (zoomPlus) { // увеличиваем
            if (ekran.width - deltaEkr > 0 && ekran.height - deltaEkr > 0) {
                ekran.width -= deltaEkr;
                ekran.height -= deltaEkr;
                ekran.left += deltaEkr / 2;
                ekran.bottom += deltaEkr / 2;
            }
        } else {
            ekran.width += deltaEkr;
            ekran.height += deltaEkr;
            ekran.left -= deltaEkr / 2;
            ekran.bottom -= deltaEkr / 2;
        }
    };
    this.move = function (dx, dy) {
        ekran.left -= getX(dx);
        ekran.bottom -= getY(dy);
    };
}