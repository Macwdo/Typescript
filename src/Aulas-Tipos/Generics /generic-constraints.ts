type GetKeyFn = <O, K extends keyof O>(obj: O, key: K) => O[K];

const getk: GetKeyFn = (obj, key) => obj[key];

console.log(getk({ nome: "Danilo", sobrenome: "macedo" }, "nome"));
