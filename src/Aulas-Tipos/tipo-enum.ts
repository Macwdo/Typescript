enum Cores {
    vermelho = 10,
    azul = 20,
    amarelo = 30,
}

enum Cores {
    Roxo = 10,
    Verde = 20,
    Rosa = 30,
}

console.log(Cores);

const selectColor = (cor: Cores): void => {
    console.log(Cores[cor]);
};

selectColor(Cores.Rosa);
