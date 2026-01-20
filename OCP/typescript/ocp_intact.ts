class Product {
    public name: string;
    public price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    private products: Product[];

    constructor() {
        this.products = [];
    }

    addProduct(product: Product): void {
        this.products.push(product);
    }

    getProducts(): Product[] {
        return this.products;
    }

    calculateTotalPrice(): number {
        let totalPrice = 0;

        for (const product of this.products) {
            totalPrice = totalPrice + product.price;
        }

        return totalPrice;
    }
}

interface CartStorage {
    save(cart: ShoppingCart): void;
}

class SQLStorage implements CartStorage {
    save(cart: ShoppingCart): void {
        console.log("Saving shopping cart to SQL DB");
    }
}

class MongoStorage implements CartStorage {
    save(cart: ShoppingCart): void {
        console.log("Saving shopping cart to Mongo DB");
    }
}

class FileStorage implements CartStorage {
    save(cart: ShoppingCart): void {
        console.log("Saving shopping cart to file");
    }
}


const cart = new ShoppingCart();

cart.addProduct(new Product("Chips", 10));
cart.addProduct(new Product("Milk", 30));

const sqlStorage = new SQLStorage();
const mongoStorage = new MongoStorage();
const fileStorage = new FileStorage();

sqlStorage.save(cart);
mongoStorage.save(cart);
fileStorage.save(cart);
