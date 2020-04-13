const texto =
  "Romário era um excelente jogador\n, mas hoje é um político questionador";

console.log(texto.match(/r/gi));
console.log(texto.match(/^r.*/gi)); //início da linha/string
console.log(texto.match(/^r/gi)); //início da linha/string
console.log(texto.match(/.*r$/gi)); //final da linha/string
console.log(texto.match(/r$/gi)); //final da linha/string

console.log(texto.match(/^r.*r$/gi)); //problema do dotall
console.log(texto.match(/^r[\s\S]*r$/gi)); //solução
