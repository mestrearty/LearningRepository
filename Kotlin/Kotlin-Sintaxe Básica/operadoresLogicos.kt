/**
 * You can edit, run, and share this code. 
 * play.kotlinlang.org 
 */

const val A = 10 
const val B = 5
fun main() {
    val numbers = listOf(1,2,3,4,5,6,8,9,0)
    var number = (1..34).random()
    
    println(A>B && A<B)
    println(A>B || A<B)
    println(A in numbers)
    println(number in numbers)
    println(A !in numbers)
    println(B in 1..20)
    
    
}