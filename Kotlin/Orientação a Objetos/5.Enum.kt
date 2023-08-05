/** You can edit, run, and share this code. play.kotlinlang.org */

// Explicação do código no readme.md na pasta "/Orientação a Objetos"
enum class Tipo() {
    fogo,
    grama,
    eletrico,
    agua(){
         override fun toString():String{
             return "Água"
         }
         
     }
}

class Pokemon(nome: String, tipo: Tipo) {
    init {
        println("Pokémon $nome do tipo $tipo criado com sucesso!")
    }
}

fun main() {
    println(Tipo.fogo)
    Pokemon("Squirtle", Tipo.agua)
}
