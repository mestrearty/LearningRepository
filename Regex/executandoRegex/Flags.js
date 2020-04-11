// g - global
// i - ignore case

const text = "Eu to digitando alguma coisa só pra testar";
console.log(text.match(/E|al/));
console.log(text.match(/e|al/));
console.log("Ignorando maiuscula e minuscua",text.match(/e|al/i));
console.log("Procurando todas",text.match(/e|al/g));
console.log("Ignorando e Procurando todas",text.match(/e|al/gi));
