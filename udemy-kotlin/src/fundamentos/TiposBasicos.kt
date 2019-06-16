package fundamentos

fun main(args: Array<String>) {
    // Tipos Numéricos Inteiros
    val num1: Byte = 127
    val num2: Short = 32767
    val num3: Int = 2147483647
    val num4: Long = 40L
    //Long.MAX_VALUE // Valor máximo

    //Tipos Numéricos Reais
    val num5: Float = 3.14F
    val num6: Double = 3.14

    //Tipo Caractere
    val char: Char = '?'

    //Tipo booleano
    val boolean: Boolean = true // ou false

    println(listOf(num1, num2, num3, num4, num5, num6, char, boolean))
    println(2 is Int)
    println(214758554848 is Long)
    println(1.0 is Double)

    //Os tipos básicos são objetos
    println(10.dec())
}