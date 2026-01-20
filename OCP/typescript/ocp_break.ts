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

class ShoppingCartStorage {
    private cart: ShoppingCart;

    constructor(cart: ShoppingCart) {
        this.cart = cart;
    }

    saveToSqlDb(): void {
        console.log("Saving shopping cart to SQL DB");
    }

    saveToMongoDb(): void {
        console.log("Saving shopping cart to Mongo DB");
    }

    saveToFile(): void {
        console.log("Saving shopping cart to file");
    }
}

const cart = new ShoppingCart();

cart.addProduct(new Product("Chips", 10));
cart.addProduct(new Product("Milk", 30));

const storage = new ShoppingCartStorage(cart);

storage.saveToSqlDb();
storage.saveToMongoDb();
