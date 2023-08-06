/** You can edit, run, and share this code. play.kotlinlang.org */

// Explicação do código no readme.md na pasta "/Herança"

class Matematica() {
  
    companion object {
        val PI = 3.1415
        fun inicializador(){
            println("Fui inicializado")
        }
        
        init {
            inicializador()
        }
    }
    
    object numerosIrracionais{
        val PI = 3.1415
    }
}

fun main() {
    println(Matematica.PI)
    println(Matematica.numerosIrracionais.PI)
    
    //chamando novamente para ver se ele exibe a mensagem do ("Fui inicializado")
	println(Matematica.PI)//não exibe
}
