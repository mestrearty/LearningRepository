"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Apenas Recordando Express
const express_1 = __importDefault(require("express"));
const alertaTerminalMiddleware_1 = __importDefault(require("./alertaTerminalMiddleware"));
const pokemonMiddleware_1 = __importDefault(require("./pokemonMiddleware"));
const app = (0, express_1.default)();
const porta = 3001;
app.listen(porta, () => {
    console.log(`Serviço escutando na porta ${porta}!`);
});
//para startar:
//npm i
//npm start
//middleware
app.use(alertaTerminalMiddleware_1.default);
//primeira instanciação
app.use("/oi", (req, res) => {
    res.send("<h1>Voltei!</h1>");
});
//usando método Get e devolvendo Json
app.get("/pokemon/pikachu", (req, res) => {
    res.json({
        id: 25,
        name: "Pikachu",
        type: "Eletric",
        weakness: "Ground",
    });
});
//Pegar dados de parâmetros
app.get("/pokemon/:id", pokemonMiddleware_1.default.get);
app.post("/pokemon/register", pokemonMiddleware_1.default.post);
//# sourceMappingURL=index.js.map