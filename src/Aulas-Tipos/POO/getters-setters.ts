export class Pessoa {
    // eslint-disable-next-line prettier/prettier
    constructor(
        private nome: string,
        private sobrenome: string,
        private idade: number,
        private _cpf: string
    ) {
        this.cpf = _cpf;
    }

    set cpf(value: string) {
        console.log("SETTER");
        this._cpf = value;
    }

    get cpf(): string {
        console.log("GETTER");

        return this._cpf.replace(/\D/g, "");
    }
}

const p1 = new Pessoa("Danilo", "macedo", 18, "197-951-971-23");
p1.cpf = "123.213.321-23";
console.log(p1.cpf);
