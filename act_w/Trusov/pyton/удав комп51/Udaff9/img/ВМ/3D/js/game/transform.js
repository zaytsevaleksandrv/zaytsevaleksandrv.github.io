function Transform() {

    var A = [[0, 0, 0, 1]];

    var B = {
        MOVE: [[1, 0, 0, 0],
               [0, 1, 0, 0],
               [0, 0, 1, 0],
               [1, 1, 1 ,1]],

        OX: [[1, 0, 0, 0],
			 [0, 1, 1, 0],
			 [0, 1, 1, 0],
			 [0, 0, 0, 1]],

        OY:  [[1, 0, 0, 0],
			  [0, 1, 1, 0],
			  [0, 1, 1, 0],
			  [0, 0, 0, 1]],
              
        OXM: [[1, 0, 0, 0],
			  [0, 1, 1, 0],
			  [0, 1, 1, 0],
			  [0, 0, 0, 1]],
        OYM: [[1, 0, 0, 0],
			  [0, 1, 1, 0],
			  [0, 1, 1, 0],
			  [0, 0, 0, 1]],
    };

    var res = [[0, 0, 0, 0]];

    function fillA(point) {
        A[0][0] = point.x;
        A[0][1] = point.y;
        A[0][2] = point.z;
        A[0][3] = point.d;
        return A;
    }

	function mult (A,B) {
		for (var i = 0; i < res.length; i++) {
			for (var j = 0; j < B[i].length; j++) {
				var S = 0;
				for (var k = 0; k < A[i].length; k++){
					S += A[i][k]*B[k][j];
				}
				res[i][j] = S;
			}
		}
	}
	
	//функция свдига точки на вектор t
	function move(point, t) {
		mult(fillA(point), B.MOVE);
		return Point(res[0][0],res[0][1],res[0][2]);
	}
	
	//функция масштабирования по вектору t
	function zoom(point, t) {
		var A = [[point.x, point.y, point.z, point.d]];
		var B = [[t.x,0,0,0],[0,t.y,0,0],[0,0,t.z,0],[0,0,0,1]];
		mult(A, B);
		return Point(res[0][0],res[0][1],res[0][2]);
	} 
	
	// в +
	function rotateOx(point) {
		var res = mult(fillA(point), B.OX);
		return Point(res[0][0],res[0][1],res[0][2]);
	}
	
	// в +
	function rotateOy(point) {
		mult(fillA(point), B.OY);
		return Point(res[0][0],res[0][1],res[0][2]);
	}
	
	// в -
	function rotateOxM(point) {
		mult(fillA(point), B.OXM);
		return Point(res[0][0],res[0][1],res[0][2]);
	}
	
	// в -
	function rotateOyM(point) {
		mult(fillA(point), B.OYM);
		return Point(res[0][0],res[0][1],res[0][2]);
	}

    function prepareMatrixMove (t) {
        B.MOVE = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[t.x,t.y,t.z,1]];   
    }

	this.prepareMatrix = function (delta) {
        var koef = 240;
        B.OX = [
					[1,                                 0,                                0, 0],
					[0,  Math.cos(Math.PI * delta / koef), Math.sin(Math.PI * delta / koef), 0],
					[0, -Math.sin(Math.PI * delta / koef), Math.cos(Math.PI * delta / koef), 0],
					[0,                                 0,                                0, 1]
				];
        B.OY = [
					[Math.cos(Math.PI * delta / koef), 0, -Math.sin(Math.PI * delta / koef), 0],
					[                               0, 1,                                 0, 0],
					[Math.sin(Math.PI * delta / koef), 0,  Math.cos(Math.PI * delta / koef), 0],
					[                               0, 0,                                 0, 1]
				];
        B.OXM = [
					[1,                                 0,                                0, 0],
					[0,  Math.cos(Math.PI * delta / koef), Math.sin(Math.PI * delta / koef), 0],
					[0, -Math.sin(Math.PI * delta / koef), Math.cos(Math.PI * delta / koef), 0],
					[0,                                 0,                                0, 1]
				];
        B.OYM = [
					[Math.cos(Math.PI * delta / koef), 0, -Math.sin(Math.PI * delta / koef), 0],
					[                               0, 1,                                 0, 0],
					[Math.sin(Math.PI * delta / koef), 0,  Math.cos(Math.PI * delta / koef), 0],
					[                               0, 0,                                 0, 1]
				];
    };

	//
	this.moveOXMinus = function (point, delta) {
        prepareMatrixMove(Point(-delta.move, 0, 0));
		return move(point, Point(-delta.move, 0, 0));
	};
	this.moveOXPlus = function (point, delta) {
        prepareMatrixMove(Point(delta.move, 0, 0));
		return move(point, Point(delta.move, 0, 0));
	}; 
	this.moveOYMinus = function (point, delta) {
        prepareMatrixMove(Point(0, -delta.move, 0));
		return move(point, Point(0, -delta.move, 0));
	};
	this.moveOYPlus = function (point, delta) {
        prepareMatrixMove(Point(0, delta.move, 0));
		return move(point, Point(0, delta.move, 0));
	};
	
	//
	this.zoomPlus = function (point, delta) {
		return zoom(point, Point(delta.plus,delta.plus,delta.plus));
	};
	this.zoomMinus = function (point, delta) {
		return zoom(point, Point(delta.minus,delta.minus,delta.minus));
	};
	
	// в +
	this.rotateOX = function (point, _delta) {
		return rotateOx(point, _delta);
	};
	this.rotateOY = function (point, _delta) {
		return rotateOy(point, _delta);
	};
	// в -
	this.rotateOXm = function (point, _delta) {
		return rotateOxM(point, _delta);	
	};
	this.rotateOYm = function (point, _delta) {
		return rotateOyM(point, _delta);
	};

}