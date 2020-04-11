"use strict";
/* O typescript é tipado, ou seja, as variaveis tem tipos (bool, number, string) e elas devem ser respeitadas.
  Não é tão "bem tipado" quando tum c/c++, mas já é algo.
  De maneira geral, o typescript é auto inferente, ou seja, quando você passa um valor para a
  variável, automaticamente ele ve qual o seu tipo, e infere que aquela variável só lidará com aquele tipo
*/
//string
var nome = "joão"; // ou 
var nome2;
console.log(nome);
//numbers
var idade = 28; // ou 
var idade2;
idade = 25.2;
console.log(idade);
//boolean
var possuiHobbies = false; // ou 
var possuiHobbies2;
console.log(possuiHobbies);
//aceitar nulo e/ou outro valor
var altura = 10;
//tipos explícitos
//Tipo dinâmico, igual JS, varia de acordo com a nova atribuição
var minhaIdade; // ou 
var minhaIdade2;
minhaIdade = 28;
console.log(typeof minhaIdade);
minhaIdade = "zé";
console.log(typeof minhaIdade);
minhaIdade = true;
console.log(typeof minhaIdade);
//array
//o array também pode ter tipos definidos
var hobbies = ["Cozinhar", "Praticar"];
console.log(typeof hobbies);
//tupla
//arrays pré definidos (define quantidade, posição e tipo de cada unidade)
var endereco = ["Av Principal", 99];
console.log(endereco);
//enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Marrom"] = 1] = "Marrom";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 101] = "Azul"; //101
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(Cor[100]);
console.log(minhaCor);
//funções
function retornaMuNome() {
    return nome;
}
console.log(retornaMuNome());
function digaOi() {
    console.log('oi');
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 2));
//atribuindo função a variável
var teste = function (a, b) {
    return true;
};
console.log(teste(1, 2));
var calculo;
//calculo = digaOi;calculo(); Não pode, pq eu defini a estrutura
calculo = multiplicar;
console.log(calculo(5, 3));
//objetos
var usuario = {
    nome: "joão",
    idade: 28
};
console.log(usuario);
//Exemplo
var funcionario = {
    supervisores: ["Lucas", "Luana"],
    baterPonto: function (horas) {
        if (horas <= 8) {
            return 'Ponto normal';
        }
        return "Ponto Fora do horário";
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(2));
var funcionario2 = {
    supervisores: ["Lucas", "Luana"],
    baterPonto: function (horas) {
        if (horas <= 8) {
            return 'Ponto normal';
        }
        return "Ponto Fora do horário";
    }
};
//union types
var nota = 10;
console.log(nota);
nota = 'Agora sou texto';
console.log(nota);
//Checando tipos
var valor = 10;
if (typeof valor === "number") {
    console.log("É um number");
}
else {
    console.log("Não é um number");
}
var contaBancaria = {
    saldo: 2323,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipos.js.map