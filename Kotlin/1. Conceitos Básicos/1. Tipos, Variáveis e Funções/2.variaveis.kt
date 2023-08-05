/** You can edit, run, and share this code. play.kotlinlang.org */
const val MAX_AGE = 50 // Variável estática Global. 

fun main() {
    var currentAge = 30 // Declarando variável comum que pode ser alterada (var)
    val newCurrentAge: Int // Declarando variável tipada que não pode ser alterada (val)
    newCurrentAge = 40 // atribuindo valor

    println(currentAge)
    println(newCurrentAge)
    println(MAX_AGE)
}
