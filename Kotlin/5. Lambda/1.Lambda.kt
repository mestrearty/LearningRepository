/** You can edit, run, and share this code. play.kotlinlang.org */

//Padrão: {parâmetros -> corpo}

fun main() {

    //É possível definir uma função a uma variável
    val a = {println("É o Blastoise")}
    val b = {x:Int -> x * x}
    receiveA(a)
    receiveB(b)
    
    //ou passá-la diretamente no parâmetro
    receiveC({x:Int, y:Int -> x * y})
    
}


//Funções
fun receiveA(lambda: () -> Unit){
    println("Quem é esse pokémon?")
    lambda()//chamando a função lambda dentro de outra função
}

fun receiveB(lambda:(x:Int)-> Int){
    println(lambda(10))
}

fun receiveC(lambda: (x:Int, y:Int)->Int){
    println(lambda(10,2))
}
