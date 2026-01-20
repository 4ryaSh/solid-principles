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

    printInvoice(): void {
        console.log("\nInvoice:");

        for (const product of this.products) {
            console.log("Product Name:", product.name);
            console.log("Product Price:", product.price);
        }

        console.log("Total Price:", this.calculateTotalPrice());
    }

    saveToDb(): void {
        console.log("\nSaving shopping cart to db");
    }
}

const cart = new ShoppingCart();

const p1 = new Product("Chips", 10);
const p2 = new Product("Milk", 30);

cart.addProduct(p1);
cart.addProduct(p2);

cart.printInvoice();
cart.saveToDb();
