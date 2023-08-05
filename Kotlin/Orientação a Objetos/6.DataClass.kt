/** You can edit, run, and share this code. play.kotlinlang.org */

// Explicação do código no readme.md na pasta "/Orientação a Objetos"
class FormaSemData(val a: Int, val b: Int)

data class FormaData(val a: Int, val b: Int)

fun main() {
    // Chamando uma classe normal
    val fsd1: FormaSemData = FormaSemData(10, 8)
    val fsd2: FormaSemData = FormaSemData(10, 8)
    val fsd3: FormaSemData = fsd1
    println(fsd1.equals(fsd2)) // false
    println(fsd1.equals(fsd3)) // true

    // Chamando uma classe do tipo data
    val fd1: FormaData = FormaData(10, 8)
    val fd2: FormaData = FormaData(10, 8)
    println(fd1.equals(fd2)) // true
    val fd3: FormaData = fd1.copy()//true
    println(fd3.equals(fd2))
}