const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOOOOOOO!'
const texto2 = 'There is a big fog in NYC'

regext = (texto, regex)=> console.log(texto.match(regex));

//+ - uma ou mais (opcional). Aplica no caractere a esquerda de +
regext(texto1,/fogo+/gi);
regext(texto2,/fogo+/gi);

const texto3 = 'Os números: 01234567891232149 e 124745';

regext(texto3,/[0-9]/g);
regext(texto3,/[0-9]+/g);//Busca pegar o máximo de valores com relação (guloso)
regext(texto3,/[0-9]+?/g);//divide o achado em vetores

