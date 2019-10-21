Data.prototype.genObjects = {

    generateOXYZ: function () {
        return {
            points: [Point(0, 0, 0), Point(0.25, 0, 0), Point(0, 0.25, 0), Point(0, 0, 0.25)],
            lines: [Line(0, 1), Line(0, 2), Line(0, 3)]
        };
    },

    generateCube: function () {
        var color = { r: 1, g: 255, b: 250 };
        return {
            points: [Point(2, 2, 2), Point(2, 2, -2), Point(-2, 2, -2), Point(-2, 2, 2),
                     Point(2, -2, 2), Point(2, -2, -2), Point(-2, -2, -2), Point(-2, -2, 2)],
            lines: [Line(0, 1), Line(1, 2), Line(2, 3), Line(3, 0),
					Line(4, 5), Line(5, 6), Line(6, 7), Line(7, 4),
					Line(0, 4), Line(1, 5), Line(2, 6), Line(3, 7)],
            polygons: [
                Polygon([0, 1, 2, 3], color),
                Polygon([4, 5, 6, 7], color),
                Polygon([0, 1, 5, 4], color),
                Polygon([0, 3, 7, 4], color),
                Polygon([2, 6, 7, 3], color),
                Polygon([2, 6, 5, 1], color)]
        };
    },

    brick: function (point, size, color) {
        size = (size instanceof Object) ? size : { x: size, y: size, z: size };
        return {
            points: [
                Point(point.x         , point.y         , point.z         ),
                Point(point.x         , point.y         , point.z - size.z),
                Point(point.x - size.x, point.y         , point.z - size.z),
                Point(point.x - size.x, point.y         , point.z         ),
                Point(point.x         , point.y - size.y, point.z         ),
                Point(point.x         , point.y - size.y, point.z - size.z),
                Point(point.x - size.x, point.y - size.y, point.z - size.z),
                Point(point.x - size.x, point.y - size.y, point.z        )],
            lines: [Line(0, 1), Line(1, 2), Line(2, 3), Line(3, 0), Line(4, 5), Line(5, 6), Line(6, 7), Line(7, 4), Line(0, 4), Line(1, 5), Line(2, 6), Line(3, 7)],
            polygons: [Polygon([0, 1, 2, 3], color), Polygon([4, 5, 6, 7], color), Polygon([0, 1, 5, 4], color), Polygon([0, 3, 7, 4], color), Polygon([2, 6, 7, 3], color), Polygon([2, 6, 5, 1], color)]
        };
    },

    generateSphere: function (center, R, count, layer, color) {
        var points = [];
        var lines = [];
        var polygons = [];
        var teta = 0;
        // points
        for(var j = 0; j <= layer; j++) {
            teta = Math.PI / 180 * 180 / layer * j;
            var phi = 0;
            for(var i = 0; i < count; i++) {
                phi = Math.PI / 180 * 360 / count * i;
                points.push(Point(
					center.x + R * Math.sin(teta) * Math.cos(phi),
                    center.z + R * Math.cos(teta),
                    center.y + R * Math.sin(teta) * Math.sin(phi)
					));
            }
        }
        // lines
        for(var i = 0; i < points.length - 1; i++) {
            if(i % count === 0) {
                if(i >= count) {
                    lines.push(Line(i, i + count - 1));
                }
            } else {
                lines.push(Line(i, i - 1));
            }
            if(i + count < points.length) {
                lines.push(Line(i, i + count));
            }
        }
        // polygons
        for(var i = 0; i < points.length; i++) {
            if((i + 1) % count != 0) {
                if(i + count + 1 < points.length) {
                    polygons.push(Polygon([i, i + 1, i + count + 1, i + count], color));
                }
            }
            if((i + 1) % count === 0) {
                if(i + count + 1 < points.length) {
                    polygons.push(Polygon([i, i + 1, i + count + 1, i + count], color));
                }
            }
        }
        return {
            points: points,
            lines: lines,
            polygons: polygons
        };
    },

    generateHyperParab: function (startPoint, countX, countY, width, height, color) {
        var points = [];
        var lines = [];
        var polygons = [];
        //points
        for(var i = 0; i < countY; i++) {
            for(var j = 0; j < countX; j++) {
                var x = j / countX * width - startPoint.x;
                var z = i / countY * height - startPoint.z;
                points.push(Point(x, x * x - z * z, z));
            }
        }
        //lines
        for(var i = 0; i < points.length; i++) {
            if(i % countX != 0) {
                lines.push(Line(i, i - 1));
            }
            if(i + countX < points.length) {
                lines.push(Line(i, i + countX));
            }
        }
        //polygons
        for(var i = 0; i < points.length; i++) {
            if((i + 1) % countX != 0) {
                if(i + countX + 1 < points.length) {
                    polygons.push(Polygon([i, i + 1, i + countX + 1, i + countX], color));
                }
            }
        }
        return {
            points: points,
            lines: lines,
            polygons: polygons
        };
    }
};