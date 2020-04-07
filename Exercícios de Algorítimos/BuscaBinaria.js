/*A busca binária é um eficiente algoritmo para encontrar um item
 em uma lista ordenada de itens. 
 Ela funciona dividindo repetidamente pela metade a porção da 
 lista que deve conter o item, até reduzir as localizações possíveis 
 a apenas uma. 
 */

 const lista = [1,2,3,4,5,6,7,8,9,10,11,12,13,54,87,94,150,167,248,348,459,562,678,741,854,999]

 function buscaBinaria(lista,min, max){
    const posicao = parseInt(lista.lenght/2,10)
    console.log(posicao)
    const valor = lista[posicao];
}

buscaBinaria(lista,0,lista.length)