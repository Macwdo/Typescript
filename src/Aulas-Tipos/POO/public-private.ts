export class Empresa {
    public readonly nome: string; // Public não necessário
    private readonly colaboradores: Colaborador[] = []; // Não é possivel a troca de Array Para string
    private readonly funcionarios: readonly Colaborador[] = []; // Não é possivel a troca dos valores
    protected readonly cnpj: string;

    constructor(nome: string, cnpj: string) {
        this.nome = nome;
        this.cnpj = cnpj;
    }

    public addColaboradores(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador);
    }

    public getColaboradores(): void {
        for (const colaborador of this.colaboradores) console.log(colaborador);
    }
}

export class Colaborador {
    constructor(public readonly nome: string, public readonly sobrenome: string) {}
}

const empresa1 = new Empresa("MacedoA", "11.111.111/0001-11");
const colaborador1 = new Colaborador("Danilo", "macedo");
const colaborador2 = new Colaborador("Joao", "macedo");

console.log(empresa1);
empresa1.addColaboradores(colaborador1);
console.log(empresa1);
empresa1.addColaboradores(colaborador2);
console.log(empresa1);
empresa1.addColaboradores({
    nome: "Pedro",
    sobrenome: "henrique",
});
console.log(empresa1);

empresa1.getColaboradores();
