//no início...
//Um byte (8 bits) - 256 chars
// Símbolos, Pontuação, A-Z, a-z,0-9 

//Dois bytes (16 bits) - 65500+ caracteres
//+Símbolos, +Pontuação, A-z, a-z, 0-9

//Unicode
//Quantidade de Bytes Variável - Expansível
//Suporta mais de 1 Milhão de caracteres
//Atualmente tem mais de 100.000 caracteres atribuidos
//Para acessar deve-se usar '\u'

//https://unicode-table.com/pt/

const texto = 'aʬc௵d'
console.log(texto.match(/\u02AC|\u0BF5/g))