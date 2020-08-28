new Vue({
  el: "#desafio",
  data: {
    valor: 0,
  },
  watch: {
    valor() {
      setTimeout(() => {
        this.valor = 0;
      }, 2000);
    },
  },
  computed: {
    resultadoComputado() {
      return this.valor === 37 ? "Valor igual a 37" : "Valor diferente de 37";
    },
  },
});
