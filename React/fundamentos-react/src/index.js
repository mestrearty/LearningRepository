import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";

const el = document.getElementById("root");

ReactDOM.render(
  <div>
    <Primeiro></Primeiro>
    <ComParametro titulo="Meu Título" subtitulo="Meu Subtítulo" numero={3} />
  </div>,
  el
);
