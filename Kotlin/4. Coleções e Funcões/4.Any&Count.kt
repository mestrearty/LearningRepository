/** You can edit, run, and share this code. play.kotlinlang.org */

//Toda lista possuí os métodos ".any()" e ".count()".
//.any() retorna que há algo na lista - Boolean
//.count() retorna quantos elementos há na lista - Int
fun main() {
    val pokemon = geraDados()
   println(pokemon)
   println("Tempos Pokémon? ${pokemon.any()}")
   println("Mas quantos Pokémon? ${pokemon.count()}")
}

fun geraDados(): List<Pokemon>{
 	return listOf(
    Pokemon("Rayquaza",384), Pokemon("Jirachi",385)
    )
}

data class Pokemon (val nome: String, val numero: Int)