/** You can edit, run, and share this code. play.kotlinlang.org */
fun main() {
    verificaIdade(10)
    verificaIdade(20)
    verificaIdade(60)

    println(saudacao(true))
    println(saudacaoReduzida(false))
}

// funcionamento comum do If + Else
fun verificaIdade(idade: Int): Unit {
    // se verdadeiro faça
    if (idade >= 60) {
        println("Terceira idade")
    } else if (idade < 18) { // se não, mas se essa for verdade faça
        println("É menor de idade")
    } else { // se não então faça essa aqui
        println("É um adulto!")
    }
}

// If com retorno direto
fun saudacao(dia: Boolean): String {
    return if (dia) {
        "Bom dia"
    } else {
        "Boa noite"
    }
}

fun saudacaoReduzida(dia: Boolean) =
        if (dia) {
            "Bom dia"
        } else {
            "Boa noite"
        }
