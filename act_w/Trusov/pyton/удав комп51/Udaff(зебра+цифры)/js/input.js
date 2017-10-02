function Input(directionCallback) {

    function init() {
        document.querySelector('body').addEventListener('keydown', function (event) {
            switch (event.keyCode) {
                case 38: directionCallback('up');    break; // up
                case 40: directionCallback('down');  break; // down
                case 37: directionCallback('left');  break; // left
                case 39: directionCallback('right'); break; // right
            }
        });
    }
    init();
}