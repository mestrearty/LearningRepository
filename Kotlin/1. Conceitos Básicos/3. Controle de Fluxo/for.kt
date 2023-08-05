/** You can edit, run, and share this code. play.kotlinlang.org */
fun main() {

    // until -> Incrementa o i a cada ciclo
    for (i in 0 until 3) {
        println(i)
    }

    // downTo -> Decrementa o i a cada ciclo
    for (i in 3 downTo 0) {
        println(i)
    }

    // step -> incrementa de X em X onde X é definido após o step
    for (i in 0..4 step 2) {
        println(i)
    }

    // Percorre uma string char por char
    var text = "Banana"
    for (letter in text) {
        print("$letter ")
    }
}
