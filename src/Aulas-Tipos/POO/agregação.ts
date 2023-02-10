// each class need other class to work correctly , but each one can exist solo

export class Cart {
    private readonly product: Product[] = [];

    insertProduct(...products: Product[]): void {
        for (const product of products) this.product.push(product);
    }

    quantity(): number {
        return this.product.length;
    }

    totalValue(): string {
        return "R$" + this.product.reduce((acumulator, sum) => acumulator + sum.value, 0);
    }
}

export class Product {
    constructor(public name: string, public value: number) {}
}

const cart = new Cart();

const ball = new Product("Ball", 30.9);
const botle = new Product("Botle", 80.9);

cart.insertProduct(ball);
console.log(cart.quantity());
console.log(cart.totalValue());
console.log(cart);

cart.insertProduct(botle);
console.log(cart.quantity());
console.log(cart.totalValue());
console.log(cart);
