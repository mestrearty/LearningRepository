
fun main(){
    var s: String? = null

    try {
        println(s!!.length)
        println("oi")
    
    }catch(e:NullPointerException){
        println("Variável Nula")
    }catch(e:ArithmeticException){
        println("Não existe só 1 tipo de Exceção, tem várias e eu sou uma delas")
    }
    catch(e:Exception){
        println("Eu rodo caso de um erro e ninguém tiver esperando por mim")
        println("Mas me use só no final em? Se não eu entro antes dos meus irmãos")
    }
    finally{
        println("Se falhar ou não eu sou executado de toda forma!")
    }

    println("Rodei mesmo dando erro viu?")
}

//É possível circundar erros com try catch
//Isso é feito para garantir que não se tenha problemas maiores
// e até responder a API que há um problema específico e que ela precisa 
//nos dar um retorno melhor ou específico.
//Sendo assim, coloque seu código que você sabe que pode dar algum problema dentro do try{}
//e coloque no catch(){} o tipo de erro que ele quer pegar
//e dentro dos {} como ele vai lidar com esse erro sem finalizar o programa

//o código dentro do finally sempre será executado independente do que aconteça
//é útil para encerrar processos e conexões