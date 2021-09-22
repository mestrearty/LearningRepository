import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";

const el = document.getElementById("root");

ReactDOM.render(
  <div>
    <Primeiro></Primeiro>
    <ComParametro titulo="Meu Título" subtitulo="Meu Subtítulo" numero={3} />
    <Fragmento />
  </div>,
  el
);
