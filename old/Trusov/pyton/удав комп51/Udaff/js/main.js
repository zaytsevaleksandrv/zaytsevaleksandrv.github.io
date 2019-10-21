window.onload = function () {

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
    var input = new Input(moveCallback);

    function getXs(x) {
        return canvas.width / field.width * x;
    }

    function getYs(y) {
        return canvas.height / field.height * y;
    }



    function render() {
        graph.fillRect("#D3D3D3");

        var udaff = data.getUdaff();
        for (var i = 0; i < udaff.length; i++) {
            if (i === 0) {
                var r = getXs(1) / 2;
                graph.circle(getXs(udaff[i].x) + r, getYs(udaff[i].y) + r, r);
            }
            else {
                graph.rect(getXs(udaff[i].x), getYs(udaff[i].y), getXs(1), getYs(1));
            }
        }

    }




    function moveCallback(x, y) {

        render();
    }

    render();

    setInterval(function () {
        data.moveUdaff();
        render();
    }, 500)

};