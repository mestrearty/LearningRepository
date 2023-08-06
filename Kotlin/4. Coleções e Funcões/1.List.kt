/** You can edit, run, and share this code. play.kotlinlang.org */
fun main() {

    // List - Lista imútavel
    var lista = listOf(1, 'a', true)
    val listaGenerica: List<Any> = listOf(1, "abc", true)
    val listaInt: List<Int> = listOf(1, 2, 3, 4, 5)
    val listaChar: List<Char> = listOf('a', 'b', 'c')
    val listaString: List<String> = listOf("abc", "def", "ghi")
    val listaBoolean: List<Boolean> = listOf(true, false, true)
    println("ListOf")
    println(lista)
    println(listaGenerica)
    println(listaInt)
    println(listaChar)
    println(listaString)
    println(listaBoolean)

    // MutableList - Lista mútavel
    var listaMutavel: MutableList<Any> = mutableListOf(1, "abc", true)
    println("\nMutableList")
    println(listaMutavel)

    // Métodos
    println("\nMétodos")
    println("Pegar de uma posição: ${lista[2]}")
    println("Pegar o tamanho: ${lista.size}")

    println("\nAdicionar um falor no final da lista Mutável. \nAntes: ${listaMutavel}")
    listaMutavel.add("Queijo") // Você não poderá usar esse método em list, somente mutablelist
    println("Depois: $listaMutavel")

    println("Removendo")
    listaMutavel.remove("Queijo") // remove o item se achar
    println("Removi por elemento (Queijo): $listaMutavel")
    listaMutavel.removeAt(1) // remove o que estiver no index passado
    println("Removi por index (1 - abc): $listaMutavel")

    println(
            "Verifica se contém: \n 1: ${listaMutavel.contains(1)} \n Queijo: ${listaMutavel.contains("Queijo")}"
    )

    listaMutavel.clear() // Apaga tudo dentro da lista

    println("Apaguei tudo da lista olha só: $listaMutavel")
}
