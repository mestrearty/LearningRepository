class Data {
  //publico por padrão
  dia: number;
  mes: number;
  ano: number;
  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}

const aniversario = new Data(3, 11, 1991);
aniversario.dia = 5;
console.log(aniversario);

const casamento = new Data();
console.log(casamento);

//outro meio
class DataEsperta {
  constructor(
    public dia: number = 1,
    public mes: number = 1,
    public ano: number = 1970
  ) {}
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991);
aniversario.dia = 5;
console.log(aniversario);

const casamentoEsperto = new DataEsperta();
console.log(casamento);

//métodos
class Produto {
  constructor(
    public nome: string,
    public preco: number,
    public desconto: number = 0
  ) {
    this.preco = preco - desconto;
  }

  public resumo(): string {
    return `${this.nome} R$${this.preco}`;
  }

  public valorInegral(): number {
    return this.preco + this.desconto;
  }
}

const papel = new Produto("Papel", 8, 1);
console.log(papel.resumo());

const toalha = new Produto("Toalha", 5);
console.log(toalha.resumo());
