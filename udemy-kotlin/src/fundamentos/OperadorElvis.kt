package fundamentos

fun main(args: Array<String>) {
    val opcional: String? = null
    val obrigatoria: String = opcional ?: "Valor Padrão" //valor padrão, caso a variável seja nula

    println(obrigatoria)
}