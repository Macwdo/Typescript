// Array<T> - T[]

function multiplicaArgs(...args: Array<number>): number {
    return args.reduce((acumulador, valor) => acumulador * valor, 1);
}

function concatena(...args: string[]): string {
    return args.reduce((ac, valor) => ac + valor);
}

function toUpper(...args: string[]): string[] {
    return args.map((elem) => elem.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatena("bo", "lo", "ta");
const maiu = toUpper("bo", "lo", "ta");

console.log(result, concatenacao, maiu);
