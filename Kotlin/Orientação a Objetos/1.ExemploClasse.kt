/** You can edit, run, and share this code. play.kotlinlang.org */

//Explicação do código no readme.md na pasta "/Orientação a Objetos"
class Pokemon(var nome: String, var tipo: String, var level: Int) {
    fun atacar() {
        println("O $nome está usando um ataque do tipo $tipo!")
    }
}

fun main() {
    var pikachu: Pokemon = Pokemon("Pikachu", "Elétrico", 5)
    pikachu.atacar()

    pikachu.tipo = "Voador"
    pikachu.atacar()
}
