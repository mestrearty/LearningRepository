import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import MinMax from "./components/basicos/DesafioMinMax";

export default (props) => {
  return (
    <div id="app">
      <h1>Fundamentos React</h1>
      <Primeiro></Primeiro>
      <ComParametro titulo="Meu Título" subtitulo="Meu Subtítulo" numero={3} />
      <Fragmento />
      <MinMax min={1} max={10} />
    </div>
  );
};
