const arrayNumeros: Array<number> = [1, 2, 3, 4, 5];

console.log(arrayNumeros);

const asyncFunc = async () => {
    return 1;
};

const asyncFunc1 = async (): Promise<number> => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(1);
        }, 1000);
    });
};

asyncFunc1().then((res) => console.log(res + 1));
