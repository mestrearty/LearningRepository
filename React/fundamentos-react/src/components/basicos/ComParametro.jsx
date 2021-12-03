import React from "react";

export default function (props) {
  console.log({ params: props });
  const subtitulo = props.subtitulo;
  return (
    <div className="parametros">
      <h2>{props.titulo}</h2>
      <h3>{subtitulo}</h3>
      <h4>Número: {props.numero + 3}</h4>
    </div>
  );
}
