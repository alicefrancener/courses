package fundamentos

import fundamentos.pacoteA.simplesFuncao as funcaoSimples //renomear a funcao
import fundamentos.pacoteA.Coisa
import fundamentos.pacoteA.FaceMoeda.CARA
import fundamentos.pacoteB.* //importar tudo que foi definido no pacoteB

fun main(args: Array<String>) {
    kotlin.io.println(funcaoSimples("Ok")) //por padrão, tudo que está em kotlin.io é importado

    val coisa = Coisa("Bola")
    println(coisa.nome)

    println(CARA)

    println("Soma: ${soma(2,3)}, Subtração: ${subtracao(4, 6)}")
}