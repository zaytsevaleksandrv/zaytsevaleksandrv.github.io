function Data(width, height) {

    var field = [];
    var udaff = [];
    var direction;

    this.getUdaff = function () {
        return udaff;
    }

    this.moveUdaff = function () {
        switch (direction) { 
        case "up":
        udaff.unshift({x: udaff[0].x,y: udaff[0].y - 1});
        udaff.pop();
        break;
        }
    }

    function init() {
    //проинициализировать поле
        for (var i = 0; i < width; i++) {
            field[i] = [];
            for (var j = 0; j < height; j++){
                field[i].push(0);
        }
    }
    //создать змейку
    var centerX = Math.floor(field.length/2);
    var centerY = Math.floor(field[0].length/2);
    udaff.push({x:centerX,y:centerY});
    udaff.push({x:centerX,y:centerY+1});
    udaff.push({ x: centerX, y: centerY + 2 });
    direction = "up";
}
init();
}