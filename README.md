# learning-kotlin
Repositório de estudos da linguagem Kotlin

## Curso: [Fundamentos de Programação Moderna com Kotlin - Android](https://www.udemy.com/curso-kotlin-pt/)

### Fundamentos

#### As sentenças de código podem terminar ou não com ";"

```kotlin
fun main(args: Array<String>) {
  print("Primeiro")
  println(" programa!");
}
```

#### Comentários
```kotlin
/**
 * Kotlin suporta o KDoc
 *
 * Annotations:
 * @param args lista de parâmetros passados por linha de comando
 * @author alice
 */

fun main(args: Array<String>) {
    // Comentário de uma linha

    /*
    Comentário de múltiplas linhas
     */

    /*
    * Comentário de multiplas linhas
     */
}
```

#### Variáveis e Constantes

Existem duas palavras reservadas para declarar variáveis:
  - val - referência imutável (constante)
  - var - referência mutável (variável)

Variáveis (var):  
Kotlin é uma linguagem fortemente tipada, mas é possível não especificar o tipo
quando uma atribuição for feita na inicialização.
Nesse cenário dizemos que o tipo foi inferido.

```kotlin
var a: Int //definição do tipo
var b = 2 //tipo inferido pelo compilador
```

#### Erro de inferência
```kotlin
var a
var b = 2 

a = 10
```
Erro!  
Error:(4, 9) Kotlin: This variable must either have a type annotation or be initialized
