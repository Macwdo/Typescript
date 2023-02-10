export class Pessoa {
    constructor(public nome: string, public sobrenome: string, private idade: number, protected cpf: string) {}

    getIdade(): number {
        return this.idade;
    }

    getCpf(): string {
        return this.cpf;
    }

    getNomeCompleto(): string {
        return this.nome + " " + this.sobrenome;
    }
}

export class Cliente extends Pessoa {
    getNomeCompleto(): string {
        return "Cliente ->" + super.getNomeCompleto();
    }
}

const pessoa = new Pessoa("Danilo", "macedo", 30, "03200213021");
const cliente = new Cliente("Danilo", "macedo", 30, "03200213021");

console.log(cliente.getNomeCompleto());
