/** You can edit, run, and share this code. play.kotlinlang.org */

// Explicação do código no readme.md na pasta "/Herança"

interface Treinador {
    var qdtInsignias: Int
	fun capturar()
    fun batalhar(pokemon:String)
  
}

class Pessoa (val nome: String): Treinador{
   override var qdtInsignias=0
   override fun capturar(){
       println("$nome de $qdtInsignias insígneas está jogando uma Pokébola!")
   }
   
   override fun batalhar(pokemon:String){
       println("$pokemon eu escolho você!")
   }
}

fun main() {
 val treinador = Pessoa("Ash")
 treinador.qdtInsignias = 2
 treinador.capturar()
 treinador.batalhar("Pikachu")
}
