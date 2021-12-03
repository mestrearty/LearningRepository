import React from "react";

export default (props) => {
  const { min, max } = props;
  const rand = Math.floor(Math.random() * (max - min) + min);
  return (
    <div>
      <h2>Desafio: Valor Aleatóio</h2>
      <p>Min: {min}</p>
      <p>Max: {max}</p>
      <p>Valor Sorteado: {rand}</p>
    </div>
  );
};
