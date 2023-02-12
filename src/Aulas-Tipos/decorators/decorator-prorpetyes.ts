function decorador(classProtoType: any, nome: string): any {
    let valorPropriedade: any;
    console.log(classProtoType, nome);
    return {
        get: () => valorPropriedade,
        set: (valor: any) => {
            valorPropriedade = valor + "Mudado";
        },
    };
}

export class UmaPessoa {
    @decorador
    nome: string;
    @decorador
    sobrenome: string;
    idade: number;

    constructor(nome: string, sobrenome: string, idade: number) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    metodo(msg: string): string {
        return `${this.nome} ${this.sobrenome}: ${msg}`;
    }

    get nomeCompleto(): string {
        return this.nome + " " + this.sobrenome;
    }

    set nomeCompleto(valor: string) {
        const palavras = valor.split(/\s+/g);
        const primeiroNome = palavras.shift();
        if (!primeiroNome) return;
        this.nome = primeiroNome;
        this.sobrenome = palavras.join(" ");
    }
}

const myClass = new UmaPessoa("Danilo", "Macedo", 21);

console.log(myClass.metodo("Olá mundo"));
