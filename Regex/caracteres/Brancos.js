//Metacaracteres "Brancos", ou seja, de espaçamento 
//\s - espaço, \t - tab, \n - quebra de linha
const texto = `
ca	r
r	o s!
`;


console.log(texto.match(/ca/));
console.log(texto.match(/ca\t/));
console.log(texto.match(/ca\tr/));
console.log(texto.match(/ca\tr\nr/));
console.log(texto.match(/ca\tr\nr\to/));
console.log(texto.match(/ca\tr\nr\to\ss/));
console.log(texto.match(/ca\tr\nr\to\ss!/));


