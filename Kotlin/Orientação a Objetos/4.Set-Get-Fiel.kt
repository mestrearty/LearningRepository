/** You can edit, run, and share this code. play.kotlinlang.org */

// Explicação do código no readme.md na pasta "/Orientação a Objetos"
class Pessoa() {
    var nome: String = ""
        get() {
            println("Acesso get")
            return field
        }
        set(value) {
            println("Acesso set")
            if (field.length < 30) {
                field = value
            }
        }
}

fun main()
{
    var pessoa = Pessoa()
    pessoa.nome = "Arty"
    println("Olá ${pessoa.nome}")
}
