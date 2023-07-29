"use strict";
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
const aniversario = new Data(3, 11, 1991);
aniversario.dia = 5;
console.log(aniversario);
const casamento = new Data();
console.log(casamento);
//outro meio
class DataEsperta {
    dia;
    mes;
    ano;
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
    nome;
    preco;
    desconto;
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
class Carro {
    marca;
    modelo;
    velocidadeMaxima;
    velocidadeAtual = 0;
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(8);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro = new Carro('Ford', 'K', 185);
for (let i = 0; i < 50; i++) {
    console.log(carro.acelerar());
}
for (let i = 0; i < 50; i++) {
    console.log(carro.frear());
}
//Herança
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari('F40', 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());
//Getters & Setters
class Pessoa {
    _idade = 0;
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1.idade);
pessoa1.idade = -10;
console.log(pessoa1.idade);
//Static
class Matematica {
    static PI = 3.1416;
    static areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
/*
const m1 = new Matematica();
m1.PI = 4.2
console.log(m1.areaCirc(4))

const m2 = new Matematica();
console.log(m2.areaCirc(4))
*/
console.log(Matematica.areaCirc(4));
//Abstract
class Calculo {
    resultado = 0;
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}
let c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
c1 = new Multiplicacao();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
//Singleton
class Unico {
    static instance = new Unico;
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date;
    }
}
//const errado =new Unico()
console.log(Unico.getInstance().agora());
//Ready Only
class Aviao {
    prefixo;
    modelo;
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao('Tu-114', 'PT-ABC');
// turboHelice.modelo = 'DC-8'
// turboHelice.prefixo = 'PT-DEF'
console.log(turboHelice);
//# sourceMappingURL=classes.js.map