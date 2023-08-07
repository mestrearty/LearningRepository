/** You can edit, run, and share this code. play.kotlinlang.org */

// Toda lista possuí os métodos ".map()"
//Retorna uma lista somente do atributo desejado 
fun main() {
    val pokemon = geraDados()
        
    println(pokemon)
    println("Nome: ${pokemon.map{it.nome}}")
    println("Dex: ${pokemon.map{it.dex}}")

}

fun geraDados(): List<Pokemon> {
    return listOf(Pokemon("Rayquaza", 384),Pokemon("Pikachu",27), Pokemon("Jirachi", 385), Pokemon("Deoxys ", 386))
}

data class Pokemon(val nome: String, val dex: Int)
