
fun main(){
    var s: String? = null

    println(s?.length)
    println("oi")
}

//O Kotlin é null safety, mas o que é isso?
//Quando temos probelmas de variáveis nulas (vazias) é comum
//a linguagem interromper a execução do programa, ou seja
//seu app vai fechar :D

//Agora, no kotlin é possível continuar a execução e você lidar com a situação
//Ou seja, não é o fim do mundo

//Contudo, você precisa utilizar o modificador ? que sinalizará
//que deve continuar a execução que nos vamos trabalhar com o nulo
//Caso queira que de fato assuma o null pointer exception, talvez para utilizar
//um throw back para tratar erros ou devolver mensagens de erro para requisitantes da API
//você pode utilizar o modificado "!!". variavel!!