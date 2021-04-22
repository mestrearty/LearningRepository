//Usando Generics
function echoMelhorado<TipoGenerico>(objeto: TipoGenerico): TipoGenerico {
    return objeto
}

console.log(echoMelhorado('João').length)
console.log(echoMelhorado<number>(27).toString())
console.log(echoMelhorado({ nome: "joão", idade: 27 }).nome)

//Generics disponíveis na API
const avaliacoes: Array<number> = [19, 3, 2.3]
avaliacoes.push(8.4)
//avaliacoes.push("teste")
console.log(avaliacoes)
// O generics serve para que em algum momento seja definido o tipo de entrada ou retorno,
// de uma função/objeto que inicialmente não teve seu tipo definido, talvez por não saber qual seria o tipo

// Array

function imprimir<T>(args: T[]) {
    args.forEach(elemento => console.log(elemento))
}

imprimir([1, 2, 3])
imprimir<number>([1, 3, 4])
imprimir<string>(['ana', 'joana', 'luana'])
imprimir<{ nome: string, idade: number }>([
    { nome: "juca", idade: 23 },
    { nome: "juctea", idade: 25 },
])

type Aluno = { nome: string, idade: number }
imprimir<Aluno>([
    { nome: "juca", idade: 23 },
    { nome: "juctea", idade: 25 },
])

//Tipo Genérico
type Echo = <T>(data: T) => T
const chamarEcho: Echo = echoMelhorado
console.log(chamarEcho<string>('Alguma Coisa'))

//Class com Generics
abstract class OperacaoBinaria<T, R>{
    constructor(public operando1: T,
        public operando2: T) { }
    abstract executar(): R
}

class SomaBinaria extends OperacaoBinaria<number, number>{
    executar(): number {
        return this.operando1 + this.operando2
    }
}

console.log(new SomaBinaria(3, 4).executar())
namespace generics {
    class Data {
        //publico por padrão
        dia: number;
        mes: number;
        ano: number;
        constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
            this.dia = dia;
            this.mes = mes;
            this.ano = ano;
        }
    }

    class DiferencaEntreData extends OperacaoBinaria<Data, String>{
        getTime(data: Data): number {
            let { dia, mes, ano } = data
            return new Date(`${mes}/${dia}/${ano}`).getTime()
        }

        executar(): string {
            const t1 = this.getTime(this.operando1)
            const t2 = this.getTime(this.operando2)
            const diferenca = Math.abs(t1 - t2)
            const dia = 1000 * 60 * 60 * 24
            return `${Math.ceil(diferenca / dia)} dia(s)`
        }
    }

    const d1 = new Data(1, 2, 2020)
    const d2 = new Data(5, 2, 2020)

    console.log(new DiferencaEntreData(d1, d2).executar())
}
//splice
//Desafio de classe Fila com Restrição

class Fila<T extends Number | String>{

    private fila: Array<T>

    constructor(...args: T[]) {
        this.fila = args
    }

    public entrar(novoItem: T) {
        this.fila.push(novoItem)
    }

    public proximo(): T {
        const primeiro = this.fila[0]
        this.fila.splice(0, 1)
        return primeiro
    }

    public imprimir() {
        console.log(this.fila)
    }

    public imprimirProximo() {
        this.fila.splice(0, 1)
        console.log(this.fila)
    }
}

const filaIndiana = new Fila<number>(1, 2, 3, 4, 5)
filaIndiana.imprimir()
filaIndiana.entrar(7)
filaIndiana.proximo()
filaIndiana.imprimir()
filaIndiana.imprimirProximo()
filaIndiana.imprimirProximo()
filaIndiana.imprimirProximo()
filaIndiana.imprimirProximo()
filaIndiana.imprimirProximo()