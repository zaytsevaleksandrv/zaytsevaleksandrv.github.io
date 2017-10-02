window.onload = function () {

    var width = 500;
    var height = 500;

    var data = new Data(width, height);
    var graph = new Graph(width, height);
    var input = new Input(zoomCallback, moveCallback);

    function render() {
        graph.fillRect("#d0d0d0");
        //graph.draw();
        data.render(function (x1, y1, x2, y2, color) {
            graph.line(x1, y1, x2, y2, color)
        });
    }

    function zoomCallback(zoom) {
        data.zoom(zoom);
        render();
    }

    function moveCallback(x, y) {
        data.move(x, y);
        render();
    }

    render();

};