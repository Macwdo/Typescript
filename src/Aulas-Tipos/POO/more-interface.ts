interface Pessoa {
    nome: string;
}

interface Pessoa {
    sobrenome: string;
}

export const pessoa: Pessoa = {
    nome: "Danilo",
    sobrenome: "Macedo",
};

type Animal = {
    tipo: string;
    raca: string;
};

const criarAnimal = (animal: Animal): void => {
    console.log(animal.raca, animal.tipo);
};

console.log(typeof pessoa);
