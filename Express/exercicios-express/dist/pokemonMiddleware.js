"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonMiddleware = void 0;
class PokemonMiddleware {
    get(req, res) {
        const id = req.params.id;
        let pokemon = "Não encontrado";
        if (id == "25") {
            pokemon = {
                id: 25,
                name: "Pikachu",
                type: "Eletric",
                weakness: "Ground",
            };
        }
        res.send(pokemon);
    }
    post(req, res) {
        const query = req.query;
        console.log(query);
        res.send(query);
    }
}
exports.PokemonMiddleware = PokemonMiddleware;
exports.default = new PokemonMiddleware();
//# sourceMappingURL=pokemonMiddleware.js.map