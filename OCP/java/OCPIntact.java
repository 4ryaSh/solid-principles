import java.util.ArrayList;

// Product class
class Product {
    String name;
    int price;

    public Product(String name, int price) {
        this.name = name;
        this.price = price;
    }
}

// ShoppingCart handles products and total price
class ShoppingCart {
    private ArrayList<Product> products = new ArrayList<>();

    public void addProduct(Product product) {
        products.add(product);
    }

    public ArrayList<Product> getProducts() {
        return products;
    }

    public int calculateTotalPrice() {
        int total = 0;
        for (Product product : products) {
            total += product.price;
        }
        return total;
    }
}

// Printer class
class ShoppingCartPrinter {
    private ShoppingCart cart;

    public ShoppingCartPrinter(ShoppingCart cart) {
        this.cart = cart;
    }

    public void printInvoice() {
        System.out.println("\nInvoice:");
        for (Product product : cart.getProducts()) {
            System.out.println("Product Name: " + product.name);
            System.out.println("Product Price: " + product.price);
        }
        System.out.println("Total Price: " + cart.calculateTotalPrice());
    }
}

// Abstract storage class (OCP Intact)
abstract class Storage {
    public abstract void save(ShoppingCart cart);
}

class SQLStorage extends Storage {
    public void save(ShoppingCart cart) {
        System.out.println("\nSaving shopping cart to SQL DB");
    }
}

class MongoStorage extends Storage {
    public void save(ShoppingCart cart) {
        System.out.println("\nSaving shopping cart to MongoDB");
    }
}

class FileStorage extends Storage {
    public void save(ShoppingCart cart) {
        System.out.println("\nSaving shopping cart to file");
    }
}

// Main
public class OCPIntact {
    public static void main(String[] args) {
        ShoppingCart cart = new ShoppingCart();

        Product product1 = new Product("Chips", 10);
        Product product2 = new Product("Milk", 30);

        cart.addProduct(product1);
        cart.addProduct(product2);

        ShoppingCartPrinter printer = new ShoppingCartPrinter(cart);
        printer.printInvoice();

        Storage sqlStorage = new SQLStorage();
        Storage mongoStorage = new MongoStorage();
        Storage fileStorage = new FileStorage();

        sqlStorage.save(cart);
        mongoStorage.save(cart);
        fileStorage.save(cart);
    }
}
