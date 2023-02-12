export class Calculadora {
    constructor(public numero: number) {}

    add(n: number): this {
        this.numero += n;
        return this;
    }

    sub(n: number): this {
        this.numero -= n;
        return this;
    }
    prod(n: number): this {
        this.numero *= n;
        return this;
    }
    div(n: number): this {
        this.numero /= n;
        return this;
    }
}

export class SubCalc extends Calculadora {
    pow(n: number): this {
        this.numero *= n;
        return this;
    }
}

const calculadora = new SubCalc(10);

console.log(
    calculadora
        .add(2)
        .div(2)
        .prod(10)
        .pow(1 / 3),
);

// Buil
