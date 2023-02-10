function voidFunc(...args: string[]): void {
    console.log(args.join(" "));
}

const pessoa = {
    nome: "danilo",
    sobrenome: "macedo",

    exibirNome(): void {
        console.log(this.nome + " " + this.sobrenome);
    },
};

pessoa.exibirNome();

voidFunc("danilo", "macedo");

export { pessoa };
