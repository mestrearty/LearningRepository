"use strict";
function saudarComOla(pessoa) {
    console.log(`ola ${pessoa.nome}`);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome) {
        console.log('Fala ' + this.nome + " " + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
pessoa.saudar('Maria');
//saudarComOla({ nome: "lucas", idade: 29, altura: 1.75 })
// Usando Classes
class Cliente {
    nome = '';
    ultimaCompra = new Date;
    saudar(sobrenome) {
        console.log('olá, meu nome é ', this.nome + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, exp) {
    return Array(exp).fill(base).reduce((t, a) => t * a);
};
console.log(potencia(3, 3));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class abstractRealABC {
    a() { }
    b() { }
    c() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
x.log();
//# sourceMappingURL=interfaces.js.map