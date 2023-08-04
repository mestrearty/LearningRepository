/** You can edit, run, and share this code. play.kotlinlang.org */
fun main() {
    // o When funciona como um "Switch Case" comum em várias linguagens
    // No caso, ele verifica dentro do seu escopo qual condição é verdadeira
    // em relação ao valor que foi passado a ele
    println("Bonus do cargo é: R$ ${bonus("PROFESSOR")}")
    verificaNota(6)
}

fun bonus(cargo: String): Float {
    var bonus = 0f
    when (cargo.lowercase()) {
        "gerente" -> bonus = 2000f // pode utilizar sem chaves se for só uma linha
        "professor" -> {
            println("Um professor!")
            bonus = 1000f
        }
        else -> println("Cargo não encontrado. Sem bônus pra ti!")
    }

    return bonus
}

// When com in -> Pega um valor que esteja entre os estipulados
fun verificaNota(nota: Int): Unit {
    println(
            when (nota) {
                in 0..4 -> "Reprovado"
                in 5..7 -> "Mediano"
                in 8..9 -> "Bom"
                10 -> "Excelente"
                else -> "Indefinido"
            }
    )
}
