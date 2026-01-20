interface Shape {
    area(): number;
    volume(): number;
}

class Square implements Shape {
    private side: number;

    constructor(side: number) {
        this.side = side;
    }

    area(): number {
        return this.side * this.side;
    }

    volume(): number {
        throw new Error("Square does not have volume");
    }
}

class Rectangle implements Shape {
    private length: number;
    private breadth: number;

    constructor(length: number, breadth: number) {
        this.length = length;
        this.breadth = breadth;
    }

    area(): number {
        return this.length * this.breadth;
    }

    volume(): number {
        throw new Error("Rectangle does not have volume");
    }
}

class Cube implements Shape {
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


const square: Shape = new Square(6);
const rectangle: Shape = new Rectangle(3, 6);
const cube: Shape = new Cube(6);

console.log("Square Area:", square.area());
console.log("Rectangle Area:", rectangle.area());
console.log("Cube Area:", cube.area());
console.log("Cube Volume:", cube.volume());

try {
    console.log("Square Volume:", square.volume());
} 
catch (error) {
    console.log((error as Error).message);
}
