// Tipo Any denota que o parâmetro ou o retorno pode ser de qualquer tipo
fun meuTipo(value: Any) {
    println("Meu tipo é: ${value.javaClass.name}")
}

// Unit denota que uma função não tem retorno (void)
// Por padrão, toda vez que você não define um tipo de retorno a função é void
fun soFalo() {
    println("Só Falei")
}

//Nothing é utilizado para sinalizar métodos ainda não implemntados ou retornar excessões
fun save(){
    TODO("Alguém me implementa! Preciso salvar no CRUD")
} //esse TODO inclusive fica ai só para marcar um texto e não dar erro

fun main() {

    // Passando vários tipos diferentes para uma mesma função
    meuTipo(10)
    meuTipo(10f)
    meuTipo("10f")
    meuTipo(true)

    // Puxando uma função sem retorno
    soFalo()
}
  
