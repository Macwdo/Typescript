type Veiculo = {
    marca: string;
    ano: string;
};

type Car = {
    brand: Veiculo["marca"];
    year: Veiculo["ano"];
    name: string;
};

const car: Car = {
    brand: "Ford",
    name: "Ca",
    year: "2020",
};
