const texto = 'a   b';

console.log('1',texto.match(/a   b/));
console.log('2',texto.match(/a...b/));
console.log('3',texto.match(/a\s\s\sb/));

console.log('4',texto.match(/a\s+b/));
console.log('5',texto.match(/a\s*b/));
console.log('6',texto.match(/a\s{3}b/));