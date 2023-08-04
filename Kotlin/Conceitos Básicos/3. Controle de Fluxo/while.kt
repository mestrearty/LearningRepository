/**
 * You can edit, run, and share this code.
 * play.kotlinlang.org
 */
fun main() {
  
    //Enquanto a condição for verdade
    var i = 0
    while(i <10){
        println("Contando: ${++i}")

    }

    var word = "Pokemon"
    var k =0
    while (k<word.length){
        println("${word[k]}")
        k++
    }

    //Acontece que o while só executa a primeira vez se e somente se
    //sua condição for verdadeira
    //Contudo, podemos forçar uma primeira entrada utilizando do{}while()
    //mesmo que não seja verdade
    do{
        k++
        println(k)
    }while(k<10)

    //é possível também forçar a saída do while com break
    var j = 0
    while(true){
        if(j==4) break
        println(j)
        j++
    }

    //é possível também pular trexos utilizando continue
    //veja no código a baixo
    //caso o valo de l seja par, ele fala para reinicar o while
    //fazendo com que números pares nunca sejam exibidos
    var l = 0
    while(l<10){
        l++
        if((l % 2) == 0) continue
        println(l)
    }

}
