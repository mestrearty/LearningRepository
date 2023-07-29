"use strict";
// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()
class Mapa {
    map = new Array();
    obter(chave) {
        const consulta = this.map.filter(i => i.chave === chave);
        return consulta ? consulta[0] : null;
    }
    colocar(objeto) {
        const consulta = this.obter(objeto.chave);
        if (!consulta)
            this.map.push(objeto);
        else
            consulta.valor = objeto.valor;
    }
    imprimir() {
        console.log(this.map);
    }
    limpar() {
        this.map = [];
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: 'Pedro' });
mapa.colocar({ chave: 2, valor: 'Rebeca' });
mapa.colocar({ chave: 3, valor: 'Maria' });
mapa.colocar({ chave: 1, valor: 'Gustavo' });
console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
//# sourceMappingURL=desafio.js.map