function funcao(this: Date, nome: string): void {
    console.log(this);
    console.log(nome);
}

funcao.call(new Date(), "dnailo");
funcao.apply(new Date(), ["dnailo"]);
