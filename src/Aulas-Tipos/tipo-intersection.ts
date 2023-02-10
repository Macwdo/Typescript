type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

type Pessoa = TemNome & TemSobrenome & TemIdade;

type AB = "A" | "B";
type AC = "A" | "C";

const pessoa: Pessoa = {
    idade: 10,
    nome: "Danilo",
    sobrenome: "Macedo",
};

export { pessoa };
