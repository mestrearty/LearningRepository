# Orientação a Objetos com Kotlin

Orientação a objetos é um paradgma para que possamos abstrair melhor o problema e agrupar as soluções em um formato mais próximo do que encontramos na vida rela.

Pense por exemplo em um computador. O comuptador é um objeto que é composto por vários outros objetos. Ou seja o objeto computador é formado pelo objeto placa mãe, placa de vídeo, ram e por ai vai. Esses hardwares por sua vez também tem objetos que os formam e suas características físicas. Sendo assim, na programação com orientação a objetos somos
capazes de representar os mesmos objetos em um código pela ótica em que os observamos, separando suas características (atributos) e seus comportamentos (métodos).

## Classes em Kotlin

Em kotlin dizemos que é uma classe com a palavra reservada que precede `class`. Além disso seguimos o padrão de que toda classe deve começar com a primeira letra maíuscula `Car`, `Store`, `Pokemon`.

```kotlin
class PessoaFisica{

}
```

Após definida a classe pode inclusive ser utilizada para tipagem de variável, ou seja, a variável passa a ser do tipo da classe. E quando passamos de fato para dentro da variável a classe estamos fazendo uma instanciação. Uma instância como a palavre sugere é que agora aquela variável é um objeto daquele tipo. Vejamos no código a baixo:

```kotlin
class Pokemon {

}

fun main (){
    var pikachu:Pokemon = Pokemon()
}

```

Quando dizemos `pikachu:Pokemon` significa que a variável `pikachu` é do tipo `Pokémon`, mas quando passamos `pikachu = new Pokemon()` nosso `Pikachu` agora é efetivamente um `Pokémon`. É como se ele ganhace vida e assumisse que é um `Pokemon` e pudesse começar a realizar comportamentos de `Pokémon` e também ter características que todo `Pokemon` tem. Se fizermos `var charmander:Pokemon = new Pokemon()` dizemos então que agora além de termos o `Pokemon` `Pikcachu` temos o `Pokémon` `charmander`, que são duas instâncias diferentes de objetos, ou seja, dois `Pokemon`

Mas e as características de um Pokémon?

```kotlin
class Pokemon(var nome:String, var tipo: String, var level:Int) {
fun atacar(){
    println("O $nome está usando um ataque do tipo $tipo!")
}

}

fun main (){
    var pikachu:Pokemon = Pokemon("Pikachu","Elétrico", 5)
    pikachu.atacar()
}

```

No código podemos ter o que chamamos de `Construtor`. Todos os parâmetros que temos definidos em `class Pokemon(var nome:String, var tipo: String, var level:Int)` nos informa que quando criamos uma instância da classe precisaremos informar. No nosso exemplo precisamos de um `nome, tipo e level`. Além disso, seus ações são as funções, e depois de instanciadas elas pode ser executadas. Ou eseja, quando dizemos `pikachu.atacar()` estamos acessando ao método (função) `atacar()` presente dentro da classe `Pokemon` que nosso `pikachu` é.

Também é possível acessar os atributos (variáveis) com o mesmo formato de classe.atributo -> `pikachu.nome`. Da não só para ler o valor quanto alterar.

