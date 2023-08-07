/** You can edit, run, and share this code. play.kotlinlang.org */

// Toda lista possuí os métodos ".maxOf()" e ".minOf()", 
// Retorna o maior valor e o menor valor da lista
//É possível tanto utilizar na lista direta quanto por atributo específico da data class
fun main() {
    val numeros = listOf(1, 2, 3)
    val pokemon = geraDados()
    
    println(numeros)
    println(numeros.maxOf{it})
    
    println(pokemon)
    println("Pokémon de menor número na dex: ${pokemon.minOf{it.dex}}")
 
}

fun geraDados(): List<Pokemon> {
    return listOf(Pokemon("Rayquaza", 384),Pokemon("Pikachu",27), Pokemon("Jirachi", 385), Pokemon("Deoxys ", 386))
}

data class Pokemon(val nome: String, val dex: Int)
