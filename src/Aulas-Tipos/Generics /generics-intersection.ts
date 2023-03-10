export function unirObj<O1, O2>(obj1: O1, obj2: O2): O1 & O2 {
    // return { ...obj1, ...obj2 };
    return Object.assign({}, obj1, obj2);
}
