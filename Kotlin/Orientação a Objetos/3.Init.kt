/** You can edit, run, and share this code. play.kotlinlang.org */

// Explicação do código no readme.md na pasta "/Orientação a Objetos"
class Animal(var especie: String) {

    var fala: String = "Esse animal não fala."
    init {
        if (especie == "cachorro") {
            fala = "au au"
        } else if (especie == "gato") {
            fala = "miaw"
        }
    }
    init {
        println("Seu animal faz $fala")
    }
}

fun main() {
    Animal("cachorro")
}
