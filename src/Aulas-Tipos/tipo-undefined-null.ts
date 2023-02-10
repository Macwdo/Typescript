let x;

if (typeof x === "undefined") x = 20;
console.log(x);

export function createPerson(
    firstName: string,
    lastName?: string,
): {
    firstName: string;
    lastName?: string;
} {
    return {
        firstName,
        lastName,
    };
}

export function squareOf(x: any) {
    if (typeof x === "number") return x * x;
    return null;
}

const squareof2 = squareOf(2);
const squareofstr = squareOf("a");

console.log(squareof2, squareofstr);

if (squareof2 === null) {
    console.log("Conta inválida");
} else {
    console.log(squareof2 * 100);
}
