const objetoA: {
    readonly chaveA: string;
    chaveB: string;
    chaveC?: string;
    [key: string]: unknown;
} = {
    chaveA: "Valor A",
    chaveB: "Valor B",
};

objetoA.chaveC = "Nova Chave";
objetoA.chaveD = "Nova Chaves";
objetoA.nov = "boba";