Exmeplo do código para executar: [1. ExemploClasse.kt](./1.ExemploClasse.kt) ou direto do [Play Kotlin](https://pl.kotl.in/RVohWG9-k)

## Construtor secundário

Conforme foi comentado no tópico anterior, é possível declarar um construtor, ou seja, os parâmetros iniciais daquela classe que é obrigatório ser passado ao ser instânciado. Mas seria possível ter mais de um construtor? E porque fazer?

```kotlin

class Pokemon(val nome: String, var tipo: String, var level: Int) {
    var tipoSecundario: String? = null

    constructor(
            nome: String,
            tipo: String,
            level: Int,
            tipoSecundario: String
    ) : this(nome, tipo, level) {
        this.tipoSecundario = tipoSecundario
    }

    fun atacar() {
        if (this.tipoSecundario == null) {
            println("O $nome está usando um ataque do tipo $tipo!")
        } else {
            println("O $nome está usando um ataque do tipo ${this.tipoSecundario}!")
        }
    }
}
```

Nesse fragment ode código podemos fez que temos 2 construtores, o primeiro que já é intrínseco com os parâmetros `Pokemon(val nome: String, var tipo: String, var level: Int)` no início da declaração, e um segundo com um parâmetro a mais: `constructor (nome: String,tipo: String, level: Int, tipoSecundario: String)`

Nesse formato o kotlin nos permite ter múltiplos construtores que possibilitarão a classe lidar de forma diferente na criação do seu objeto de acordo com a necessidade da mesma. Um recurso útil, mas que deve ser utilizado com cuidado.

Vejamos novamente esse trexo de código:

```kotlin
    constructor(
            nome: String,
            tipo: String,
            level: Int,
            tipoSecundario: String
    ) : this(nome, tipo, level) {
        this.tipoSecundario = tipoSecundario
    }
```

Repare que quando criamos um construtor secundário precisamos repetir os mesmos atributos do construtor inicial e os carregamos, e posterior mente inserimos um novo parâmetro. Assim é possível que você tenha diversos construtores com parâmetros distintos e inclusive alterar os tipos dos parâmetros.

Para acecssar o código exemplo que faz esta instânciação e utiliza de um construtor secundário acesse [2. ConstrutorSecundaro](./2.ConstrutorSecundaro.kt) ou direto do [Play Kotlin](https://pl.kotl.in/7_6hZN2LS)

## Init

É possível garantir que algo seja sempre executado assim que a classe é instanciada com o bloco `init{}`. Quando definida dentro da classe todos os `init`s são chamados e executados em ordem.

Você pode utilizar para aplicar lógicas iniciais dentro da sua classe, como por exemplo validação de campos ou processamento baseado nos valores passados no construtor.

Veja o exemplo de código a baixo:

```kotlin
class Animal(var especie: String) {

    var fala: String = "Esse animal não fala."
    init {
        if (especie == "cachorro") {
            fala = "au au"
        } else if (especie == "gato") {
            fala = "miaw"
        }
    }
    init {
        println("Seu animal faz $fala")
    }
}

fun main() {
    Animal("cachorro")
}

```

Veja que em nosso exemplo apenas para fins de demonstração, usamos um init para descobrir qual a `fala` que o animal passado deveria realizar, e posteriormente utilizamos um segundo `init` para executa-la.

[3. Init](./3.Init.kt) ou direto do [Play Kotlin](https://pl.kotl.in/v297CQhJp)

## Encapsulamento com Get, Set e Field

Antes de falar do Get, Set e Field é preciso relembrar do conceito de Público e Privado.

Dentro das classes para que tenhamos proteção de acesso a variáveis e métodos podemos de finir que aquele método ou atributo seja "Privado" (`private`). Quando dizemos que algo é privado, ninguém fora da classe pode acessar ou alterar o método ou o atributo. Quando definimos como "Público"(`public`) garantimos que todos de fora da classe possam ver e chamar.

De padrão no kotlin todo atributo por padrão vem como Privado e todo método como público, o que pode gerar uma dúvida do porque é possível alterar diretamente o atributo mesmo que ele seja inicialmente Privado.

Acontece que o Encapsulamento é algo comum dentro da programação, e o Kotlin tenta facilitar a sua vida. Vejamos um exemplo de código em Typescript:

```typescript
default export class Pessoa {
    private nome: String

    getNome(){
        return this.nome
    }

    setNome(nome){
        if(nome.lenght < 30)
            this.nome=nome
    }

}
```

Isso é o que chamamos de encapsulamento. Nosso atributo `nome` está protegido para que não possa ser alterado diretamente. Isso acontece para evitar que em determinado momento do nosso código tenhamos alterações em seus valores sem passar por alguma regra de validação. No exemplo em questão o nome só será alterado caso seja menor do que 30 caracteres. Veja que apesar de simples, nós já impomos condições para o armazenamento do código.

Acontece que o Kotlin faz isso para nós de forma automática e escondida. Como por padrão todo atributo é definido como privado, quando você faz um `pessoa.nome` ou `pessoa.nome = "Novo Nome"` por de baixo dos panos ele já critou um método set e get para você e os chamou da forma mais crú possível, algo como:

````javascript
  private nome: String

    getNome(){
        return this.nome
    }

    setNome(nome){
        this.nome=nome
    }
    ```
````

Veja que não há tratamentos e validacões, mas você ao menos não tem que digitar um monte de código para cada atributo que você criar.

Ta, mas e se quiser editar o método get ou set?

Bem, você pode fazer isso é é bem tranquilo, vamos para um exemplo de código para ver como funciona:

```kotlin
class Pessoa() {
    var nome: String = ""
        get() {
            println("Acesso get")
            return field
        }
        set(value) {
            println("Acesso set")
            if (field.length < 30) {
                field = value
            }
        }
}

fun main()
{
    var pessoa = Pessoa()
    pessoa.nome = "Arty"
    println("Olá ${pessoa.nome}")
}
```

Veja que a baixo do atributo `nome` instancio o método `get` e `set` que ficam diretamente associados ao `nome`. Após inserir minha regra de negócio em casa um, dentro da `main()` altero os atributos diretamente como se fosse sem um método, mas na verdade ele está sim passando pela nossa regra de negócio. Ele faz isso para facilitar a sua vida e ter que digitar menos código. Curtiu?


[4. Set-Get-Fiel.kt](./4.Set-Get-Fiel.kt) ou direto do [Play Kotlin](https://pl.kotl.in/UfMum_nOv)

## Enum - Enumerar

Classes do tipo `Enum` permite que você enumere todos os possíveis falor de um objeto daquela classe. Por exemplo, sabemos que um Pokémon pode ser to tipo de Fogo, Água e Grama, mas não pode ser do tipo Plástico. Sendo assim podemos criar uma classe enum de tipo, onde listamos todos os tipos possíveis de pokémon.

```kotlin
enum class Tipo() {
    fogo,agua,grama,eletrico,fada,metal
}

fun main()
{
    println(Tipo.fogo)
}

```
Veja que em nesse código a cima listamos os tipos que um pokémon pode assumir, e para chamar fazemos tal como fossemos chamar um atributo, mas só é possível chamar os valores definidos na classe. Da hora né? Com isso temos muitos menos erros e sempre podemos garantir que algo esteja coberto pelas possobilidades dais quais limitamos. Resumindo: Menos Ifs.


[5.Set-Get-Fiel.kt](./5.Enum.kt) ou direto do [Play Kotlin](https://pl.kotl.in/dKU7Gl-mP)
