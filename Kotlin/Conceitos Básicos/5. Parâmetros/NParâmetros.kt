// É possível criar uma função que recebe um número indeterminado de parâmetros
// para isso a variável do parâmetro deverá ser declarada como "vararg"
fun media(vararg notas: Float): Float {
    var soma = 0f

    // veja que aqui podemos percorrer cada parâmetro que foi passado dentro de vararg
    for (nota in notas) {
        soma += nota
    }
    return soma / notas.size
}

fun main() {
    // veja que aqui passamos um número qualquer de parâmetros para que
    // a função possa calcular a média
    println("Média: ${media(1f, 2f, 3f, 4f, 5f)}")
}
