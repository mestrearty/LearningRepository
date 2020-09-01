new Vue({
  el: "#desafio",
  data: {
    efeito01: "encolher",
    estiloInserido: "",
    status: false,
    estiloManual: "",
    statusBarSize: 0,
    statusBar: "",
  },
  computed: {},
  methods: {
    iniciarEfeito() {
      setInterval(() => {
        this.efeito01 = this.efeito01 === "destaque" ? "encolher" : "destaque";
      }, 2000);
    },
    iniciarProgresso() {
      setInterval(() => {
        this.statusBarSize += 10;
        if (this.statusBarSize > 100) this.statusBarSize = 0;
        this.statusBar = {
          width: this.statusBarSize * 10,
          backgroundColor: "yellow",
        };
      }, 1000);
    },
  },
});
