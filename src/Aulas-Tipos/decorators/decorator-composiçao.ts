interface ConstructorDecorator {
    new (...args: any[]): any;
}

function inverteNome(param1: string) {
    return function (target: ConstructorDecorator) {
        return class extends target {
            cor: string;
            constructor(...args: any[]) {
                super(...args);
                this.cor = args[0].split("").reverse().join("") + param1;
            }
        };
    };
}
function outroDecorator(target: ConstructorDecorator): void {
    console.log("Outro decorator");
}

@outroDecorator
@inverteNome("Bola")
export class Animal {
    constructor(public cor: string) {}
}

const animal = new Animal("Roxo");
console.log(animal);
