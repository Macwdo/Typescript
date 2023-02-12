@decorator
export class Animal {
    constructor(public cor: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T) {
    return class extends target {
        cor: string;
        constructor(...args: any[]) {
            super(...args);
            this.cor = "outra";
        }
    };
}

const animal = new Animal("Roxo");

console.log(animal);
