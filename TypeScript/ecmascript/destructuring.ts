//Destructuring (array)
console.log("Destructuring com array \nSem DC")
const caracteristicas = ["Motor Zetec 1.8", 2020];

//Sem destructuring
let motor = caracteristicas[0];
let ano = caracteristicas[1];

console.log(motor);
console.log(ano);

//com destructuring
[motor,ano] = caracteristicas;
console.log("Com DC\n",motor);
console.log(ano);

//objeto
const item = {
    nome: 'Livro',
    preco: '32',
    caracteristicas: {
        peso: '1'
    }
}

//sem alias
const {nome, preco} = item; 
console.log(nome + " R$ "+preco);

//com alias

const {nome: n, preco: p, caracteristicas:{ peso }} = item;
console.log(n +" R$ " + p + " Peso " + peso);

