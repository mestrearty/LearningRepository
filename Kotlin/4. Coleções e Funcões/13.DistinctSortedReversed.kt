/** You can edit, run, and share this code. play.kotlinlang.org */

// Toda lista possuí os métodos ".Distinct Sorted e Reversed",
// Esses métodos são utilizados para ordenzação da lista

fun main() {
    val numeros = listOf(1, 5, 7, 2, 53, 5, 32, 10, 10, 10)
    val pokemon = geraDados()
    println("Lista $numeros")
    println("Sem repetir: ${numeros.distinct()}")
    println("Ordenando Crescente: ${numeros.sorted()}")
    println("Ordenando Decrescente: ${numeros.sortedDescending()}")
    numeros.reversed() //volta a lista a ordem original

    println("Pokemon: $pokemon")
    println("Pokemon por nome: ${pokemon.sortedBy{it.nome}}")
}

fun geraDados(): List<Pokemon> {
    return listOf(Pokemon("Rayquaza", 384),Pokemon("Pikachu",27), Pokemon("Jirachi", 385), Pokemon("Deoxys ", 386))
}

data class Pokemon(val nome: String, val dex: Int)
