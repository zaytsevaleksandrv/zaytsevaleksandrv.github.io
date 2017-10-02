function GraphManager(width, height) {

    var width = width || 300,
        height = height || 300;

    var data = new Data({ width: width, height: height });
    var graph = new Graph({ width: width, height: height });
	var input = new Input({
		direction: Data.prototype.DIRECTION,
		callback: {
			move: moveScene,
			zoom: zoomScene,
			rotate: rotateScene
		},
		canvas: graph.getCanvas()
	});

    function render() {
        graph.fillRect('#909090');
        data.render(function (koord, color, polygon) {
            if (polygon) {
                graph.polygon4P(polygon.points, 'rgb(' + polygon.fillColor.r + ',' + polygon.fillColor.g + ',' + polygon.fillColor.b + ')');
            }
            if (koord) {
                if (koord.x1 && koord.y1 && koord.x2 && koord.y2) {
                    graph.line(koord, color);
                }
                if (koord.x && koord.y) {
                    graph.point(koord, color);
                }
            }
        });
        graph.fillRender();
    }

	function moveScene(direction) {
		data.moveScene(direction);
		render();
	}
	
	function zoomScene(direction) {
		data.zoomScene(direction);
		render();
	}
	
	function rotateScene(direction, _delta) {
		data.rotateScene(direction, _delta);
		render();
	}
	
    function init() {
        render();
    }
    init();
}