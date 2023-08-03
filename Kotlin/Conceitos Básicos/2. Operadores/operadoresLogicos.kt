/** You can edit, run, and share this code. play.kotlinlang.org */
const val A = 10
const val B = 5

fun main() {
    val numbers = listOf(1, 2, 3, 4, 5, 6, 8, 9, 0) // uma lista de números de de 0 a 9
    var number = (1..34).random() // um número aleatório de 1 a 34

    // Operadores lógicos
    println(A > B && A < B) // E
    println(A > B || A < B) // OU
    println(A in numbers) // Esta contido em
    println(number in numbers)
    println(A !in numbers) // Não está contido em
    println(B in 1..20)
}
