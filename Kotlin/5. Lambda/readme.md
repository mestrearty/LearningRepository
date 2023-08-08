# Lambda

Lambda é uma função anônima que pode ser passada como parâmetro de outra função. Em linguagens como JS/TS é também conhecida como callback

Estrutura:
```kotlin
fun executeSomething(lambda:()-> Unit){
    lambda() //executando a função
}

fun <nomeFunção>(<nomeFunçãoAnônima>: ()-> <TipoDoRetorno>){

}
```

[1.List.kt](./1.Lambda.kt) - [Play Kotlin](https://pl.kotl.in/ZByI2jJhz)