"use strict";
// Rest e Spread
const numbers = [1, 2, 10, 99, -5, 200];
console.log(Math.max(numbers[0], numbers[1], numbers[2], numbers[3]));
//Usando Rest - Spread
console.log(Math.max(...numbers));
const turmaA = ['João', 'Maria', 'Fernanda'];
const turmaB = ['Miguel', ...turmaA, 'Lorena'];
console.log(turmaB);
function retornarArray(a, ...args) {
    console.log(a);
    return args;
}
console.log(retornarArray(1, 2, 3, 4, 5, 6, 7));
console.log(retornarArray(50, ...numbers));
//Rest e Spread (tupla)
const tupla = [1, "Patinho foi passear", false];
function tuplaParam1(a, b, c) {
    console.log('1)', a, b, c);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    console.log(Array.isArray(params));
    console.log('2)', params[0], params[1], params[2]);
}
tuplaParam2(...tupla);
//# sourceMappingURL=spread.js.map