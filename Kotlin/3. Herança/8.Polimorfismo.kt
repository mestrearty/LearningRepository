/** You can edit, run, and share this code. play.kotlinlang.org */

// Explicação do código no readme.md na pasta "/Herança"
interface Funcionario {
    var salario: Float
    fun bonus(): Float
}

class Gerente(override var salario: Float) : Funcionario {

    override fun bonus(): Float {
        return salario * 0.5f
    }
}

class Analista(override var salario: Float) : Funcionario {

    override fun bonus(): Float {
        return salario * 0.3f
    }
}

fun mostrarBonus(funcionario: Funcionario) {
    println(funcionario.bonus())
}

fun main() {

    val analista = Analista(2000.0f)
    mostrarBonus(analista)
    val gerente = Gerente(2000.0f)
    mostrarBonus(gerente)
}
