// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()

type Par<N, S> = { chave: N, valor: S }

class Mapa<N, S>{
    private map: Array<{ chave: N, valor: S }> = new Array<{ chave: N, valor: S }>()

    obter(chave: N) {
        const consulta = this.map.filter(i => i.chave === chave)
        return consulta ? consulta[0] : null
    }

    colocar(objeto: { chave: N, valor: S }) {
        const consulta = this.obter(objeto.chave)
        if (!consulta)
            this.map.push(objeto)
        else
            consulta.valor = objeto.valor
    }

    imprimir() {
        console.log(this.map)
    }

    limpar() {
        this.map = []
    }

}


const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })

console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()