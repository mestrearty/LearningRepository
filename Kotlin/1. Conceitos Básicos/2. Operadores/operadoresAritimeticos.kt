/** You can edit, run, and share this code. play.kotlinlang.org */
const val x = 10 // Variável estática
const val y = 5

fun main() {

    println(x.plus(y)) // soma
    println(x.minus(y)) // subração
    println(x.times(y)) // multiplicação
    println(x.div(y)) // divisão
    println(x.mod(y)) // módulo

    var r = x + y // você também pode fazer operações da maneira tradicional com +-*/%
    println("R: $r")
    // e também funciona realizar calculos básicos passando o operador antes do = na hora de
    // atribuir
    r -= y // subtrai y
    println("R: $r")
    r += y // soma y
    // Também é possível acrescentar e diminuir em 1 com operadores ++ e --
    println("R: $r")
    println("R +1: ${r++}") // Acrescenta em 1 após exibir na tela
    println("R: $r")
    println("R -1: ${--r}") // Acrescenta em 1 antes para poder já exibir na
}
