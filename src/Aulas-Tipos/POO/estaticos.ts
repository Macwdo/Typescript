export class Pessoa {
    static idadePadrao = 0;
    static cpfPadrao = "000.000.000-00";

    // eslint-disable-next-line prettier/prettier
    constructor(
        private nome: string,
        private sobrenome: string,
        private idade: number,
        private cpf: string
    ) {}

    getNome() {
        return this.nome;
    }

    static falaOi(): void {
        console.log("OI");
    }

    static criaPessoa(nome: string, sobrenome: string): Pessoa {
        return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
    }
}

const pessoa = new Pessoa("Danilo", "Macedo", 18, "197902023-92");

const pessoa1 = Pessoa.criaPessoa("Junior", "Augusto");

console.log(pessoa1.getNome());
