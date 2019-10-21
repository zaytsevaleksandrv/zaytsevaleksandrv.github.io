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

    this.draw = function (cb) {
        context.strokeStyle = 'black';
        context.font = '24px serif';
        context.strokeText('y', width / 2 + 5, 15);
        context.strokeText('x', width - 15, height / 2 - 8);
        context.strokeText('0', width / 2 + 6, height / 2 + 22);
        context.strokeText('1', width / 1.7, height / 2 + 22);
        context.strokeText('1', width / 2 + 6, height / 2.4);
        context.strokeText('f(x)=x*x', width / 1.55, height / 3);
        context.strokeText('f(x)=cos(x)', width / 9, height / 1.5);
    }; 
}