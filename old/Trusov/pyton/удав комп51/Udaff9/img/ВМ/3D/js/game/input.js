function Input(options) {
	
	var moveCB = options.callback.move;
	var zoomCB = options.callback.zoom;
	var rotateCB = options.callback.rotate;
	var DIRECTION = options.direction;
	var canvas = options.canvas;
	var canMove = false;
	
	document.addEventListener('keydown', function(event) {
	//	console.log(event);
		switch(event.keyCode) {
			case 65: moveCB(DIRECTION.LEFT);  break;//left (a)
			case 68: moveCB(DIRECTION.RIGHT); break;//right (d)
			case 87: moveCB(DIRECTION.UP);	  break;//up (w)
			case 83: moveCB(DIRECTION.DOWN);  break;//down (s)
			case 87: zoomCB(DIRECTION.PLUS); break;//приближение (+)
			case 83: zoomCB(DIRECTION.MINUS); break;//отдаление (-)
			/*case 38: rotateCB(DIRECTION.ROTATEOY); break;// вращение по оси ОУ
			case 39: rotateCB(DIRECTION.ROTATEOZ); break;// вращение по оси ОZ
			case 40: rotateCB(DIRECTION.ROTATEOX); break;// вращение по оси OX*/
		}
	});
	
	// +/-
	canvas.addEventListener('wheel', function (event) {
       if (!(event.deltaY > 0)) {
		   zoomCB(DIRECTION.PLUS);
	   } else {
		   zoomCB(DIRECTION.MINUS);
	   };
    });
	
	canvas.addEventListener('mousemove', function (event) {
        if (canMove) {
			rotateCB(DIRECTION.ROTATEOX,  event.movementX);
			rotateCB(DIRECTION.ROTATEOY,  event.movementY);
			
		}
	});

    canvas.addEventListener('mousedown', function () {
        canMove = true;
    });

    canvas.addEventListener('mouseup', function () {
        canMove = false;
    });
}