/**
 * You can edit, run, and share this code. 
 * play.kotlinlang.org 
 */

fun main() {
    //for
    
    //step
    for( i in 0..4 step 2){
        println(i)
    }
    
    //until
    for( i in 0 until 3 ){
        println(i)
    }
    
    //downTo
    for( i in 3 downTo 0){
        println(i)
    }
    
    //in
    var text = "Banana"
    for( letter in text){
        print("$letter ")
    }
    
    }