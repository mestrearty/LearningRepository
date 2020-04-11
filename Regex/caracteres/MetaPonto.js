// . é um coringa válido para uma posição

const texto = '1,2,3,4,5,6,7,8,9';

//facilitando minha vida...
const p = (texto) => console.log(texto);

p(texto.match(/1.2/g));
p(texto.match(/.,/g));
p(texto.match(/,./g));
p(texto.match(/../g));
p(texto.match(/.../g));
p(texto.match(/..../g));
p(texto.match(/....../g));
p(texto.match(/......../g));
p(texto.match(/................./g));

const notas = '9.3,8.3,8.8,10.0'
p(notas.match(/8../g));
p(notas.match(/.\../g));
