export abstract class Personagem {
    protected abstract emoji: string;

    protected nome: string;
    protected vida: number;
    protected ataque: number;
    constructor(nome: string, vida: number, ataque: number) {
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
    }

    perderVida(ataque: number, personagem: Personagem): void {
        console.log(`${this.nome} está sendo atacado por ${personagem.nome} e perdeu -${this.ataque} de vida`);
        this.vida -= ataque;
    }

    atacar(personagem: Personagem): void {
        this.grito();
        console.log(`${this.nome} está atacando ${personagem.nome}`);
        personagem.perderVida(this.ataque, personagem);
    }

    abstract grito(): void;
}

export class Guerreiro extends Personagem {
    protected emoji = "GEIRO";
    grito(): void {
        console.log("Guerreiro Atacando");
    }
}
export class Monstro extends Personagem {
    protected emoji = "MNTRO";

    grito(): void {
        console.log("Monstro Atacando");
    }
}

const g1 = new Guerreiro("GDanilo", 10, 1);
const m1 = new Monstro("MDanilo", 10, 1);

g1.atacar(m1);
m1.atacar(g1);
