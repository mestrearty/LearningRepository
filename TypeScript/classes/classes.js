"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11, 1991);
aniversario.dia = 5;
console.log(aniversario);
const casamento = new Data();
console.log(casamento);
//outro meio
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(3, 11, 1991);
aniversario.dia = 5;
console.log(aniversario);
const casamentoEsperto = new DataEsperta();
console.log(casamento);
//métodos
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
        this.preco = preco - desconto;
    }
    resumo() {
        return `${this.nome} R$${this.preco}`;
    }
    valorInegral() {
        return this.preco + this.desconto;
    }
}
const papel = new Produto("Papel", 8, 1);
console.log(papel.resumo());
const toalha = new Produto("Toalha", 5);
console.log(toalha.resumo());
//# sourceMappingURL=classes.js.map