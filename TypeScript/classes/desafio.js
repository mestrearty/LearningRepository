"use strict";
// Exercício 1 - Classe
class Moto {
    nome;
    velocidade = 0;
    constructor(nome) {
        this.nome = nome;
    }
    buzinar() {
        console.log('Toooooooooot!');
    }
    acelerar(delta) {
        this.velocidade = this.velocidade + delta;
    }
}
let motoca = new Moto('Vrum');
motoca.buzinar();
motoca.acelerar(10);
console.log(motoca.velocidade);
// Exercício 2 - Herança
class Objeto2D {
    base = 0;
    altura = 0;
}
class Retangulo extends Objeto2D {
    base = 5;
    altura = 7;
    area() {
        return this.base * this.altura;
    }
}
let ret = new Retangulo();
console.log(ret.area());
// Exercício 3 - Getters & Setters
class Estagiario {
    _primeiroNome = 'Zé';
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        }
        else {
            this._primeiroNome = '';
        }
    }
}
let estagiario = new Estagiario;
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Le';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Leonardo';
console.log(estagiario.primeiroNome);
//# sourceMappingURL=desafio.js.map