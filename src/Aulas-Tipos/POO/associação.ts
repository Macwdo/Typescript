export class Escritor {
    private _ferramenta: Ferramenta | null = null;
    constructor(private _nome: string) {}

    get nome(): string {
        return this._nome;
    }

    set ferramenta(ferramenta: Ferramenta) {
        this._ferramenta = ferramenta;
    }

    escrever(mensagem: string): void {
        if (this._ferramenta === null) {
            console.log("Voce n tem ferramenta");
            return;
        }
        this._ferramenta.escrever(mensagem);
    }
}

export abstract class Ferramenta {
    constructor(private _nome: string) {}

    abstract escrever(mensagem: string): void;

    get getNome(): string {
        return this._nome;
    }
}

export class Caneta extends Ferramenta {
    escrever(mensagem: string): void {
        console.log("Caneta escrevendo ", mensagem);
    }
}

const e1 = new Escritor("Ferramenta");
console.log(e1);
const c1 = new Caneta("Caneta");
e1.ferramenta = c1;

e1.escrever("Bolota");
