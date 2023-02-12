function inverteNome(param1: string) {
    return function <T extends new (...args: any[]) => any>(target: T) {
        return class extends target {
            cor: string;
            constructor(...args: any[]) {
                super(...args);
                this.cor = args[0].split("").reverse().join("") + param1;
            }
        };
    };
}

@inverteNome("Bola")
export class Animal {
    constructor(public cor: string) {}
}

const animal = new Animal("Roxo");
console.log(animal);
