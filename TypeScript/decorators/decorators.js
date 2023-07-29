"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logarClasse(construtor) {
    console.log(construtor);
}
function decoratorVazio(_) { }
function logarClasseSe(valor) {
    return valor ? logarClasse : decoratorVazio;
}
function logarObjeto(construtor) {
    console.log(`Carregado...`);
    return class extends construtor {
        constructor(...args) {
            console.log(`Antes...`);
            super(...args);
            console.log(`Depois...`);
        }
    };
}
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log(`novo...`);
    }
};
Eletrodomestico = __decorate([
    logarObjeto,
    imprimivel
], Eletrodomestico);
function imprimivel(construtor) {
    construtor.prototype.imprimir = function () {
        console.log(this);
    };
}
const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();
var DecoratorMetodo;
(function (DecoratorMetodo) {
    class ContaCorrente {
        saldo;
        constructor(saldo) {
            this.saldo = saldo;
        }
        sacar(valor) {
            if (valor <= this.saldo) {
                this.saldo -= valor;
                return true;
            }
            else {
            }
        }
        getSaldo() {
            return this.saldo;
        }
    }
    __decorate([
        congelar
    ], ContaCorrente.prototype, "sacar", null);
    __decorate([
        congelar
    ], ContaCorrente.prototype, "getSaldo", null);
    const cc = new ContaCorrente(12124);
    cc.sacar(5000);
    console.log(cc.getSaldo());
    /*
        cc.getSaldo = function () {
            return this[`saldo`] + 7000
        }
    
        console.log(cc.getSaldo())
    */
    //Object.freeze()
    function congelar(alvo, nomePropriedade, descritor) {
        console.log(alvo);
        console.log(nomePropriedade);
        console.log(descritor);
        descritor.writable = false;
    }
})(DecoratorMetodo || (DecoratorMetodo = {}));
var Testando;
(function (Testando) {
    let Teste = class Teste {
        valor;
        constructor() {
            this.valor = 10;
            console.log(`novo...` + this.valor);
        }
        falar() {
            console.log('oie');
        }
    };
    Teste = __decorate([
        exibir
    ], Teste);
    function exibir(...args) {
        console.log(args);
        console.log("vim aqui");
    }
    let t = new Teste();
    t.falar();
})(Testando || (Testando = {}));
var Aula1Decorator;
(function (Aula1Decorator) {
    let Eletrodomestico = class Eletrodomestico {
        constructor() {
            console.log('Novo... :D');
        }
        ola() {
            console.log(`oi de novo`);
        }
    };
    Eletrodomestico = __decorate([
        logarClasse
    ], Eletrodomestico);
    function logarClasse(construtor) {
        console.log(construtor);
        construtor.ola = () => { console.log(`oi zé`); };
    }
    new Eletrodomestico();
})(Aula1Decorator || (Aula1Decorator = {}));
//# sourceMappingURL=decorators.js.map