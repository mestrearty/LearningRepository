//Pegando todas as vogais acentoadas e ç
const texto = 'áéíóú àèìòù âêîôû ç ãõ ü'

regexTest = (regex)=>console.log(texto.match(regex));

regexTest(/[À-ü]/g);