function Graph(width, height) {

    var canvas = document.getElementById('lawer');
    canvas.width = width || 300;
    canvas.height = height || 300;
    var context = canvas.getContext("2d");

    this.fillRect = function (color) {
        context.fillStyle = color || "white";
        context.fillRect(0, 0, canvas.width, canvas.height);
    };

    this.line = function (x1, y1, x2, y2, color) {
        context.beginPath();
        context.strokeStyle = color || "black";
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
    };
}