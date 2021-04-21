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
  ) { }
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


class Carro {
  private velocidadeAtual: number = 0

  constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200) {

  }

  protected alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta;
    const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima

    if (velocidadeValida) {
      this.velocidadeAtual = novaVelocidade
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
    }

    return this.velocidadeAtual
  }

  public acelerar(): number {
    return this.alterarVelocidade(8)
  }
  public frear(): number {
    return this.alterarVelocidade(-5)
  }

}

const carro = new Carro('Ford', 'K', 185)

for (let i = 0; i < 50; i++) {
  console.log(carro.acelerar())
}
for (let i = 0; i < 50; i++) {
  console.log(carro.frear())
}


//Herança
class Ferrari extends Carro {
  constructor(modelo: string, velocidadeMaxima: number) {
    super('Ferrari', modelo, velocidadeMaxima)
  }
  public acelerar(): number {
    return this.alterarVelocidade(20)
  }
  public frear(): number {
    return this.alterarVelocidade(-15)
  }
}

const f40 = new Ferrari('F40', 324)
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear())

//Getters & Setters
class Pessoa {
  private _idade: number = 0

  get idade(): number {
    return this._idade
  }

  set idade(valor: number) {
    if (valor >= 0 && valor <= 120) {
      this._idade = valor;
    }
  }
}

const pessoa1 = new Pessoa;

pessoa1.idade = 10
console.log(pessoa1.idade)

pessoa1.idade = -10
console.log(pessoa1.idade)


//Static
class Matematica {
  static PI: number = 3.1416
  static areaCirc(raio: number): number {
    return this.PI * raio * raio
  }
}
/*
const m1 = new Matematica();
m1.PI = 4.2
console.log(m1.areaCirc(4))

const m2 = new Matematica();
console.log(m2.areaCirc(4))
*/

console.log(Matematica.areaCirc(4))


//Abstract
abstract class Calculo {
  protected resultado: number = 0
  abstract executar(...numeros: number[]): void

  getResultado(): number {
    return this.resultado
  }
}

class Soma extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a) => t + a)
  }
}

class Multiplicacao extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a) => t * a)
  }
}

let c1 = new Soma()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())

c1 = new Multiplicacao()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())

//Singleton
class Unico {
  private static instance: Unico = new Unico
  private constructor() { }
  static getInstance(): Unico {
    return Unico.instance
  }

  agora() {
    return new Date
  }
}


//const errado =new Unico()
console.log(Unico.getInstance().agora())


//Ready Only
class Aviao {
  public readonly modelo: string
  constructor(modelo: string, public readonly prefixo: string) {
    this.modelo = modelo
  }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC')
// turboHelice.modelo = 'DC-8'
// turboHelice.prefixo = 'PT-DEF'
console.log(turboHelice)