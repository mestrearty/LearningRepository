"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Livro {
    nome;
    preco;
    desconto;
    constructor(nome, preco, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
}
exports.default = Livro;
//# sourceMappingURL=livro.js.map