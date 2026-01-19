#include <iostream>
#include <vector>
#include <string>

using namespace std;

// This is a product that can be added to the cart
class Product {
public:
    string name;
    int price;

    Product(string name, int price) {
        this->name = name;
        this->price = price;
    }
};

// This class is only responsible for shopping cart related operations
class ShoppingCart {
private:
    vector<Product*> products;

public:
    void add_product(Product* product) {
        products.push_back(product);
    }

    const vector<Product*> get_products() {
        return products;
    }

    // This is related to the class
    int calculate_total_price() {
        int total_price = 0;
        for (Product* product: products) {
            total_price = total_price + product->price;
        }
        return total_price;
    }
};

// This class is only responsible for printing the invoice and invoice related operations
class ShoppingCartPrinter {
private:
    ShoppingCart* sc;

public:
    ShoppingCartPrinter(ShoppingCart* sc) {
        this->sc = sc;
    }

    void print_invoice() {
        cout << endl << "Invoice: " << endl;
        vector<Product*> products = sc->get_products();
        for (Product* product: products) {
            cout << "Product Name: " << product->name << endl;
            cout << "Product Price: " << product->price << endl; 
        }
        cout << "Total Price: " << sc->calculate_total_price() << endl;
    }
};

// This class is responsible to database related operations
class ShoppingCartStorage {
private:
    ShoppingCart* sc;

public:
    ShoppingCartStorage(ShoppingCart *sc) {
        this->sc = sc;
    }

    void save_to_db() {
        cout << endl << "Saving shopping cart to db" << endl;
    }
};


int main() {
    ShoppingCart* sc = new ShoppingCart();

    Product* product1 = new Product("Chips", 10);
    Product* product2 = new Product("Milk", 30);

    sc->add_product(product1);
    sc->add_product(product2);

    ShoppingCartPrinter *printer = new ShoppingCartPrinter(sc);
    printer->print_invoice();

    ShoppingCartStorage *db_operator = new ShoppingCartStorage(sc);
    db_operator->save_to_db();

    delete product1;
    delete product2;
    delete sc;
    delete printer;
    delete db_operator;

    return 0;
}