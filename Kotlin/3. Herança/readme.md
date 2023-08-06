# Herança

Sumário

- [Herança](#herança)
  - [Conceitos Básicos](#conceitos-básicos)
  - [Modificadores de Visibilidade](#modificadores-de-visibilidade)
  - [Sobrescrita (Override)](#sobrescrita-override)
  - [Sobrecarga (Overload)](#sobrecarga-overload)
  - [Object e companion object](#object-e-companion-object)
  - [Classes abstratas](#classes-abstratas)
  - [Interfaces](#interfaces)
  - [Polimorfismo](#polimorfismo)
  - [Classe anônima](#classe-anônima)

---

## Conceitos Básicos

Herança é um conceitos comum em orientação objetos onde um filho herda as classes e métodos da classe pai. Em resumo, um filho pode fazer tudo que o pai faz e também coisas novas. Vejamos um código:

```kotlin
open class Eletronico(var marca: String) {
    fun ligar() {
        println("Ligando")
    }
    fun desligar() {
        println("Desligando")
    }
}

class Computador(marca: String) : Eletronico(marca) {
    fun processar() {
        println("Estou processando algo...")
    }
}

fun main() {
    var computador: Computador = Computador("Dell")

    computador.ligar()
    computador.processar()
    computador.desligar()
}
```

Repare bem que `Computador` é um `Eletrônico`, ou seja, `Computador` é uma classe filha do pai `Eletrônico`. Por isso, computador além de ter uma marca, ele é capaz de ligar e desligar.

Como computador também é independente, ou seja, ele não é o pai dele, assim como você ai não é o seu pai (assim espero) computador pode fazer suas própria coisas, como `Processar` algo.

Mas atenção, como podemos ver em Kotlin é preciso sinalizar que uma classe pode ser extentida utilizando "open". Além disso, seguimos a seguinte estrutura para extensão:

```kotlin
class NomeClasse(parametro: Tipo):NomeClassePai(parametro){}
```
https://pl.kotl.in/eRfm2ocpp

## Modificadores de Visibilidade
As classes possuem modificadores que definem quem poderão as ver ou ver seus métodos e atributos. Esses modificadores são bem famosos em diversas linguagens, e eles são `Public, Protected e Private`.

Public -> Todos e de qualquer lugar podem ver e acessar.
Protected -> Apenas a própria classe e seus filhos podem acessar, mas deve ser feito internamente (instânciação da classe não acessa).
Private -> Apenas a própria classe pode acessar e deve ser feito de forma interna (instânciação da classe  não acessa). Os vilhos nem veem.

Vamos explicar melhor depois de ver esse código:
```kotlin
open class Eletronico(var marca: String) {
    protected var estado: String = "desligado"

    private fun ativarCorrente() {
        println("Recebendo energia")
    }

    fun ligar() {
        ativarCorrente()
        println("Ligando")
    }
    fun desligar() {
        estado = "desligado"
        println("Desligando")
    }
}

class Computador(marca: String) : Eletronico(marca) {
    fun processar() {
        estado = "ocupado"
        println("Estou ${this.estado} processando algo...")
        //ativarcorrente() -> não pode ser chamado por que é privado
    }
}

fun main() {
    var computador: Computador = Computador("Dell")

    computador.ligar()
    computador.processar()
    computador.desligar()
    //computador.estado -> não pode ser chamado pois é protegido
    //computador.ativarcorrente() -> não pode ser chamado por que é privado
}
```

Por padrão classes e seus métodos são sempre Públicos, mas atributos privados. Vejamos que agora temos um atributo `protected`, no caso `estado` que define o estado da nossa aplicação. Veja que a classe filha `computador` consegue alterar seu valor dentro do método `processar`, mas não consegue chamar dentro da `main()`.

Note também que `computador` não consegue em momento algum chamar o método `ativarcorrente()`. Por ser privado, apenas a própria passe pai consegue a utilizar, e deve ser inclusive dentro da própria classse. 

https://pl.kotl.in/KMG1OMokZ

## Sobrescrita (Override)
Em algum momento a classe filha pode precisar realizar um método que herda do seu pai, mas com alguma diferença. É importante então que o filho seja capaz de fazer do seu jeito, mas sem quebrar a forma que herdou de seu pai. Para isso utilizamos o "Override", ou "Sobrescrita".

Pense em um cenário em que a classe pai `Eletronico` possua o método `ligar() `e que a classe filha `Computador` herda esse método, mas toda vez que chamar o `ligar()` ela precise também passar a energia para os seus componentes.

Poderiámos criar um método exclusivo para o `Computador` e fazer um `ligarComputador()`, mas ai `Computador` teria 2 formas de ligar (`ligar()` e `ligarComputador()`), o que seria um problemão, pois como advinhar qual o melhor método para ligar um `Computador`? E como acessar métodos eatributos privados que só o pai `Eletronico` tem acesso ao `ligar()`?

Por isso fazemos a sobrecarga, onde vamos editar o método `ligar()` para que apenas este exista no `Computador`. 

Então pensamos no seguinte comportamento: Um `Computador` ao `ligar()` igual ao seu paz já faz e deverá após `ligar()` pegar a energia e distribuir a energia aos demais componentes internos (`distribuirEnergia()`).

```kotlin
open class Eletronico(var marca: String) {
    private fun ativarCorrente() {
        println("Recebendo energia")
    }

    open fun ligar() { // sinalizando com "open" que ela é aberta a sobrescrita
        ativarCorrente()
        println("Ligando")
    }
    fun desligar() {
        println("Desligando")
    }
}

class Computador(marca: String) : Eletronico(marca) {
    fun distribuirEnergia() {
        println("Distribuindo energia para os componentes")
    }

    // sobrescrevendo um método com "override"
    override fun ligar() {
        super.ligar()//chamo o método ligar que existe dentro do pai com o "super."
        distribuirEnergia()
    }

    fun processar() {
        println("Estou processando algo...")
    }
}
```

No código a cima podemos perceber que nosso computador sobrescere o método `ligar()` com o prefixo `override` e o mesmo nome da função pai: `override fun ligar()`. Dentro do método chamamos o método `ligar` do pai `Eletronico` com um `super.` (`super.ligar()`). Na sequência então chamamos nosso método reponsável por distribuir o resto da energia para os componentes da máquina.

Vale ressaltar que para podermos sobrescrever um método precisamos inserir o prefixo `open` na função. Caso não o façamos, o método por padrão estará protegido para modificações. Isso é útil em nível de segurança. Já pensou em um sistema de bancário pudermos alterar métodos que aplicam juros sobre esmpréstimos para zero? Seria o crime!


https://pl.kotl.in/9rNIjh5Q0

## Sobrecarga (Overload)
Por mais diferente que possa ser, no kotlin é possível que tenhamos 2 ou mais funções com o mesmo nome, mas como e por que isso é possível?

Pense no cenário em que queremos ligar o led dos componentes do nosso computador. Temos 3 formas de ligar: todos de uma vez, ou ligar apenas um especificado, ou ligar escolhendo a intencidade do brilho.

Sendo assim podemos ter a princípio 3 métodos, um `ligarLed()` que liga todos, e outro `ligarLed(componente:String)` que liga o led de um componente específico, e `ligarLed(brilho:Int)`

```kotlin
class Computador() {
    fun ligarLed() {
        println("Ligando o led de todos os componentes")
    }

    fun ligarLed(componente: String) {
        println("Ligando o led da $componente")
    }

    fun ligarLed(brilho: Int) {
        println("Ligando o led de todos os componentes em $brilho%")
    }
}

fun main() {
    var computador: Computador = Computador()

    computador.ligarLed()
    computador.ligarLed("placa mãe")
    computador.ligarLed(70)
}

```

Perceba que no código temos 3 métodos `ligarLed()` exatamente com o mesmo nome, mas como recebem parâmetros diferentes, o compilador entende que não são a mesma coisa, e assim na hora de ser utilizada, como todas realizam a mesma ação mas comportamentos diferentes, você pode chamar a que melhor se adéqua ou o próprio método será chamado de acordo com o parâmetro passado. 

https://pl.kotl.in/oVs8cX5CW
## Object e companion object

Métodos e atributos estáticos são capazes de serem acessados de uma classe sem que eles sejam instânciados.

Dentro do Kotlin é possível definir métodos e funções estáticas, mas de uma forma peculiar, com o `companion objetct`. Veja um simples exemplo a baixo.

``` kotlin
class Matematica() {
  
    companion object {
        val PI = 3.1415
    }
}

fun main() {
  
    println(Matematica.PI)

}
```

Reparem que diferente do que estamos acostumados, eu não precisei instanciar nossa classe `Matematica` em uma variável e diretamente acessamos seus valores tal qual acessamos um `Objeto`.

Existe também uma variação chamada `Object`. Ela por sua vez precisa ter um nome `Object Nome`, e pode ter mais de uma dentro da mesma classe, diferente da `companion object` que só permite 1 por classe.

Para acessa também é necessário utilizar do nome. Veja o exemplo a baixo


``` kotlin
class Matematica() {
  
    object numerosIrracionais{
        val PI = 3.1415
    }
}

fun main() {
  
    println(Matematica.numerosIrracionais.PI)

}
```

É possível inicializar um objeto com `init`, mas ele executará a inicialização(`init{}`)` apenas na primeira vez em que for chamado.

```kotlin
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
}

fun main() {
    println(Matematica.PI)
    
    //chamando novamente para ver se ele exibe a mensagem do ("Fui inicializado")
	println(Matematica.PI)//não exibe
}

```
https://pl.kotl.in/EFCiQzs7g

## Classes abstratas

## Interfaces

## Polimorfismo

## Classe anônima