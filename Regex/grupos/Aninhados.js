//grupo dentro de grupo
const texto = "supermercado hipermercado minimercado mercado";

console.log(texto.match(/(super|hiper|mini)?mercado/gi));
console.log(texto.match(/((su|hi)per|mini)?mercado/gi));
