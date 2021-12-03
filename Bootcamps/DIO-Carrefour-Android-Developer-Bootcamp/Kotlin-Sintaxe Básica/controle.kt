/**
 * You can edit, run, and share this code. 
 * play.kotlinlang.org 
 */

fun main() {
    //função extensão
    fun Int.getStudentStatus(){
    println("nota $this")
    
    //switch case
    println(when(this){
        in 0..4 -> "Reprovado"
        in 5..7 -> "Mediano"
        in 8..9 -> "Bom"
        10 -> "Excelente"
        else -> "Indefinido"
    })
    
}
	val grade = (0..10).random()
	grade.getStudentStatus()


	//elvis operator    
    var t:Int
    var x:Int? = null
    var w: Int? = 10
    
    t = x?:w?: -1
    println(t)
    
    x?.getStudentStatus()//só chama se o valor n for nulo
  	w?.getStudentStatus()
 
}