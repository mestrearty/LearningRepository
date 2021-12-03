var teste = "exemplo";

(() => {
  console.log(`Valor dentro da função ${teste}`);
  if (true) {
    var teste = "exemplo 2";
    console.log(`Valor dentro do if ${teste}`);
  }

  console.log(`Valor após a execução do if ${teste}`);
})();

{
  (() => {
    let test = "valor função";
    console.log(`Valor dentro da função ${test}`);
    if (true) {
      let test = `valor if`;
      console.log(`Valor dentro do if ${test}`);
    }

    console.log(`Valor após a execução do if ${test}`);
  })();
}

