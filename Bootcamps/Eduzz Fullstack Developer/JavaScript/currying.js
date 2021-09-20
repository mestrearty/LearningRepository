//Currying é o processo de transformar uma função que espera vários argumentos em uma função que espera um único argumento e retorna outra função curried. Por exemplo, uma função que recebe três argumentos, ao sofrer currying, resulta em uma função que recebe um argumento e retorna uma função que recebe um argumento, que por sua vez retorna uma função que recebe um argumento e retorna o resultado da função original.
function soma(a) {
  return function (b) {
    return a + b;
  };
}

const somaCurrying = soma(3);

console.log(somaCurrying(1))
console.log(somaCurrying(2))
console.log(somaCurrying(3))
