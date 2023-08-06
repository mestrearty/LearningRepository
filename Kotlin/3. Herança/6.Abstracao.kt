/** You can edit, run, and share this code. play.kotlinlang.org */

// Explicação do código no readme.md na pasta "/Herança"

abstract class Mamifero(val nome:String) {

    fun acordar(){
        println("Acordei")
    }
    
    fun dormir(){
        println("A mimir")
    }
    
    abstract fun falar()//não implementamos
}

class Gato (nome: String): Mamifero(nome){
    override fun falar(){
        println("${nome} diz: Me da sachê Marcia!")
    }
}

fun main() {
 val gato = Gato ("Link")
 gato.acordar()
 gato.falar()
 gato.dormir()
}
