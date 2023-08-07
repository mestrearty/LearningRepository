/** You can edit, run, and share this code. play.kotlinlang.org */

// Toda lista possuí os métodos ".forEach()".
// Ele percorre todos os elementos e executa uma "função"
fun main() {
    val pokemon = geraDados()
    pokemon.forEach { 
        println("\n${it.nome}")
        println("Dex: ${it.numero} Tipo: ${it.type}")
     }
  
}

fun geraDados(): List<Pokemon> {
    return listOf(
            Pokemon("Rayquaza", 384, "dragon"),
            Pokemon("Jirachi", 385, "psychic"),
            Pokemon("Deoxys ", 386, "psychic")
    )
}

data class Pokemon(val nome: String, val numero: Int, val type: String)
