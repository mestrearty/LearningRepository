new Vue({
  el: "#desafio",
  data: {
    valor: "",
  },
  methods: {
      alerta(){
          alert(`Apertou o botão né bb?${this.valor}` )
      },
      tecla(){
        this.valor = event.target.value
      }
  },
});
