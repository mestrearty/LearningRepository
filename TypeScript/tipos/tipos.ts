/* O typescript é tipado, ou seja, as variaveis tem tipos (bool, number, string) e elas devem ser respeitadas.
  Não é tão "bem tipado" quando tum c/c++, mas já é algo.
  De maneira geral, o typescript é auto inferente, ou seja, quando você passa um valor para a 
  variável, automaticamente ele ve qual o seu tipo, e infere que aquela variável só lidará com aquele tipo
*/

//string
let nome = "joão";// ou 
let nome2: string;
console.log(nome)

//numbers
let idade = 28;// ou 
let idade2: number;

idade = 25.2;
console.log(idade);

//boolean
let possuiHobbies = false;// ou 
let possuiHobbies2: boolean;

console.log(possuiHobbies);


//aceitar nulo e/ou outro valor
let altura: null | number = 10

//tipos explícitos
//Tipo dinâmico, igual JS, varia de acordo com a nova atribuição
let minhaIdade; // ou 
let minhaIdade2: any;

minhaIdade = 28;
console.log(typeof minhaIdade)

minhaIdade = "zé";
console.log(typeof minhaIdade)

minhaIdade = true;
console.log(typeof minhaIdade)

//array
//o array também pode ter tipos definidos
let hobbies: any[] = ["Cozinhar", "Praticar"];
console.log(typeof hobbies);

//tupla
//arrays pré definidos (define quantidade, posição e tipo de cada unidade)
let endereco: [string, number] = ["Av Principal", 99];
console.log(endereco)


//enums
enum Cor {
  Cinza, //0
  Marrom,//1
  Verde = 100,//100
  Azul//101
}

let minhaCor: Cor = Cor.Verde;
console.log(Cor[100]);
console.log(minhaCor);


//funções
function retornaMuNome(): string {
  return nome;
}

console.log(retornaMuNome());

function digaOi(): void {
  console.log('oi');
}

digaOi();

function multiplicar(numA: number, numB: number): number {
  return numA * numB;
}
console.log(multiplicar(2, 2));


//atribuindo função a variável

const teste = function (a: number, b: number): boolean {
  return true;
}
console.log(teste(1, 2));


let calculo: (numeroA: number, numeroB: number) => number;
//calculo = digaOi;calculo(); Não pode, pq eu defini a estrutura

calculo = multiplicar;
console.log(calculo(5, 3));

//objetos
let usuario: { nome: string, idade: number } = {
  nome: "joão",
  idade: 28
}

console.log(usuario);

//Exemplo
let funcionario: {
  supervisores: string[],
  baterPonto: (horas: number) => string
} = {
  supervisores: ["Lucas", "Luana"],
  baterPonto: (horas: number): string => {
    if (horas <= 8) {
      return 'Ponto normal';
    }
    return "Ponto Fora do horário";
  }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(2));

//alias
type Funcionario = {
  supervisores: string[],
  baterPonto: (horas: number) => string
}

let funcionario2: Funcionario = {

  supervisores: ["Lucas", "Luana"],
  baterPonto: (horas: number): string => {
    if (horas <= 8) {
      return 'Ponto normal';
    }
    return "Ponto Fora do horário";
  }
}

//union types
let nota: string | number = 10;

console.log(nota)
nota = 'Agora sou texto'
console.log(nota)

//Checando tipos
let valor = 10;

if (typeof valor === "number") {
  console.log("É um number");
} else {
  console.log("Não é um number")
}

//never
/*
function falha(msg: string): never {
  //while (true) { }
  throw new Error(msg)
}

const produto = {
  nome: 'Sabão',
  preco: -1,
  validarProduto(){
    if(!this.nome || this.nome.trim().length == 0){
      falha('Precisa de um nome!');
    }
    if(this.preco<=0){
      falha('Preco invalido!');
    }
  }
}

produto.validarProduto()
*/


//exemplo de código
type ContaBancaria = {
  saldo: number,
  depositar: (valor: number) => void
};

let contaBancaria: ContaBancaria = {
  saldo: 2323,
  depositar(valor: number) {
    this.saldo += valor;
  }
}

type Correntista = {
  nome: string,
  contaBancaria: ContaBancaria,
  contatos: [string, string]

}
let correntista:Correntista = {
  nome: 'Ana Silva',
  contaBancaria: contaBancaria,
  contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
