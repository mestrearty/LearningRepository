/** You can edit, run, and share this code. play.kotlinlang.org */

// Explicação do código no readme.md na pasta "/Herança"

class Computador() {
    fun ligarLed() {
        println("Ligando o led de todos os componentes")
    }

    fun ligarLed(componente: String) {
        println("Ligando o led da $componente")
    }

    fun ligarLed(brilho: Int) {
        println("Ligando o led de todos os componentes em $brilho%")
    }
}

fun main() {
    var computador: Computador = Computador()

    computador.ligarLed()
    computador.ligarLed("placa mãe")
    computador.ligarLed(70)

}
