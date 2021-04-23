
function logarClasse(construtor: Function) {
    console.log(construtor)
}

function decoratorVazio(_: Function) { }

function logarClasseSe(valor: boolean) {
    return valor ? logarClasse : decoratorVazio
}

///

//@logarClasse
//@logarClasseSe(true)
/*
@logarObjeto
class Eletrodomestico {
    constructor() {
        console.log(`novo...`)
    }
}
*/
type Construtor = { new(...args: any[]): {} }

function logarObjeto(construtor: Construtor) {
    console.log(`Carregado...`)
    return class extends construtor {
        constructor(...args: any[]) {
            console.log(`Antes...`)
            super(...args)
            console.log(`Depois...`)
        }
    }
}

interface Eletrodomestico {
    imprimir?(): void
}

@logarObjeto
@imprimivel
class Eletrodomestico {
    constructor() {
        console.log(`novo...`)
    }
}

function imprimivel(construtor: Function) {
    construtor.prototype.imprimir = function () {
        console.log(this)
    }
}

const eletro = new Eletrodomestico()
eletro.imprimir && eletro.imprimir()

namespace DecoratorMetodo {
    class ContaCorrente {

        private saldo: number

        constructor(saldo: number) {
            this.saldo = saldo
        }

        @congelar
        sacar(valor: number) {
            if (valor <= this.saldo) {
                this.saldo -= valor
                return true
            } else {

            }
        }

        @congelar
        getSaldo() {
            return this.saldo
        }
    }


    const cc = new ContaCorrente(12124)
    cc.sacar(5000)
    console.log(cc.getSaldo())

    /*
        cc.getSaldo = function () {
            return this[`saldo`] + 7000
        }
    
        console.log(cc.getSaldo())
    */
    //Object.freeze()

    function congelar(alvo: any, nomePropriedade: string, descritor: PropertyDescriptor) {
        console.log(alvo)
        console.log(nomePropriedade)
        console.log(descritor)
        descritor.writable = false
    }

}


namespace Testando {

    @exibir
    class Teste {
        public valor: any
        constructor() {
            this.valor = 10
            console.log(`novo...` + this.valor)
        }

        falar() {
            console.log('oie')
        }
    }

    function exibir(...args: any[]) {
        console.log(args)
        console.log("vim aqui")

    }

    let t = new Teste()

    t.falar()
}


namespace Aula1Decorator {
    @logarClasse
    class Eletrodomestico {
        constructor() {
            console.log('Novo... :D')
        }
        ola(){
            console.log( `oi de novo`)
        }
    }

    function logarClasse <T extends Eletrodomestico> (construtor: T) {
        console.log(construtor)
        construtor.ola = ()=>{ console.log(`oi zé`)}
    }

    new Eletrodomestico()
}