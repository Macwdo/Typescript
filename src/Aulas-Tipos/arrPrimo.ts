const n = 20;

const range = (n: number): number[] => Array.from(Array(n).keys());

const primeArr = range(n).map((v, i, a) => {
    let cont = 0;
    for (const val in a) {
        if (v % Number(val) === 0 && v !== 0) {
            cont++;
            if (Number(val) === v && cont < 3) return val;
        }
    }
});
