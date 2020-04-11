const texto = "1,2,3,4,5,6,7,8,9, a.b c!d?e as";

//facilitando minha vida...
const print = (texto) => console.log(texto);

//exibindo buscas com regex
print(texto.split(/,/));//retornando uma array dividada pela regex
print(texto.match(/,/));//exibindo a primeira string/char encontrada com a regex
print(texto.match(/,/g));//exibindo todas
print(texto.match(/A/));
print(texto.match(/A/i));//ignorando case
print(texto.match(/A/gi));//todas e ignorando case
print(texto.match(/2/g));
print(texto.match(/c!d/));
print(texto.match(/c!d?e/));//reparem que aqui ele da uma "bugada com o '?'"
print(texto.match(/c!d\?e/));//caracteres "especiais" no coração do regex, precisa de uma '\' antes para ele entender que é um caracter comum, e não especial

