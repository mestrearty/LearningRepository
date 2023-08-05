/** You can edit, run, and share this code. play.kotlinlang.org */
const val A = 10
const val B = 5

fun main() {
    // Temos também operadores comparativos que retonam True or False
    println(A > B) // Maior que
    println(A < B) // Menor que
    println(A >= B) // Maior ou igual que
    println(A <= B) // Menor ou igual que
    println(A == B) // Igual à
    println(A != B) // Diferente de

    println("----")
    println(A.equals(B)) // verifica se é igual
    println(
            !A.equals(B)
    ) // Nega o resultado. Exibe o valor inverso da expressão (True -> False e False -> True)
}
