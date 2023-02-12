type Documento = {
    titulo: string;
    texto: string;
    data?: Date;
};

const documento: Documento = {
    titulo: "Titulo",
    texto: "texto",
    data: new Date(),
};

console.log(documento.data?.toDateString() ?? "Nao exist");

console.log(undefined ?? "IndefinidoU");
console.log(null ?? "IndefinidoN");
