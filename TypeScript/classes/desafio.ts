// Exercício 1 - Classe
class Moto {
    public velocidade: number = 0
    public constructor(public nome: string) {

    }

    public buzinar() {
        console.log('Toooooooooot!')
    }

    public acelerar(delta: number) {
        this.velocidade = this.velocidade + delta
    }
}

let motoca = new Moto('Vrum')
motoca.buzinar()
motoca.acelerar(10)
console.log(motoca.velocidade)


// Exercício 2 - Herança

abstract class Objeto2D {
    public base = 0
    public altura = 0
    abstract area(): number
}


class Retangulo extends Objeto2D {
    base = 5
    altura = 7
    public area() {
        return this.base * this.altura
    }
}

let ret = new Retangulo()
console.log(ret.area())


// Exercício 3 - Getters & Setters
class Estagiario {
    private _primeiroNome: string = 'Zé'

    get primeiroNome(): string {
        return this._primeiroNome
    }

    set primeiroNome(valor: string) {
        if (valor.length >= 3) {
            this._primeiroNome = valor
        } else {
            this._primeiroNome = ''
        }
    }
}
let estagiario = new Estagiario
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)

