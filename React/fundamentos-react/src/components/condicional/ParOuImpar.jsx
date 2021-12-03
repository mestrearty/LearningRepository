import React from "react";

export default (props) => {
  const { numero } = props;
  const isPar = numero % 2 === 0;

  return <div>{isPar ? <span>Par</span> : <span>Ímpar</span>}</div>;
};
