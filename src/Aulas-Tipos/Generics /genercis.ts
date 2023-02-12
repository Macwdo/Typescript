type FilterCallBack<U> = (value: U, index?: number, array?: U[]) => boolean;

export function meuFilter<T>(array: T[], callbackfn: FilterCallBack<T>): T[] {
    const novoArr = [];
    for (let i = 0; i < array.length; i++) {
        if (callbackfn(array[i])) {
            novoArr.push(array[i]);
        }
    }
    return novoArr;
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayFilt = meuFilter(myArray, (value) => value < 5);
console.log(arrayFilt);
