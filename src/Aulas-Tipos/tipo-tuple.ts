// Tuple

const dadosCliente1: readonly [number, string] = [1, "Danilo"];
const dadosCliente2: [number, string, string] = [1, "Danilo", "Macedo"];
const dadosCliente3: [number, string, string?] = [1, "Danilo"];
const dadosCliente4: [number, string, string, ...string[]] = [1, "Danilo", "Macedo", "Fodase"];

console.log(dadosCliente1, dadosCliente2, dadosCliente3, dadosCliente4);

// read only array

const array1: readonly string[] = ["Danilo", "Macedo"];
const array2: ReadonlyArray<string> = ["Danilo", "Macedo"];

console.log(array1);
console.log(array2);
