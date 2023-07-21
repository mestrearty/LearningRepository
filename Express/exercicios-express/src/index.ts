//Apenas Recordando Express
import express, { Express, Request, Response } from "express";
import alertaMiddleware from "./alertaTerminalMiddleware";
import pokemonMiddleware from "./pokemonMiddleware";

const app = express();
const porta = 3001;

app.listen(porta, () => {
  console.log(`Serviço escutando na porta ${porta}!`);
});

//para startar:
//npm i
//npm start

//middleware
app.use(alertaMiddleware);

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
app.get("/pokemon/:id", pokemonMiddleware.get);

app.post("/pokemon/register", pokemonMiddleware.post);
