# Herança

Sumário

- [Herança](#herança)
  - [Conceitos Básicos](#conceitos-básicos)
  - [Modificadores de Visibilidade](#modificadores-de-visibilidade)
  - [Sobrescrita \& Sobrecarga (Override \& Overload)](#sobrescrita--sobrecarga-override--overload)
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

## Sobrescrita & Sobrecarga (Override & Overload)

## Object e companion object

## Classes abstratas

## Interfaces

## Polimorfismo

## Classe anônima
