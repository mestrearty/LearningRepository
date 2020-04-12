const texto = '1,2,3,4,5,6,a.b c!d?e[f'

//para definir uma classe (ou conjunto) de caracteres usa []

console.log(texto.match(/[02468]/g));

const texto2 = 'João não vai passear na moto nao';

console.log(texto2.match(/n[aã]o/g));