function Input(zoomCallback, moveCallback) {
    var canvas = document.getElementById('lawer');

    var canMove = false;

    canvas.addEventListener('wheel', function (event) {
        zoomCallback(!!(event.wheelDelta < 0));
    });

    canvas.addEventListener('mousedown', function () {
        canMove = true;
    });

    canvas.addEventListener('mouseup', function () {
        canMove = false;
    });

    canvas.addEventListener('mousemove', function (event) {
        if (canMove) {
            moveCallback(event.movementX, event.movementY);
        }
    });
}