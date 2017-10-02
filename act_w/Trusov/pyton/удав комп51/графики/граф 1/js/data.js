function Data(width, height) {

    var ekran = {
        left: -5,
        bottom: -5,
        width: 10,
        height: 10
    };
    var zoomSize = 0.2;

    var canvasWidth = width;
    var canvasHeight = height;
    var detail = 1000;

    var Fs = [
      { F: function (x) { return x * x }  ,color : 'red'},
      { F: function (x) { return Math.cos(x) },color : 'green'},
    ];

    function getXs(x) {
        return canvasWidth * (x - ekran.left) / ekran.width;
    }

    function getYs(y) {
        return canvasHeight - canvasHeight * (y - ekran.bottom) / ekran.height
    }

    function getX(x) {
        return x / 10;
    }

    function getY(y) {
        return y / 10;
    }

    function printOXY(cb) {
        var color = "black";
        var sizeR = 5;
        //print OXY
        cb(getXs(ekran.left), getYs(0), getXs(ekran.width + ekran.left), getYs(0), color);
        cb(getXs(0), getYs(ekran.bottom), getXs(0), getYs(ekran.height + ekran.bottom), color);
        //print riski
        for (var i = 0; i < ekran.width + ekran.left; i++) {
            cb(getXs(i), getYs(0) + sizeR, getXs(i), getYs(0) - sizeR, color);
        }
        for (var i = 0; i > ekran.left; i--) {
            cb(getXs(i), getYs(0) - sizeR, getXs(i), getYs(0) + sizeR, color);
        }
        for (var i = 0; i < ekran.height + ekran.bottom; i++) {
            cb(getXs(0) - sizeR, getYs(i), getXs(0) + sizeR, getYs(i), color);
        }
        for (var i = 0; i > ekran.bottom; i--) {
            cb(getXs(0) + sizeR, getYs(i), getXs(0) - sizeR, getYs(i), color);
        }
        //arrows
        cb(getXs(ekran.width + ekran.left), getYs(0), getXs(ekran.width + ekran.left) - sizeR * 2, getYs(0) - sizeR, color);
        cb(getXs(ekran.width + ekran.left), getYs(0), getXs(ekran.width + ekran.left) - sizeR * 2, getYs(0) + sizeR, color);

        cb(getXs(0), getYs(ekran.height + ekran.bottom), getXs(0) - sizeR, getYs(ekran.height + ekran.bottom) + sizeR * 2, color);
        cb(getXs(0), getYs(ekran.height + ekran.bottom), getXs(0) + sizeR, getYs(ekran.height + ekran.bottom) + sizeR * 2, color);
    }

    function printGraph(cb, f, color) {
        var color = color || "red";
        var x = ekran.left;
        var y = f(x);
        var dx = ekran.width / detail;
        while (true) {
            var x1 = getXs(x);
            var y1 = getYs(f(x));
            var x2 = getXs(x + dx);
            var y2 = getYs(f(x) + dx);

            cb(x1, y1, x2, y2, color);

            x += dx;

            if (x > ekran.width + ekran.left) {
                break;
            }
        }
    }

    function printGraphs(cb) {
        for (var i = 0; i < Fs.length; i++) {
            printGraph(cb,Fs[i].F, Fs[i].color);
        }
    }


    this.render = function (cb) {
        printOXY(cb)
        printGraphs(cb);
    };

    this.zoom = function (zoom) {
        if (zoom) { //приблизить
            if (ekran.width - zoomSize > 0 && ekran.height - zoomSize > 0) {
                ekran.width -= zoomSize;
                ekran.height -= zoomSize;
                ekran.left += zoomSize / 2;
                ekran.botton += zoomSize / 2;
            }
        } else {  //отдалить
            ekran.width += zoomSize;
            ekran.height += zoomSize;
            ekran.left -= zoomSize / 2;
            ekran.botton -= zoomSize / 2;
        };
    };

    this.move = function (x, y) {
        // console.log(x, y);

        ekran.left -= getX(x);
        ekran.botton -= getY(y);
    };
}