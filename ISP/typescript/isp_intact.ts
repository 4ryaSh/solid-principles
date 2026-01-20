interface Shape2D {
    area(): number;
}

interface Shape3D extends Shape2D {
    volume(): number;
}

class Square implements Shape2D {
    private side: number;

    constructor(side: number) {
        this.side = side;
    }

    area(): number {
        return this.side * this.side;
    }
}

class Cube implements Shape3D {
    private side: number;

    constructor(side: number) {
        this.side = side;
    }

    area(): number {
        return 6 * this.side * this.side;
    }

    volume(): number {
        return this.side * this.side * this.side;
    }
}

const square = new Square(6);
const cube = new Cube(6);

console.log("Square Area:", square.area());
console.log("Cube Area:", cube.area());
console.log("Cube Volume:", cube.volume());
