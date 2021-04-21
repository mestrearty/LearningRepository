interface Humano {
    nome: string
    idade?: number
    [prop: string]: any
    saudar(sobrenome: string): void
}


function saudarComOla(pessoa: Humano) {
    console.log(`ola ${pessoa.nome}`)
}


function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Joana'
}

const pessoa: Humano = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome: string) {
        console.log('Fala ' + this.nome + " " + sobrenome)
    }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
pessoa.saudar('Maria')
//saudarComOla({ nome: "lucas", idade: 29, altura: 1.75 })


// Usando Classes
class Cliente implements Humano {
    nome: string = ''
    ultimaCompra: Date = new Date
    saudar(sobrenome: string) {
        console.log('olá, meu nome é ', this.nome + sobrenome)
    }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Han'
saudarComOla(meuCliente)
meuCliente.saudar('Solo')
console.log(meuCliente.ultimaCompra)


// Interface FuncaoCalculo

interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function (base: number, exp: number): number {
    return Array(exp).fill(base).reduce((t, a) => t * a)
}

console.log(potencia(3, 3))

//Herança
interface A {
    a(): void
}

interface B {
    b(): void
}

interface ABC extends A, B {
    c(): void
}

class RealA implements A {
    a(): void { }
}

class RealAB implements A, B {
    a(): void { }
    b(): void { }
}

class RealABC implements ABC {
    a(): void { }
    b(): void { }
    c(): void { }
}

abstract class abstractRealABC implements ABC {
    a(): void { }
    b(): void { }
    c(): void { }
    abstract d(): void
}

//Interface para extender object

interface Object {
    log(): void
}

Object.prototype.log = function () {
    console.log(this.toString())
}


const x = 2
x.log()
