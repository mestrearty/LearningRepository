fun main() {
    var str: String? = null

    if (str == null) {
        println("Estou nulo")
    } else {
        println(str)
    }
    // Com operador Elvis
    println( str ?: "nulo")
}

// O operador Evlvis é uma forma de garantir que 
//tenhamos uma contrapartida caso recebamos uma variável nula.
// Ao utilizarmos "?:" dizemos que se a variável a esquerda estiver com valor diferente de luno
// ela pode ser executada, mas caso esteja nula, execute o que estiver a direita. 
// Lembre-se que o que estiver a direita pode ser tanto uma string, quanto uma função ou outra variável. 
// Não há limitações.
