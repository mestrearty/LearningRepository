//Dentro de um conjunto o grupo morre
const texto = "Pedrinho (filho do Pedro Silva) é doutor do ABC!";

console.log(texto.match(/[(abc)]/gi));
console.log(texto.match(/([abc])/gi));
