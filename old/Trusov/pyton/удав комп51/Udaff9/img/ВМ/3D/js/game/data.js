function Point(x, y, z) { return { x: x, y: y, z: z, d: 1 }; }

function Line(p1, p2) {	return { p1: p1, p2: p2 }; }

function Polygon(points, fillColor) {
	return {
		points: points || [],
		fillColor: { r: fillColor.r, g: fillColor.g, b: fillColor.b },
		rast: 0,
		lumen: 1,
        vector: null,
        scal: null,
        p0: null, p1: null, p2: null, p3: null
	};
}

function Light(x,y,z, lumen) {
    return {
        point: Point(x,y,z),
        lumen: lumen
    };
}

function Data(options) {

    var Width     = options.width;
    var Height    = options.height;
	var transform = new Transform();
	var DIRECTION = Data.prototype.DIRECTION;
    var objects   = Data.prototype.genObjects;
	var delta = {
		move : 0.4, //размер шага для смещения сдвиг
		plus : 1.2, //размер шага для смещения +
		minus: 0.8, //размер шага для смещения -
		zoom : 0.2
	};
	
    var camera = {
        point: Point(0, 30, 0),
        frame: {
            center: Point(0, 27, 0),
            width: 12,
            height: 12
        },
        vector: Point(0, 1, 0)
    };
    var scene = {
        objects: [],
		lights: []
    };

    // из локальной в экранную
    function getXs(x) {
        return (x - (camera.frame.center.x - camera.frame.width / 2)) * Width / camera.frame.width;
    }
    function getYs(z) {
        return Height - (z -(camera.frame.center.z - camera.frame.height / 2)) * Height / camera.frame.height;
    }
	
	//на рамку
	function getMs (point) {
		var zs = ((camera.point.y - camera.frame.center.y) * (point.y - camera.frame.center.z) / (camera.point.y - point.z));
        var ys = ((camera.point.y - camera.frame.center.y) * (point.y - camera.frame.center.y) / (camera.point.y - point.z));
		var xs = ((camera.point.y - camera.frame.center.y) * (point.x - camera.frame.center.x) / (camera.point.y - point.z));
		return Point(xs, ys, zs);
	}

	//Ищем расстояние между полигоном и точкой
    function getRast(polygon, point) {
        var vector = Point(
			(polygon.p0.x  + polygon.p1.x + polygon.p2.x + polygon.p3.x) / 4 - point.x,
			(polygon.p0.z  + polygon.p1.z + polygon.p2.z + polygon.p3.z) / 4 - point.y,
			(polygon.p0.y  + polygon.p1.y + polygon.p2.y + polygon.p3.y) / 4 - point.z);
		return Math.sqrt (vector.x * vector.x + vector.y * vector.y + vector.z * vector.z);
    }

    function delInvesiblePolygons(polygons) {
        var cameraVector = camera.vector;
        for (var i = 0; i < polygons.length; i++) { 
            var center = Point(
			    (polygons[i].p0.x + polygons[i].p1.x + polygons[i].p2.x + polygons[i].p3.x) / 4,
                (polygons[i].p0.z + polygons[i].p1.z + polygons[i].p2.z + polygons[i].p3.z) / 4,
                (polygons[i].p0.y + polygons[i].p1.y + polygons[i].p2.y + polygons[i].p3.y) / 4);
            if (center.y > camera.frame.center.y) {
                polygons.splice(i, 1);
            }
		}
    }

    // сортировка полигонов
	function sortPolygons(polygons) {
		for (var i = 0; i < polygons.length; i++) { 
			polygons[i].rast = getRast(polygons[i], camera.point);
		}
		polygons.sort(function (a,b) { return (a.rast < b.rast) ? 1: -1 });
	}

    function lightPolygons(polygons) {
		for (var i = 0; i < polygons.length; i++) {
            var sumLumen = 0;
            for (var j = 0; j < scene.lights.length; j++) {
                var light = scene.lights[j];
                var rast = getRast(polygons[i], light.point);
                rast = (rast === 0) ? 1 : light.lumen / (rast * rast);
                sumLumen += rast;
            }
            polygons[i].lumen = sumLumen;
		}
    }
	
    // рисуем полигоны
	function printPolygons (cb) {
        // набрать общий массив всех полигонов сцены
        var poly = [];
		for (var i = 0; i < scene.objects.length; i++) {
            var obj = scene.objects[i];
			if (obj.polygons) {
				for (var j = 0; j < obj.polygons.length; j++) {
                    var polygon = obj.polygons[j];
                    polygon.p0 = obj.points[polygon.points[0]];
                    polygon.p1 = obj.points[polygon.points[1]];
                    polygon.p2 = obj.points[polygon.points[2]];
                    polygon.p3 = obj.points[polygon.points[3]];
                    poly.push(polygon);
				}
			}
		}
        delInvesiblePolygons(poly); // удалить невидимые полигоны
		sortPolygons(poly); // отсортировать полигоны по расстоянию
        lightPolygons(poly); // подсветить полигоны
        for (var i = 0; i < poly.length; i++) {
		    var polygon = poly[i];
		    var p0 = getMs(polygon.p0);
		    var p1 = getMs(polygon.p1);
		    var p2 = getMs(polygon.p2);
		    var p3 = getMs(polygon.p3);
            var color = {
                r: Math.round(polygon.fillColor.r * polygon.lumen), 
                g: Math.round(polygon.fillColor.g * polygon.lumen), 
                b: Math.round(polygon.fillColor.b * polygon.lumen) };
		    cb(null, null, Polygon([
			    Point(getXs(p0.x), getYs(p0.z), 0),
			    Point(getXs(p1.x), getYs(p1.z), 0),
			    Point(getXs(p2.x), getYs(p2.z), 0),
			    Point(getXs(p3.x), getYs(p3.z), 0)
		    ], color));
        }
        delete poly;
	}
	
	function printLines (cb) {
		for (var i = 0; i < scene.objects.length; i++) {
            var obj = scene.objects[i];
			for (var j = 0; j < obj.lines.length; j++) {
				var line = obj.lines[j];
				var p1 = getMs(obj.points[line.p1]);
				var p2 = getMs(obj.points[line.p2]);
				cb({ x1: getXs(p1.x), y1: getYs(p1.z), x2: getXs(p2.x), y2: getYs(p2.z)}, 'green');
			}
		}	
	}
	
	function printPoints (cb) {
		for (var i = 0; i < scene.objects.length; i++) {
            var obj = scene.objects[i];
			for (var k = 0; k < obj.points.length; k++) {
				var point = getMs(obj.points[k]);
				cb(Point(getXs(point.x), getYs(point.z), 0), 'red');
			}
		}
	}
	
	function printSun (cb) {
		for (var i = 0; i < scene.lights.length; i++) {
			var lightPoint = getMs(scene.lights[i].point);
			cb(Point(getXs(lightPoint.x), getYs(lightPoint.z), 0), 'green');
		}
	}
	
	function moveObject (obj, direction) {
		var move;
		switch(direction) {
			case DIRECTION.LEFT : move = transform.moveOXMinus; break;
			case DIRECTION.RIGHT: move = transform.moveOXPlus;  break;
			case DIRECTION.UP   : move = transform.moveOYPlus;  break;
			case DIRECTION.DOWN : move = transform.moveOYMinus; break;
		}
		for (var i = 0; i < obj.points.length; i++) {
			obj.points[i] = move(obj.points[i], delta);
		}
	}
	
	function zoomObject (obj, direction) {
		var zoom;
		switch(direction) {
			case DIRECTION.PLUS : zoom = transform.zoomPlus;  break;
			case DIRECTION.MINUS: zoom = transform.zoomMinus; break;
		}
		for (var i = 0; i < obj.points.length; i++) {
			obj.points[i] = zoom(obj.points[i])
		}
	}
	
	function rotateObject (obj, direction, _delta) {
		var rotate;
		switch(direction) {
			case DIRECTION.ROTATEOX: 
				rotate = (_delta >= 0) ? transform.rotateOY : transform.rotateOYm;
			break;
			case DIRECTION.ROTATEOY:  
				rotate = (_delta >= 0) ? transform.rotateOX : transform.rotateOXm; 
			break;
		}
		for (var i = 0; i < obj.points.length; i++) {
			obj.points[i] = rotate(obj.points[i], _delta);
		}
	}
	
    this.render = function (cb) {
       printPolygons(cb);
	   //printLines(cb);
	   //printPoints(cb);
	   printSun(cb);
    };

	this.moveScene = function (direction) {
		if (scene.objects && scene.objects.length) {
			var objects = scene.objects;
			for (var i = 0; i < objects.length; i++) {
				moveObject(objects[i], direction);
			}
		}
	};
	
	this.zoomScene = function (direction) {
		switch (direction) {
			case DIRECTION.PLUS:
				camera.frame.center.y -=delta.zoom;
			break;
			case DIRECTION.MINUS: 
				camera.frame.center.y +=delta.zoom;
			break;
		}
	};
	
	this.rotateScene = function (direction, _delta) {
		if (scene.objects && scene.objects.length) {
            transform.prepareMatrix(_delta);
			var objects = scene.objects;
			for (var i = 0; i < objects.length; i++) {
				rotateObject(objects[i], direction);
			}
		}
	};
	
    function init() {
        scene = Data.prototype.genScene(Data.prototype.genObjects);
    }
    init();
};

Data.prototype.DIRECTION = {
	LEFT: 'left',
	RIGHT: 'right',
	UP: 'up',
	DOWN: 'down',
	PLUS: 'plus',
	MINUS: 'minus',
	ROTATEOX: 'R_OX',
	ROTATEOY: 'R_OY',
	ROTATEOZ: 'R_OZ',
};