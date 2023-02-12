// type CoresObj = {
//     vermelho: string;
//     verde: string;
//     azul: string;
// };

// const coresObj: CoresObj = {
//     vermelho: "red",
//     verde: "green",
//     azul: "blue",
// };

type CoresObj = typeof coresObj;

type CoresChave = keyof CoresObj;

const coresObj = {
    vermelho: "red",
    verde: "green",
    azul: "blue",
};

function traduzirCor(cor: CoresChave, cores: typeof coresObj) {
    return cores[cor];
}
