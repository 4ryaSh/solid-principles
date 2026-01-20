interface Shape2D {
    int area();
}

interface Shape3D extends Shape2D {
    int volume();
}

class Square implements Shape2D {
    private int side;

    public Square(int side) { 
        this.side = side;
    }

    public int area() { 
        return side * side; 
    }
}

class Rectangle implements Shape2D {
    private int length, breadth;

    public Rectangle(int length, int breadth) {
        this.length = length;
        this.breadth = breadth;
    }

    public int area() { 
        return length * breadth; 
    }
}

class Cube implements Shape3D {
    private int side;

    public Cube(int side) { 
        this.side = side; 
    }

    public int area() { 
        return side * side * 6; 
    }

    public int volume() { 
        return side * side * side; 
    }
}

public class ISPIntact {
    public static void main(String[] args) {
        Shape2D square = new Square(6);
        Shape2D rectangle = new Rectangle(3, 6);
        Shape3D cube = new Cube(6);

        System.out.println("Square Area: " + square.area());
        System.out.println("Rectangle Area: " + rectangle.area());
        System.out.println("Cube Area: " + cube.area());
        System.out.println("Cube Volume: " + cube.volume());
    }
}
