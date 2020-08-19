new Vue({
    el: "#desafio",
    data: {
        SEU_NOME: "Pedro",
      IDADE:25,
      IMGSRC: 'https://www.torredevigilancia.com/wp-content/uploads/2018/09/Superior_Spider_Man.jpg',
    },
    methods: {
      IDADEX3: function () {
        return this.IDADE * 3;
      },
      RANDOMICO: function () {
        return Math.random(); ;
      },
    },
  });