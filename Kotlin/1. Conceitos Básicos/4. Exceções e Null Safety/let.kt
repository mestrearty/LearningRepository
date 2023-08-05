fun main() {
    var str: String? = null

    //com .let você basicamente tem um if que executa caso a variável não seja nula
    str?.let { println("Não sou nulo") }


    //mas é importante se atentar que dentro do escopo do .let{} sua variável passa a se chamar it
    str = "it"
    str?.let{
        println("Mas agora me chamo $it")
    }
}

