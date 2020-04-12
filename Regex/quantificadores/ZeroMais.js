const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOOOOOOO!'
const texto2 = 'There is a big fog in NYC'

regext = (texto, regex)=> console.log(texto.match(regex));

//* zero ou mais (opcional). Aplica no caractere a esquerda de *
regext(texto1,/fogo*/gi);
regext(texto2,/fogo*/gi);//guloso (pega o máximo possível)
regext(texto1,/fogo*?/gi);