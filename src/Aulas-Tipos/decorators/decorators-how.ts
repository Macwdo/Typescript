function inverteNome<T extends new (...args: any[]) => any>(target: T) {
    console.log("Chamando Decorator ", target);
    return class extends target {
        cor: string;
        constructor(...args: any[]) {
            super(...args);
            this.cor = args[0].split("").reverse().join("");
        }
    };
}

@inverteNome
export class Animal {
    constructor(public cor: string) {}
}

const animal = new Animal("Roxo");
console.log(animal);
