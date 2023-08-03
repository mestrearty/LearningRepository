/** You can edit, run, and share this code. play.kotlinlang.org */
fun main() {
    // função extensão
    // Você pode estender uma classe implementando uma nova função a ela
    fun Int.getStudentStatus() {
        println("nota $this")

        // switch case
        println(
                when (this) {
                    in 0..4 -> "Reprovado"
                    in 5..7 -> "Mediano"
                    in 8..9 -> "Bom"
                    10 -> "Excelente"
                    else -> "Indefinido"
                }
        )
    }
    val grade = (0..10).random()

    // como estendemos o Int e grade é um variável do tipo Int, podemos chamar o método
    // .getStudentStatus() diretamente da variável
    grade.getStudentStatus()

    // elvis operator
    var t: Int
    var x: Int? = null
    var w: Int? = 10

    t = x ?: w ?: -1
    println(t)

    x?.getStudentStatus() // só chama se o valor n for nulo
    w?.getStudentStatus()
}
