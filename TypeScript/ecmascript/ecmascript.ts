//let && const

let seraQuePode = '?' //Variável alteravel

console.log(seraQuePode);

let estaFrio = true;

if (estaFrio) {
  let acao = 'Colocar o casaco!'
  console.log(acao);
}

const cpf: string = '123.456.123-00'; //Constante, não altera
console.log(cpf);

var segredo = 'externo';

function revelar() {
  const segredo = 'interno';
  console.log(segredo);
}
revelar();
console.log(segredo);
/*
{
  const def = 'def';
}

console.log(def); //Inacessível
*/
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//console.log(i)//not reacheble with let, but in es5 with var, is

//Arrow Function
function somar(n1: number, n2: number): number {
  return n1 + n2;
}

console.log("Soma:", somar(2, 2));

const subtrair = (n1: number, n2: number): number => {
  return n1 - n2;
}

console.log("Subtração:", subtrair(2, 1));

const dividir = (n1: number, n2: number) => n1 / n2;
console.log("Divisão:", dividir(4, 2));

const saudacao = () => console.log("Olá");
saudacao();


const falarCom = (nome: string) => console.log("Olá", nome);
falarCom("Luana");

// this
/*
function normalComThis() {
  console.log(this);
}

const normalComThisEspecial = normalComThis.bind('Abc');
normalComThisEspecial();

// Quem é o this antes de onde ele foi definido
const arrowComThis = () => console.log(this);
arrowComThis();

const arrowComThisEspecial = arrowComThis.bind("Ana");
arrowComThisEspecial();//no arrow o this nunca muda.
*/

//Parâmetros Padrão
function contagemRegressiva(inicio: number = 3, fim: number = 0): void {
  console.log(inicio);
  while (inicio > fim) {
    inicio--;
    console.log(inicio);
  }
  console.log("fim!");
}

contagemRegressiva();
contagemRegressiva(2);
contagemRegressiva(2, -1);

// Rest e Spread
const numbers = [1, 2, 10, 99, -5, 200];
console.log(Math.max(numbers[0], numbers[1], numbers[2], numbers[3]))
//Usando Rest - Spread
console.log(Math.max(...numbers))

const turmaA: string[] = ['João', 'Maria', 'Fernanda'];
const turmaB: string[] = ['Miguel', ...turmaA, 'Lorena'];
console.log(turmaB);

function retornarArray(a:number,...args: number[]): number[] {
  console.log(a);
  return args;
}

console.log(retornarArray(1,2,3,4,5,6,7));
console.log(retornarArray(50,...numbers));

//Rest e Spread (tupla)
const tupla: [number,string,boolean] = [1,"Patinho foi passear",false];

function tuplaParam1(a:number,b:string,c:boolean):void{
  console.log('1)',a,b,c);
}

tuplaParam1(...tupla);

function tuplaParam2(...params:[number,string,boolean]):void{
  console.log(Array.isArray(params))
  console.log('2)',params[0],params[1],params[2]);
}

tuplaParam2(...tupla);