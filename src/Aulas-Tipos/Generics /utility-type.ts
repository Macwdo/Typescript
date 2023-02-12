// Record
const object1: Record<string, string | number> = {
    nome: "Danilo",
    sobrenome: "Danilo",
    idade: 18,
};

console.log(object1);
// Required
type PessoaProtocol = {
    nome?: string;
    sobrenome?: string;
    idade?: number;
};

type PessoaRequired = Required<PessoaProtocol>;

const object2: PessoaProtocol = {
    nome: "Danilo",
    sobrenome: "Danilo",
    idade: 18,
};

const object3: PessoaRequired = {
    nome: "Danilo",
    sobrenome: "Danilo",
    idade: 18,
};
// Partial
type PessoaPartial = Partial<PessoaRequired>;

// ReadOnly
type PessoaReadonly = Readonly<PessoaRequired>;

// Pick

type PessoaPick = Pick<PessoaRequired, "nome">;

// Extract e Exclude

type ABC = "A" | "B" | "C";
type CDE = "C" | "D" | "E";

type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

type AccountMongo = {
    _id: string;
    nome: string;
    idade: number;
};

// type AccountApi = {
//     id: string;
//     nome: string;
//     idade: number;
// };

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, "_id">> & { id: string };

const acMng: AccountMongo = {
    _id: "asi1932108h",
    idade: 19,
    nome: "Danilo",
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
    const { _id, ...accountData } = accountMongo;
    return { ...accountData, id: _id };
}

console.log(mapAccount(acMng));

export default 1;
