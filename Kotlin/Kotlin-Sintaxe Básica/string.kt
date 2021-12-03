/**
 * You can edit, run, and share this code. 
 * play.kotlinlang.org 
 */

fun main() {
    val s = "josé toalha |"
   
    println(s[0])
    println(s.first())
    
    println(s[s.length-1])
    println(s.last())
   
    println("Seja bem vinde ${s.capitalize()}")
    println("Seja bem vinde $s")
    
    
    println("${s.capitalize()}")
    println("${s.toUpperCase()}")
    println("${s.decapitalize()}")
    
    println("${s.trimEnd()}")
    println("${s.trimStart()}")
    println("${s.trim()}")
    println("${s.replace('o','x')}")
    println("${s.toUpperCase()}")

    //vazio ou em branco
    val empty = ""
    val blank = "              "
    
    println(empty.length)
    println(blank.length)
    
    println(empty.isEmpty() && empty.isBlank())
    println(blank.isEmpty())
    println(blank.isBlank())
   }