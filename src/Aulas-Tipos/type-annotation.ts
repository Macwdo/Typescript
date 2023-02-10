/* eslint-disable */

let nome: string = 'Danilo';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
// let big: bigint = 10n;

//Arrays
let arrayDeNumeros1: Array<number> = [1, 2, 3]
let arrayDeNumeros2: number[] = [1, 2, 3]

let arrayDeString1: Array<string> = ["a adssa", "sjdas"]
let arrayDeString2: string[] = ["a adssa", "sjdas"]

let pessoa: {nome: string, idade: number, adulto?: boolean} = {
    nome: "Danilo",
    idade: 18,
};


function soma(x: number, y: number) {
    return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;


