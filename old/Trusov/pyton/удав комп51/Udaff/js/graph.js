function Graph(width,height) {

    var canvas = document.getElementById('lawer');
    canvas.width = width;
    canvas.height = height;
    var context = canvas.getContext("2d");

    this.fillRect = function (color) {
        context.fillStyle = color;
        context.fillRect(0, 0, canvas.width, canvas.height);
    };

    this.line = function (x1, y1, x2, y2, color) {
        context.beginPath();
        context.strokeStyle = color; 
        context.moveTo(x1,y1);
        context.lineTo(x2,y2);
        context.stroke();
    };

    this.circle = function (x, y, r, color) {
        context.beginPath();
        context.strokeStyle = color || "blue";
        context.arc(x, y, r, 0, 2 * Math.PI);
        context.stroke();
    };

    this.rect = function (x, y, width, height, color) {
        context.beginPath();
        context.strokeStyle = color || "green";
        context.rect(x, y, width, height);
        context.stroke();
    }




}