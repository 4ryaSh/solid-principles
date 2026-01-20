interface Shape {
    int area();
    int volume();
}

class Square implements Shape {
    private int side;

    public Square(int side) { 
        this.side = side;
    }

    public int area() { 
        return side * side; 
    }

    public int volume() { 
        throw new UnsupportedOperationException("Square does not have a volume"); 
    }
}

class Rectangle implements Shape {
    private int length, breadth;

    public Rectangle(int length, int breadth) {
        this.length = length;
        this.breadth = breadth;
    }

    public int area() { 
        return length * breadth; 
    }

    public int volume() { 
        throw new UnsupportedOperationException("Rectangle does not have a volume"); 
    }
}

class Cube implements Shape {
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

public class ISPBreak {
    public static void main(String[] args) {
        Shape square = new Square(6);
        Shape rectangle = new Rectangle(3, 6);
        Shape cube = new Cube(6);

        System.out.println("Square Area: " + square.area());
        System.out.println("Rectangle Area: " + rectangle.area());
        System.out.println("Cube Area: " + cube.area());
        System.out.println("Cube Volume: " + cube.volume());

        try {
            System.out.println("Square Volume: " + square.volume());
        } catch (UnsupportedOperationException e) {
            System.out.println("Exception: " + e.getMessage());
        }
    }
}
