// É possível definir parâmetros opcionais quando você já instancia
// durante a construção da função

fun endereco(rua: String, cidade: String, numero: Int = 0) {
    println("Mora na rua $rua número $numero em $cidade")
}

fun main() {
    // na hora que você vai chamar pode optar por:
    // não passar o valor opcional
    endereco("Passos Selvagens", "Juiz de Fora")
    // ou passar
    endereco("Passos Selvagens", "Juiz de Fora", 295)

    // e também é possível passar fora da ordem, desde que você
    // declare qual parâmetro está recebendo cada um dos valores
    endereco(numero = 295, rua = "Passos Selvagens", cidade = "Juiz de Fora")
}
