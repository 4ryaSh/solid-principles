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

class ShoppingCartPrinter {
    private cart: ShoppingCart;

    constructor(cart: ShoppingCart) {
        this.cart = cart;
    }

    printInvoice(): void {
        console.log("\nInvoice:");

        const products = this.cart.getProducts();

        for (const product of products) {
            console.log("Product Name:", product.name);
            console.log("Product Price:", product.price);
        }

        console.log("Total Price:", this.cart.calculateTotalPrice());
    }
}

class ShoppingCartStorage {
    private cart: ShoppingCart;

    constructor(cart: ShoppingCart) {
        this.cart = cart;
    }

    saveToDb(): void {
        console.log("\nSaving shopping cart to db");
    }
}
