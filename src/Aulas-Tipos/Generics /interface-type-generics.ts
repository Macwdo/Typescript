interface PessoaProtocolo<T = string, U = number> {
    nome: T;
    sobrenome: T;
    idade: U;
}

const aluno1: PessoaProtocolo<string, number> = {
    nome: "Danilo",
    sobrenome: "Macedo",
    idade: 18,
};

const aluno2: PessoaProtocolo<number, number> = {
    nome: 123,
    sobrenome: 442,
    idade: 18,
};

const aluno3: PessoaProtocolo = {
    nome: "Danilo",
    sobrenome: "Macedo",
    idade: 18,
};

console.log(aluno1, aluno2, aluno3);
