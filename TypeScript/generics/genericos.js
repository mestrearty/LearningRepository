"use strict";
//Usando Generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('João').length);
console.log(echoMelhorado(27).toString());
console.log(echoMelhorado({ nome: "joão", idade: 27 }).nome);
//Generics disponíveis na API
const avaliacoes = [19, 3, 2.3];
avaliacoes.push(8.4);
//avaliacoes.push("teste")
console.log(avaliacoes);
// O generics serve para que em algum momento seja definido o tipo de entrada ou retorno,
// de uma função/objeto que inicialmente não teve seu tipo definido, talvez por não saber qual seria o tipo
// Array
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 3]);
imprimir([1, 3, 4]);
imprimir(['ana', 'joana', 'luana']);
imprimir([
    { nome: "juca", idade: 23 },
    { nome: "juctea", idade: 25 },
]);
imprimir([
    { nome: "juca", idade: 23 },
    { nome: "juctea", idade: 25 },
]);
const chamarEcho = echoMelhorado;
console.log(chamarEcho('Alguma Coisa'));
//Class com Generics
class OperacaoBinaria {
    operando1;
    operando2;
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(3, 4).executar());
var generics;
(function (generics) {
    class Data {
        //publico por padrão
        dia;
        mes;
        ano;
        constructor(dia = 1, mes = 1, ano = 1970) {
            this.dia = dia;
            this.mes = mes;
            this.ano = ano;
        }
    }
    class DiferencaEntreData extends OperacaoBinaria {
        getTime(data) {
            let { dia, mes, ano } = data;
            return new Date(`${mes}/${dia}/${ano}`).getTime();
        }
        executar() {
            const t1 = this.getTime(this.operando1);
            const t2 = this.getTime(this.operando2);
            const diferenca = Math.abs(t1 - t2);
            const dia = 1000 * 60 * 60 * 24;
            return `${Math.ceil(diferenca / dia)} dia(s)`;
        }
    }
    const d1 = new Data(1, 2, 2020);
    const d2 = new Data(5, 2, 2020);
    console.log(new DiferencaEntreData(d1, d2).executar());
})(generics || (generics = {}));
//splice
//Desafio de classe Fila com Restrição
class Fila {
    fila;
    constructor(...args) {
        this.fila = args;
    }
    entrar(novoItem) {
        this.fila.push(novoItem);
    }
    proximo() {
        const primeiro = this.fila[0];
        this.fila.splice(0, 1);
        return primeiro;
    }
    imprimir() {
        console.log(this.fila);
    }
    imprimirProximo() {
        this.fila.splice(0, 1);
        console.log(this.fila);
    }
}
const filaIndiana = new Fila(1, 2, 3, 4, 5);
filaIndiana.imprimir();
filaIndiana.entrar(7);
filaIndiana.proximo();
filaIndiana.imprimir();
filaIndiana.imprimirProximo();
filaIndiana.imprimirProximo();
filaIndiana.imprimirProximo();
filaIndiana.imprimirProximo();
filaIndiana.imprimirProximo();
//# sourceMappingURL=genericos.js.map