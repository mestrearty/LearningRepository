import React from "react";
import produtos from "../../data/produtos";
import "./TabelaProdutos.css";

export default (props) => {
  const tableBody = produtos.map((produto, i) => {
    console.log(i % 2 == 0 ? "Par" : "Impar");
    return (
      <tr key={produto.id} className={i % 2 === 0 ? "Par" : "Impar"}>
        <th>{produto.id})</th>
        <th>{produto.nome}</th>
        <th>R$ {produto.preco}</th>
      </tr>
    );
  });
  return (
    <div>
      <table className="TabelaProdutos">
        <tbody >
          <tr className="TableHeader">
            <th>id</th>
            <th>nome</th>
            <th>preco</th>
          </tr>
          {tableBody}
        </tbody>
      </table>
    </div>
  );
};
