"use strict";
//let && const
let seraQuePode = '?'; //Variável alteravel
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = 'Colocar o casaco!';
    console.log(acao);
}
const cpf = '123.456.123-00'; //Constante, não altera
console.log(cpf);
var segredo = 'externo';
function revelar() {
    const segredo = 'interno';
    console.log(segredo);
}
revelar();
console.log(segredo);
/*
{
  const def = 'def';
}

console.log(def); //Inacessível
*/
for (let i = 0; i < 10; i++) {
    console.log(i);
}
//console.log(i)//not reacheble with let, but in es5 with var, is
//Arrow Function
function somar(n1, n2) {
    return n1 + n2;
}
console.log("Soma:", somar(2, 2));
const subtrair = (n1, n2) => {
    return n1 - n2;
};
console.log("Subtração:", subtrair(2, 1));
const dividir = (n1, n2) => n1 / n2;
console.log("Divisão:", dividir(4, 2));
const saudacao = () => console.log("Olá");
saudacao();
const falarCom = (nome) => console.log("Olá", nome);
falarCom("Luana");
// this
/*
function normalComThis() {
  console.log(this);
}

const normalComThisEspecial = normalComThis.bind('Abc');
normalComThisEspecial();

// Quem é o this antes de onde ele foi definido
const arrowComThis = () => console.log(this);
arrowComThis();

const arrowComThisEspecial = arrowComThis.bind("Ana");
arrowComThisEspecial();//no arrow o this nunca muda.
*/
//Parâmetros Padrão
function contagemRegressiva(inicio = 3, fim = 0) {
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("fim!");
}
contagemRegressiva();
contagemRegressiva(2);
contagemRegressiva(2, -1);
//# sourceMappingURL=ecmascript.js.map