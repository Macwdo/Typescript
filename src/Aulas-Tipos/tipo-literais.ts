let x = 10; // eslint-disable-line
x = 0b1010;

const y = 10;

let a: 100 = 100 as const; // eslint-disable-line

const pessoa = {
    nome: "danilo" as const,
    sobrenome: "macedo",
};

function escolhaCor(cor: "Vermelho" | "Azul") {
    return cor;
}

console.log(escolhaCor("Vermelho"));

// Module mode
export default 1;
