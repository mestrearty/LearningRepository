//callback
function esperar3s(callback: (dados: string) => void) {
  setTimeout(() => {
    callback("3s depois...");
  }, 3000);
}

esperar3s(function (resultado: string) {
  console.log(resultado);
});
