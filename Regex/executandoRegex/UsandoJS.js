const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,i';
const busca = '9';

console.log(`Métodos da RegExpress. O que estamos buscando: "${busca}"`);
const regexTexto = RegExp(busca);//cria a regex
console.log("Existe no texto?",regexTexto.test(texto));//baseado no regex criado, verifica se há a estrutura na string
console.log("Resultado da busca:",regexTexto.exec(texto));//baseado no regex criado, verifica onde se encontra

console.log("Buscando letras entre a-f");
const regexLetras = /[a-f]/g;//outra forma de criar a regex
console.log('Métodos da string:',texto.match(regexLetras));//verifica se encontra a estrutura regex na string
console.log('Índice:', texto.search(regexLetras))//Mostra o índice de onde achou a primeira string/char definida na regex
console.log('Trocando o resultado encontrado por uma string',texto.replace(regexLetras,'Achei')); //Retorna uma nova string, não altera a atual
console.log('Quebra de texto para cada encontro: ', texto.split(/,/));//Corta o texto em cada regex encontrado, e devolve um array