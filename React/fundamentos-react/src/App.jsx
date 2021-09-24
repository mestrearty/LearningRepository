import React from "react";

import "./App.css";

import Card from "./components/layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import MinMax from "./components/basicos/DesafioMinMax";

export default (props) => {
  return (
    <div className="App" id="app">
      <h1>Fundamentos React</h1>
      <div className="Cards">
        <Card titulo="#4 Desafio Aleatório" color="#051e3e">
          <MinMax min={1} max={10} />
        </Card>

        <Card titulo="#3 Fragmento" color="#251e3e">
          <Fragmento />
        </Card>

        <Card titulo="#2 Com Parâmetro" color="#451e3e">
          <ComParametro
            titulo="Meu Título"
            subtitulo="Meu Subtítulo"
            numero={3}
          />
        </Card>

        <Card titulo="#1 Primeiro Componente">
          <Primeiro></Primeiro>
        </Card>
      </div>
    </div>
  );
};
