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

    protected showProtected(): void {
        console.log("Hi Protected");
    }

    private showPrivate(): void {
        console.log("Hi Private");
    }
}

export class Cliente extends Pessoa {
    constructor(nome: string, sobrenome: string, idade: number, cpf: string, public registro: string) {
        super(nome, sobrenome, idade, cpf);
    }

    getNomeCompleto(): string {
        this.showProtected();
        return "Nome: " + this.nome + " " + this.sobrenome;
    }
}

const pessoa = new Pessoa("Danilo", "macedo", 30, "03200213021");
const cliente = new Cliente("Danilo", "macedo", 30, "03200213021", "asddsa");

console.log(cliente);
