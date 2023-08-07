/** You can edit, run, and share this code. play.kotlinlang.org */

// Toda lista possuí o método ".filter()".
// Esse método vai retornar todas as instâncias do que você procurar passando parâmetros
// Ex: pokemon.filter{it.type == "dragon"}
// Repare que aqui seguimos o conceito que "it" referencia a lista em questão
// e faço um teste lógico para verificar se o valor do parâmetro é o informado
// Caso sim, ele retornara as instâncias que tiver o valor do parâmetro informado

fun main() {
    val pokemon = geraDados()
    println(pokemon)
    println("Exibindo os Psychic: ${pokemon.filter{it.type == "psychic"}}")
    println("Exibindo os Dragon: ${pokemon.filter{it.type == "dragon"}}")
    println("Exibindo os Pokemon acima do 384: ${pokemon.filter{it.numero >384}}")
}

fun geraDados(): List<Pokemon> {
    return listOf(
            Pokemon("Rayquaza", 384, "dragon"),
            Pokemon("Jirachi", 385, "psychic"),
            Pokemon("Deoxys ", 386, "psychic")
    )
}

data class Pokemon(val nome: String, val numero: Int, val type: String)
