"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Apenas Recordando Express
const express_1 = __importDefault(require("express"));
const alertaTerminalMiddleware_1 = __importDefault(require("./alertaTerminalMiddleware"));
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
app.get("/pokemon/:id", (req, res) => {
    res.send(`Pokémon Dex ${req.params.id}`);
});
//# sourceMappingURL=index.js.map