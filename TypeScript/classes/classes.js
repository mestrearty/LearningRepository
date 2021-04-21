var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        if (dia === void 0) { dia = 1; }
        if (mes === void 0) { mes = 1; }
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return Data;
}());
var aniversario = new Data(3, 11, 1991);
aniversario.dia = 5;
console.log(aniversario);
var casamento = new Data();
console.log(casamento);
//outro meio
var DataEsperta = /** @class */ (function () {
    function DataEsperta(dia, mes, ano) {
        if (dia === void 0) { dia = 1; }
        if (mes === void 0) { mes = 1; }
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return DataEsperta;
}());
var aniversarioEsperto = new DataEsperta(3, 11, 1991);
aniversario.dia = 5;
console.log(aniversario);
var casamentoEsperto = new DataEsperta();
console.log(casamento);
//métodos
var Produto = /** @class */ (function () {
    function Produto(nome, preco, desconto) {
        if (desconto === void 0) { desconto = 0; }
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
        this.preco = preco - desconto;
    }
    Produto.prototype.resumo = function () {
        return this.nome + " R$" + this.preco;
    };
    Produto.prototype.valorInegral = function () {
        return this.preco + this.desconto;
    };
    return Produto;
}());
var papel = new Produto("Papel", 8, 1);
console.log(papel.resumo());
var toalha = new Produto("Toalha", 5);
console.log(toalha.resumo());
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, velocidadeMaxima) {
        if (velocidadeMaxima === void 0) { velocidadeMaxima = 200; }
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    Carro.prototype.alterarVelocidade = function (delta) {
        var novaVelocidade = this.velocidadeAtual + delta;
        var velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    };
    Carro.prototype.acelerar = function () {
        return this.alterarVelocidade(8);
    };
    Carro.prototype.frear = function () {
        return this.alterarVelocidade(-5);
    };
    return Carro;
}());
var carro = new Carro('Ford', 'K', 185);
for (var i = 0; i < 50; i++) {
    console.log(carro.acelerar());
}
for (var i = 0; i < 50; i++) {
    console.log(carro.frear());
}
var Ferrari = /** @class */ (function (_super) {
    __extends(Ferrari, _super);
    function Ferrari() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Ferrari;
}(Carro));
var f40 = new Ferrari('Ferrari', 'F40', 324);
console.log(f40.marca + " " + f40.modelo);
console.log(f40.acelerar);
console.log(f40.frear());
