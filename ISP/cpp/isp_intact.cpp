#include <iostream>
using namespace std;

// Fat shape interface is now segragated into two different interfaces
class Shape2D {
public:
    virtual int area() = 0;    
};

class Shape3D : public Shape2D {
public:
    virtual int volume() = 0;
};

// Square is a 2D shape hence it only implements the area
class Square : public Shape2D {
private:
    int side;

public:
    Square(int side) {
        this->side = side;
    }

    int area() override {
        return side * side;
    }
};

// Rectangle now only implements area
class Rectangle : public Shape2D {
private:
    int length, breadth;

public:
    Rectangle(int length, int breadth) {
        this->length = length;
        this->breadth = breadth;
    }

    int area() override {
        return length * breadth;
    }
};

// Cube implements both, area and volume since it is a 3d shape
class Cube : public Shape3D {
private:
    int side;

public:
    Cube(int side) {
        this->side = side;
    }

    int area() override {
        return side * side * 6;
    };

    int volume() override {
        return side * side * side;
    }

};

int main() {
    Shape2D* square = new Square(6);
    Shape2D* rectangle = new Rectangle(3, 6);
    Shape3D* cube = new Cube(6);

    cout << "Square Area: " << square->area() << endl;
    cout << "Rectangle Area: " << rectangle->area() << endl;
    cout << "Cube Area: " << cube->area() << endl;
    cout << "Cube Volume: " << cube->volume() << endl;

    delete square;
    delete rectangle;
    delete cube;

    return 0;
}