/**
 * You can edit, run, and share this code. 
 * play.kotlinlang.org 
 */

const val A = 10 //estático
const val B = 5
fun main() {
    var r = A+B 
    
    println(A.plus(B))
    println(A.minus(B))
    println(A.times(B))
    println(A.div(B))
    println(A.mod(B))
    
    println(r)
    r -=B
    println(r)
}