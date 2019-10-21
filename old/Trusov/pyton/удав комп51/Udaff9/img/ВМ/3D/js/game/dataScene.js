Data.prototype.genScene = function (self) {

    var objects = [];
    var lights = [];

    //фронтовой кирпич
    function getBrickOX(point, size, color) {
        objects.push(self.brick(Point(1, 1, 1), { x: 1, y: 0.5, z: 0.1 }, { r: 0, g: 255, b: 0 }));
    }
    //боковой кирпич
    function getBrickOY(point, size, color) {
        objects.push(self.brick(point, size, color));
    }
    //стоячий кирпич
    function getBrickOZ(point, size, color) {
        objects.push(self.brick(Point(1, 1, 1), { x: 1, y: 0.5, z: 0.1 }, { r: 0, g: 255, b: 0 }));
    }

    function ground() {
        for(var i = -5; i < 10; i++) {
            getBrickOY(Point(-7, -7, i), { x: -50, y: 0, z: 20 }, { r: 100, g: 100, b: 100 });
            getBrickOY(Point(-7, -7, i), { x: 50, y: 0, z: 20 }, { r: 100, g: 100, b: 100 });
        }
    }

    function ark() {
        for(var i = -6; i < 6; i++) {
            getBrickOY(Point(-6, i, 6), { x: 1, y: 1, z: 1 }, { r: 255, g: 100, b: 100 });
        }
        for(var i = -6; i < 7; i++) {
            getBrickOY(Point(i, 6, 6), { x: 1, y: 1, z: 1 }, { r: 255, g: 100, b: 100 });
        }
        for(var i = -6; i < 6; i++) {
            getBrickOY(Point(6, i, 6), { x: 1, y: 1, z: 1 }, { r: 255, g: 100, b: 100 });
        }
    }

    function house() {
        //Левая стенка
        for(var i = -6; i < 6; i++) {
            getBrickOY(Point(-40, i, -6), { x: 1, y: 1, z: 10 }, { r: 100, g: 70, b: 240 });
        }
        //Задняя стенка
        for(var i = -6; i < 6; i++) {
            getBrickOY(Point(-40, i, -16), { x: -20, y: 1, z: 1 }, { r: 100, g: 70, b: 240 });
        }
        //Правая стенка
        for(var i = -6; i < 6; i++) {
            getBrickOY(Point(-20, i, -6), { x: 1, y: 1, z: 10 }, { r: 100, g: 70, b: 240 });
        }
        //Передняя стенка
        for(var i = -6; i < 6; i++) {
            getBrickOY(Point(-20, i, -6), { x: 7, y: 1, z: 1 }, { r: 100, g: 70, b: 240 });
        }
        //Передняя стенка
        for(var i = -6; i < 6; i++) {
            getBrickOY(Point(-40, i, -6), { x: -7, y: 1, z: 1 }, { r: 100, g: 70, b: 240 });
        }
        for(var i = 6; i < 10; i++) {
            getBrickOY(Point(-41, i, -6), { x: -21, y: 1, z: 12 }, { r: 100, g: 70, b: 240 });
        }
    }

    //ground();
    ark();
    house();

    //objects.push(self.generateSphere(Point(4, 2, 2), 2, 20, 10, { r: 255, g: 100, b: 100 }));
    //objects.push(self.generateSphere(Point(0, 0, 1), 1, 20, 10, { r: 255, g: 255, b: 100 }));
    //objects.push(generateOXYZ());
    //objects.push(self.generateCube());
    //objects.push(self.brick(Point( 1, 1, 1), { x: 1, y: 0.5, z: 0.1 }, { r: 0, g: 255, b: 0 }));
    //objects.push(self.brick(Point( 2, 1, 1), { x: 1, y: 0.5, z: 0.1 }, { r: 0, g: 255, b: 0 }));
    //objects.push(self.brick(Point( 1, 2, 1), { x: 1, y: 0.5, z: 0.1 }, { r: 0, g: 255, b: 0 }));
    //objects.push(self.brick(Point( 2, 2, 1), { x: 1, y: 0.5, z: 0.1 }, { r: 0, g: 255, b: 0 }));
    //objects.push(self.brick(Point(-1, 1, 1), { x: 1, y: 0.5, z: 0.1 }, { r: 0, g: 255, b: 0 }));
    //objects.push(self.brick(Point( 0, 1, 1), { x: 1, y: 0.5, z: 0.1 }, { r: 0, g: 255, b: 0 }));
    //objects.push(self.brick(Point(-1, 2, 1), { x: 1, y: 0.5, z: 0.1 }, { r: 0, g: 255, b: 0 }));
    //objects.push(self.brick(Point( 0, 2, 1), { x: 1, y: 0.5, z: 0.1 }, { r: 0, g: 255, b: 0 }));
    //objects.push(self.generateHyperParab(Point(2, 0, 2), 20, 20, 4, 4, { r: 1, g: 255, b: 250 }));
    lights.push(
    //Light(2.1, 2.1, 0, 5),
    //Light(-4, -3, 0, 3),
        Light(0, 50, 0, 1000)
        //Light(0, 0, 0, 100)
     );

    return {
        objects: objects,
        lights: lights
    };
}
