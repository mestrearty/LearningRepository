/** You can edit, run, and share this code. play.kotlinlang.org */

// Explicação do código no readme.md na pasta "/Orientação a Objetos"
class Pokemon(val nome: String, var tipo: String, var level: Int) {
    var tipoSecundario: String? = null

    constructor(
            nome: String,
            tipo: String,
            level: Int,
            tipoSecundario: String
    ) : this(nome, tipo, level) {
        this.tipoSecundario = tipoSecundario
    }

    fun atacar() {
        if (this.tipoSecundario == null) {
            println("O $nome está usando um ataque do tipo $tipo!")
        } else {
            println("O $nome está usando um ataque do tipo ${this.tipoSecundario}!")
        }
    }
}

fun main() {
    val pikachu: Pokemon = Pokemon("Pikachu", "Elétrico", 5)
    pikachu.atacar()

    val charizard: Pokemon = Pokemon("Charizard", "Fogo", 40, "Voador")
    charizard.atacar()
}
