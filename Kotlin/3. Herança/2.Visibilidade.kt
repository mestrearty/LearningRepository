/** You can edit, run, and share this code. play.kotlinlang.org */

// Explicação do código no readme.md na pasta "/Herança"

open class Eletronico(var marca: String) {
    protected var estado: String = "desligado"

    private fun ativarCorrente() {
        println("Recebendo energia")
    }

    fun ligar() {
        ativarCorrente()
        println("Ligando")
    }
    fun desligar() {
        estado = "desligado"
        println("Desligando")
    }
}

class Computador(marca: String) : Eletronico(marca) {
    fun processar() {
        estado = "ocupado"
        println("Estou ${this.estado} processando algo...")
        //ativarcorrente() -> não pode ser chamado por que é privado
    }
}

fun main() {
    var computador: Computador = Computador("Dell")

    computador.ligar()
    computador.processar()
    computador.desligar()
    //computador.estado -> não pode ser chamado pois é protegido
    //computador.ativarcorrente() -> não pode ser chamado por que é privado
}
