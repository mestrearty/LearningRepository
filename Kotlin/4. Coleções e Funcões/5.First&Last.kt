/** You can edit, run, and share this code. play.kotlinlang.org */

// Toda lista possuí os métodos ".first()" e ".last()".
// .first() retorna o primeiro item da lista
// .count()retorna o último item da lista
fun main() {
    val pokemon = geraDados()
    println(pokemon)
    println("Primeiro da lista: ${pokemon.first()}")
    println("Último da lista: ${pokemon.last()}")
}

fun geraDados(): List<Pokemon> {
    return listOf(Pokemon("Rayquaza", 384), Pokemon("Jirachi", 385), Pokemon("Deoxys ", 386))
}

data class Pokemon(val nome: String, val numero: Int)
