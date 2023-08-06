/** You can edit, run, and share this code. play.kotlinlang.org */

// Set trata-se de um conjunto de itens não ordenados e únicos
// Sendo assim, só é possível ter 1 único valor, criando valores repitidos
// E também não é possível acessar por index ([i])
// Por ser uma collection herda métodos como .add, .remove e .contains

fun main() {
    val set: Set<String> = setOf<String>("Pikachu", "Dragonite", "Decidueye")
    val setMutavel: MutableSet<String> = mutableSetOf()

    println("Set: $set")

    setMutavel.add("Mew")
    setMutavel.add("Lapras")

    println("Set Mutavel: $setMutavel")

}
