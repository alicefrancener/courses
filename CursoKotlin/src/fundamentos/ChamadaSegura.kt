package fundamentos

fun main(args: Array<String>) {
    var a: Int? = null //? safe call operator; variável que pode ter valor nulo
    println(a?.dec())
}