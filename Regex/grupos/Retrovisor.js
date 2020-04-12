//Retrovisor são "valores" armazenados das buscas dos grupos '()'. Você pode acessálos como arrays, passando a \numeração (começa do 1)

const texto1 = "<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>";

console.log(texto1.match(/<(\w+)>.*<\/\1>/g));

const texto2 = "Lentamente é mente muito lenta.";

console.log(texto2.match(/(lenta)(mente).*\2/gi));
console.log(texto2.match(/(lenta)(mente).*\2.*\1/gi));
console.log(texto2.match(/(?:lenta)(mente).*\1/gi)); //não armazena o grupo com :?

console.log(texto2.match(/(lenta)(mente)/gi));
console.log(texto2.match(/(lenta)(mente)?/gi));
console.log(texto2.replace(/(lenta)(mente)/gi, "$2")); //$numero é usado para referenciar também o retrovisor
console.log(texto2.replace(/(lenta)(mente)/gi, "->$2<-")); //$numero é usado para referenciar também o retrovisor
