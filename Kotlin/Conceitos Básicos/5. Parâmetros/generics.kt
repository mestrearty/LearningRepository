// É possível definir um valor genérico para a o parâmetro ou até mesmo o retorno
// No caso por padrão usamos letras como T, J, K, O e por ai vai, mas você
// é livre para escolher

// Veja que no início da função precisamos usar o formato <T>, onde T é o tipo
// e pode ter 1 ou mais. No exemplo utilizamos 2
// Repare que assim podemos dizer que o parâmetro nome é do tipo T e notas do J
// Assim podemos receber parâmetros de tipos diferentes e nossa função lida com o que vier
fun <T, J> media(nome: T, vararg notas: J): Float {
    if (nome is String) {
        print("O $nome ")
    } else {
        print("O aluno ")
    }

    var soma = 0f
    for (nota in notas) {
        if (nota is Float) soma += nota
    }
    return soma / notas.size
}

fun main() {
    // Importante reparar que definimos na função o primeiro parâmetro do tipo único
    // e o segundo do tipo vararg. Isso acontece pois só pode existir 1 vararg por função
    // e sempre deverá ser o último parâmetro, poi o compilador não tem bola de cristal
    print("teve média ${media("Arty",1f, 2f, 3f, 4f, 5f)}")
}
