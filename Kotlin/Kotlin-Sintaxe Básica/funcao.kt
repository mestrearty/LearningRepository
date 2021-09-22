/**
 * You can edit, run, and share this code. 
 * play.kotlinlang.org 
 */

fun main() {
    fun getFullName(name:String, lastName:String):String{
       val fullname="$name $lastName"
        return fullname
   }
    println(getFullName("Pedro", "Henrique"))
    
     fun getFullNameShort(name:String, lastName:String):String{
       return "$name $lastName"
       
   }
    println(getFullNameShort("Pedro", "Henrique"))
    
      fun getFullNameUltraShort(name:String, lastName:String):String = "$name $lastName"
       
    println(getFullNameUltraShort("Pedro", "Henrique"))
    
    //high level function (tipo uma callback)
    fun calculate(n1:Int,n2:Int,operation:(Int,Int)->Int):Int{
        val result = operation(n1,n2)
        return result
    }
    
    fun sum(a1:Int,a2:Int)= a1.plus(a2)
    
    val x = calculate(12,4,:: sum)
    val y = calculate (12,4){a,b -> a*b}
    
    println("x: $x, y: $y")
    
    
   }