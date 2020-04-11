/*
Metacaracteres: . ? * + - ^ $ | [ ] { } ( ) \ :
Metacaracteres são caracteres especiais que nos permite colocar um pouco de "lógica" na busca do regex
para que possamos utilizar deles como um caracter comum, é preciso por '\' antes.

Representantes:
Representa um caracter ou conjunto de caracteres
. - Um caracter qualquer
[] - um conjunto de caracteres permitido definidos dentro da []
[^] - similar a '[]', mas só que negados (não permitidos)

Quantificadores:
Representam em "quantidade" do que você quer, por exemplo "ter ou não algum caracter antes"
? - Ter zero ou um caracter
* - Ter qualquer quantidade (inclusive nenhum)
+ - Ter qualquer quantidade, com no mínimo um
{n,m} - Ter entre n até m

//Âncoras
São delimitadores de frase
^ - Marca o início de uma linha
$ - Fim de uma linha
\b - Início ou fim de uma palavra

//Outros
\ - Permite o uso de um metacaracter como caracter
| - Teste lógio 'OU'
() - Define um grupo
\1, ..., \9 - 'Retrovisor', Resgata grupos já definidos
*/

//Código carai
const texto = "1,2,3,4,5,6,7,8,9, a.b c!d?e as";

//facilitando minha vida...
const print = (texto) => console.log(texto);

print(texto.match(/c!d\?e/));//caracteres "especiais" no coração do regex, precisa de uma '\' antes para ele entender que é um caracter comum, e não especial
print(texto.match(/\./));

print(texto.split(/\.|,|\?|!| /g));//Particionando por '.' ou ','