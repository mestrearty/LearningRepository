/** You can edit, run, and share this code. play.kotlinlang.org */

// Toda lista possuí os métodos ".sum()" e ".sumOf()", 
// Mas só é possível utilizar se os valores forem númericos
// .sum() soma todos os itens da lista
// .sumOf({it.parametro})soma todos os itens da lista
// "it" é utilizado para referênciar o nome da lista
fun main() {
    val numeros = listOf(1, 2, 3)
    val pokemon = geraDados()
    println(numeros)
    println("Somando os números na lista: ${numeros.sum()}")
    println("Somando número de um elemento em específico da lista: ${pokemon.sumOf({it.numero})}")
}

fun geraDados(): List<Pokemon> {
    return listOf(Pokemon("Rayquaza", 384), Pokemon("Jirachi", 385), Pokemon("Deoxys ", 386))
}

data class Pokemon(val nome: String, val numero: Int)
