/** You can edit, run, and share this code. play.kotlinlang.org */

// Explicação do código no readme.md na pasta "/Herança"

open class Eletronico(var marca: String) {
    private fun ativarCorrente() {
        println("Recebendo energia")
    }

    open fun ligar() { // sinalizando com "open" que ela é aberta a sobrescrita
        ativarCorrente()
        println("Ligando")
    }
    fun desligar() {
        println("Desligando")
    }
}

class Computador(marca: String) : Eletronico(marca) {
    fun distribuirEnergia() {
        println("Distribuindo energia para os componentes")
    }

    // sobrescrevendo um método com "override"
    override fun ligar() {
        super.ligar()//chamo o método ligar que existe dentro do pai com o "super."
        distribuirEnergia()
    }

    fun processar() {
        println("Estou processando algo...")
    }
}

fun main() {
    var computador: Computador = Computador("Dell")

    computador.ligar()
    computador.processar()
    computador.desligar()
}
