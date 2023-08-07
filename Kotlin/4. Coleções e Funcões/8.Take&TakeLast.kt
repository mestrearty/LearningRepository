/** You can edit, run, and share this code. play.kotlinlang.org */

// Toda lista possuí os métodos ".take()" e ".last(takeLast)".
// "n" é um número inteiro qualquer
// .take(n) retorna os n Primeiros itens da lista
// .takeLast(n)retorna os n Últimos itens da lista
fun main() {
    val pokemon = geraDados()
    println(pokemon)
    println("Dois Primeiros da lista: ${pokemon.take(2)}")
    println("Dois Últimos da lista: ${pokemon.takeLast(2)}")
}

fun geraDados(): List<Pokemon> {
    return listOf(Pokemon("Rayquaza", 384), Pokemon("Jirachi", 385), Pokemon("Deoxys ", 386))
}

data class Pokemon(val nome: String, val numero: Int)
