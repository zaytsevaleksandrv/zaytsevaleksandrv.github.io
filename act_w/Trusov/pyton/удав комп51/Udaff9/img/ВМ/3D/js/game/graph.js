function Graph(options) {

    var canvas = null;
    var context = null;
    var memCanvas = null;
    var memContext = null;

    this.fillRect = function (color) {
        memContext.fillStyle = color;
        memContext.fillRect(0, 0, memCanvas.width, memCanvas.height);
    };

    this.line = function (koord, color) {
        memContext.beginPath();
        memContext.strokeStyle = (color) ? color : 'black';
        memContext.moveTo(koord.x1, koord.y1);
        memContext.lineTo(koord.x2, koord.y2);
        memContext.stroke();
    };

    this.polygon = function (points, penColor, fillColor) {
        if (points && points.length >= 3) {
            memContext.beginPath();
            memContext.strokeStyle = (penColor) ? penColor : 'black';
            memContext.moveTo(points[0].x, points[0].y);
            for (var i = 1; i < points.length; i++) {
                memContext.lineTo(points[i].x, points[i].y);
            }
            memContext.closePath();
            memContext.stroke();
            memContext.fillStyle = (fillColor) ? fillColor : 'black';
            memContext.fill();
        }
    };

    this.polygon4P = function (points, fillColor) {
        memContext.beginPath();
        memContext.strokeStyle = (fillColor) ? fillColor : 'black';
        memContext.moveTo(points[0].x, points[0].y);
        memContext.lineTo(points[1].x, points[1].y);
        memContext.lineTo(points[2].x, points[2].y);
        memContext.lineTo(points[3].x, points[3].y);
        memContext.lineTo(points[0].x, points[0].y);
        memContext.closePath();
        memContext.stroke();
        memContext.fillStyle = (fillColor) ? fillColor : 'black';
        memContext.fill();
	};

    this.point = function (point, penColor) {
        memContext.beginPath();
        memContext.strokeStyle = (penColor) ? penColor : 'black';
        memContext.arc(point.x, point.y, 1, 0, 2 * Math.PI, true);
        memContext.stroke();
    }

    this.getCanvas = function () {
        return canvas;
    };

    this.fillRender = function () {
        context.drawImage(memCanvas, 0, 0);
    };

    function init() {
        // канвас в ДОМ-е
        canvas = document.createElement('canvas');
        canvas.width = options.width;
        canvas.height = options.height;
        document.querySelector('body').appendChild(canvas);
        context = canvas.getContext('2d');
        // виртуальный канвас
        memCanvas = document.createElement('canvas');
        memCanvas.width = options.width;
        memCanvas.height = options.height;
        memContext = memCanvas.getContext('2d');
    }
    init();
}