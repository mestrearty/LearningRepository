const texto = '.$%+*?-'

console.log(texto.match(/[.$%+*?-]/g));
console.log(texto.match(/[.$%+*?-]./g));//não precisam de escape dentro do conjunto
console.log(texto.match(/[.$-?]/g));// o menos vira um metacaractere (intervalo, range)

console.log(texto.match(/[$\-?]/g));//não é um intervalo
console.log(texto.match(/[-?]/g));//não é um intervalo

//pode precisar de scape dentro do conjunto: - [] ^