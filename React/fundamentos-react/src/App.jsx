import React from "react";

import "./App.css";

import ListaProdutos from "./components/repeticao/ListaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
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
        <Card titulo="#7 Desafio Repetição" color="#5e5656">
          <ListaProdutos></ListaProdutos>
        </Card>
      </div>

      <div className="Cards">
        <Card titulo="#6 Repetição" color="#58668b">
          <ListaAlunos></ListaAlunos>
        </Card>
      </div>

      <div className="Cards">
        <Card titulo="#5 Familia Aleatório" color="#76b4bd">
          <Familia sobrenome="Ficer">
            <FamiliaMembro nome="Pedro" />
            <FamiliaMembro nome="Luana" />
            <FamiliaMembro nome="Elf" />
          </Familia>
        </Card>

        <Card titulo="#4 Desafio Aleatório" color="#283655">
          <MinMax min={1} max={10} />
        </Card>

        <Card titulo="#3 Fragmento" color="#3da4ab">
          <Fragmento />
        </Card>

        <Card titulo="#2 Com Parâmetro" color="#0e9aa7">
          <ComParametro
            titulo="Meu Título"
            subtitulo="Meu Subtítulo"
            numero={3}
          />
        </Card>

        <Card titulo="#1 Primeiro Componente" color="#4a4e4d">
          <Primeiro></Primeiro>
        </Card>
      </div>
    </div>
  );
};
