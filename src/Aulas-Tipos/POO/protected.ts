export class Empresa {
    public readonly nome: string; // Public não necessário
    protected readonly colaboradores: Colaborador[] = []; // Não é possivel a troca de Array Para string
    private readonly funcionarios: readonly Colaborador[] = []; // Não é possivel a troca dos valores
    private readonly cnpj: string;

    constructor(nome: string, cnpj: string) {
        this.nome = nome;
        this.cnpj = cnpj;
    }

    public addColaboradores(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador);
    }
}

export class Colaborador {
    constructor(public readonly nome: string, public readonly sobrenome: string) {}
}
export class Ford extends Empresa {
    constructor() {
        super("Udemy", "1021012");
    }

    pop() {
        return this.colaboradores.pop();
    }
}

const empresa1 = new Empresa("MacedoA", "11.111.111/0001-11");
const col1 = new Colaborador("Danilo", "macedo");
const fordemp = new Ford();
fordemp.addColaboradores(col1);
console.log(fordemp.pop());
