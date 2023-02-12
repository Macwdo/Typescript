export class Pessoa<T, U> {
    constructor(public nome: T, public idade: U) {}
}

const pessoa1 = new Pessoa("Danilo", 24);

export class Pilha<T> {
    private contador = 0;
    private elementos: { [k: number]: T } = {};

    push(element: T): void {
        this.elementos[this.contador] = element;
        this.contador++;
    }

    isVoid(): boolean {
        return this.contador === 0;
    }

    pop(): T | void {
        if (this.isVoid()) return undefined;
        this.contador--;
        const elemento = this.elementos[this.contador];
        delete this.elementos[this.contador];
        return elemento;
    }
}

const pilha = new Pilha<number>();

pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);

const element1 = pilha.pop();
console.log(element1, pilha);
