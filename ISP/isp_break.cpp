#include <iostream>
using namespace std;

// Only one fat interface for all the shapes
class Shape {
public:
    virtual int area() = 0;
    // 2D shapes do not have volume
    virtual int volume() = 0;
};

// Square is a 2D shape but still it is forced to implement the volume method because of the fat interface
class Square : public Shape {
private:
    int side;

public:
    Square(int side) {
        this->side = side;
    }

    int area() override {
        return side * side;
    }

    int volume() override {
        throw logic_error("Square does not have a volume");
    }
};

// Rectangle is also forced to implement the volume method
class Rectangle : public Shape {
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

    int volume() override {
        throw logic_error("Rectangle does not have a volume");
    }
};

class Cube : public Shape {
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
    Shape* square = new Square(6);
    Shape* rectangle = new Rectangle(3, 6);
    Shape* cube = new Cube(6);

    cout << "Square Area: " << square->area() << endl;
    cout << "Rectangle Area: " << rectangle->area() << endl;
    cout << "Cube Area: " << cube->area() << endl;
    cout << "Cube Volume: " << cube->volume() << endl;

    try {
        // this throws an exception
        cout << "Square Volume: " << square->volume() << endl;
    } 
    catch (logic_error& e) {
        cout << "Exception: " << e.what() << endl;
    }    

    delete square;
    delete rectangle;
    delete cube;

    return 0;
}