# Introdução a JavaScript - Udacity

Notas de estudos do curso [Intro to Javascript](https://www.udacity.com/course/intro-to-javascript--ud803) da Udacity.

## Aulas

1. [O que é JavaScript](#aula-1-o-que-é-javascript)
2. [Tipos de dados e variáveis](#aula-2-tipos-de-dados-e-variáveis)
3. [Condicionais](#aula-3-condicionais)
4. [Loops](#aula-4-loops)
5. Funções
6. Arrays
7. Objetos

## Aula 1: O que é JavaScript

HTML e CSS são linguagens de marcação. Linguagens de marcação são usadas para descrever e definir elementos dentro de um documento.
JavaScript é uma linguagem de programação. Linguagens de programação são usadas para comunicar instruções a uma máquina. Elas podem ser usadas para controlar o comportamento de uma máquina e expressar algoritmos.

Propriedades

* case-sensitive
* dynamically typed language
* instructions are called statements and are separated by semicolons (;).

`console.log()` é usado para exibir conteúdo para o console do JavaScript

## Aula 2: Tipos de dados e variáveis

### JavaScript Data Types

* numbers
* strings
* booleans
* null
* undefined

### Operadores

| Operador | Significado
|-|-
| < | menor que
| > | maior que
| <= | menor que ou igual a
| >= | maior que ou igual a
| == | igual a
| != | diferente de

### Comentários

```js
// uma linha de comentário
```

```js
/*
 * Bloco de comentário 
 * em JavaScript
 */
```

### Strings

É correto utilizar aspas duplas " ou simples ' com strings, desde que você mantenha a consistência.

### Concatenação de strings

```js
"Hello," + " World"
```

```js
"Hello," + 5*10
```

> *Returns: "Hello50"*  

Transforma o número (50) em uma string **(coerção de tipo implícita)**.

### Variáveis

Creating a Variable in JavaScript: *var variableName = value*

```js
var greeting = "Hello";
```

Convenções de nomenclatura para variávels: camelCase  
[Guia de Estilo JavaScript do Google](https://google.github.io/styleguide/jsguide.html)

### Índice de string

Caracters em uma string são indexados começando pelo 0

```js
"James"[0];
```

> *Returns: "J"*

```js
var name = "James";
name[0];
```

> *Returns: "J"*

De maneira alternativa, pode-se usar o método `charAt()` para acessar caracteres individuais. Por exemplo, `name.charAt(0)` para retornar a letra acima.

### Fazendo o "escape" de strings

Em JavaScript, você utiliza a barra invertida para fazer o escape de outros caracteres.

Fazer o escape um caractere significa dizer ao JavaScript para ignorar o significado especial do caractere e somente utilizar seu valor literal. Isso é útil para caracteres que possuem significados especiais, como aspas "…"

```js
"The man whispered, \"please speak to me.\""
```

> *Returns: The man whispered, "please speak to me."*

### Caracteres especiais

Aspas não são os únicos caracteres especiais que precisam de escape. Uma pequena amostra de alguns caracteres especiais comumente utilizados em JavaScript.

| Código | Caractere 
|--------|-----------
| \\\    |  \ (barra invertida)
| \\"    |  " (aspas duplas)
| \\'    |  ' (aspas simples)
| \\n    |  nova linha
| \\t    |  tab

### Comparando strings

Ao se comparar strings a identificação de letras minúsculas e maiúsculas importa

```js
"Yes" == "yes"
```

> *Returns: false*

### Booleanos

#### true | false

### null, undefined and NaN

`null` refere-se ao valor de nada (value of nothing)

`undefined` refere-se à ausência de valor (absence of value) - didn't assign a value

```js
var x = null;
var y; // undefined
```

`NaN` significa "Not-a-Number" e é constantemente retornado indicando um erro com operações numéricas.

```js
// calcular a raiz quadrada de um número negativo retornará NaN
Math.sqrt(-10)

// tentar dividir uma string por 5 retornará NaN
"hello"/5
```

### Igualdade

```js
"1" == 1
0 == false
```

> *Returns: true*

#### Coerção de tipo implícita

JavaScript é uma linguagem fracamente tipada. Basicamente, isso significa que, quando você está escrevendo código JavaScript, não precisa especificar tipos de dados. Em vez disso, quando seu código é interpretado pelo mecanismo do JavaScript, ele automaticamente será convertido ao tipo de dado "apropriado". Isso é chamado de *coerção de tipo implícita*.

Uma linguagem fortemente tipada é uma linguagem de programação mais propícia a gerar erros se os dados não casarem com um certo tipo esperado. Devido ao fato de o JavaScript ser fracamente tipado, não há necessidade de você especificar tipos de dados; no entanto, isso pode levar a erros que são difíceis de diagnosticar, devido à coerção de tipo implícita.

Exemplo de código de uma linguagem de programação fortemente tipada:

```c
int count = 1;
string name = "Julia";
double num = 1.2932;
float price = 2.99;
```

Código equivalente em JavaScript

```js
var count = 1; 
var name = "Julia";
var num = 1.2932;
var price = 2.99;
```

Quando você utiliza os operadores `==` ou `!=`, o JavaScript primeiro converte cada valor para o mesmo tipo (se eles já não são do mesmo tipo); por isso é chamado de "coerção de tipo"! Isso é frequentemente o comportamento que você não deseja e, na verdade, é considerada uma **má prática** utilizar os operadores `==` e `!=` ao se comparar valores para igualdade.

```js
"1" == true
```

> *Returns: true*

#### Igualdade estrita

Em vez disso, em JavaScript, é melhor utilizar igualdade estrita para ver se números, strings ou booleanos, etc. são idênticos em tipo e valor, sem realizar a conversão de tipos primeiramente. Para fazer uma comparação estrita, simplesmente adicione mais um símbolo de igual `=` ao final dos operadores `==` e `!=`.

```js
"1" === 1
```

> *Returns: false*

## Aula 3: Condicionais

### Declarações if...else

Declarações if...else permitem que você execute certos pedaços de código com base em um condição ou conjunto de instruções a ser cumprido.

```js
if (/* se esta expressão for verdadeira */) {
  // execute este código
} else {
  // execute este código
}
```

### Declaração else if

Em JavaScript, você pode representar esta verificação secundária usando uma declaração if extra, chamada de declaração else if.

```js
var weather = "sunny";

if (weather === "snow") {
  console.log("Traga um casaco.");
} else if (weather === "rain") {
  console.log("Traga uma jaqueta de chuva.");
} else {
  console.log("Vista o que você já está vestindo.");
}
```

### Operadores lógicos

Operadores lógicos podem ser usados em conjunto com valores booleanos (`verdadeiro` e `falso`) para criar expressões lógicas complexas.

Combinando dois valores booleanos juntos a um operador lógico, você cria uma expressão lógica que retorna um outro valor booleano. Aqui está uma tabela descrevendo os diferentes operadores lógicos:

| Operador | Significado | Exemplo | Como funciona
|-|-|-|-
| `&&` | lógico E | `valor1 && valor2` | Retorna `verdadeiro` se ambos o `valor1` e o `valor2` forem avaliados como `verdadeiro`
| `||` | lógico OU | `valor1 || valor2` | Retorna `verdadeiro` se `valor1` ou `valor2` (ou mesmo ambos!) forem avaliados como `verdadeiro`
| `!` | lógico NÂO | `!valor1` | Retorna o oposto do `valor1`. Se `valor1` é `verdadeiro`, então `!valor1` é `falso`

### Tabelas da verdade

Tabelas da verdade são uma forma de representar todas as combinações possíveis de inputs para uma expressão lógica.

#### && (AND)

A |	B	| A && B
-|-|-
verdadeiro | verdadeiro | verdadeiro
verdadeiro | falso | falso
falso | verdadeiro | falso
falso | falso | falso

#### || (OR)

A | B	| A \|\| B
-|-|-
verdadeiro | verdadeiro | verdadeiro
verdadeiro | falso | verdadeiro
falso | verdadeiro | verdadeiro
falso | falso | falso

Em ambas as tabelas, existem cenários específicos onde, independentemente do valor de `B`, o valor de `A` é suficiente para satisfazer a condição.

Por exemplo, se você olhar `A` E `B`, se `A` é falso, então, independentemente do valor de `B`, a expressão total sempre será avaliada como falso, porque ambos `A` _e_ `B` devem ser verdadeiros, de forma que a expressão inteira seja avaliada como verdadeira.

Esse comportamento é chamado de **curto-circuito** porque ele descreve o evento quando argumentos mais à direita da expressão lógica não são considerados, pois o primeiro argumento já satisfaz a condição.

### Valores falsos

Um valor é *falso* se ele converte para `false` quando avaliado em um contexto booleano. Por exemplo, uma string vazia `""` é falsa porque `""` é avaliada como `false`.

Valores falsos em JavaScript:

1. o valor booleano `false`
2. o tipo `null`
3. o tipo `undefined`
4. o número `0`
5. a string vazia `""`
6. o valor `NaN`

### Valores verdadeiros

Um valor é *verdadeiro* se ele converte para `true` quando avaliado em um contexto booleano. Por exemplo, o número `1` é verdadeiro porque `1` é avaliado como `true`.

Exemplos de valores verdadeiros

```js
42
"pizza"
"0"
"null"
"undefined"
{}
[]
```

Essencialmente, se não estiver na lista dos valores falsos, então ele é verdadeiro!

### Operador ternário

O operador ternário provê a você uma alternativa para escrever declarações if...else robustas.


```js
condicional ? (se condicional é verdadeiro) : (se condicional é falso)
```

Para usar o operador ternário, primeiro forneça uma declaração condicional do lado esquerdo de `?`. Então, entre o `?` e `:`, escreva o código que seria executado se a condição fosse verdadeira e, ao lado direito de `:`, escreva o código que seria executado se a condição fosse falsa.

```js
var isGoing = true;
var color = isGoing ? "green" : "red";
```

### Switch

Uma declaração switch é uma outra forma de encadear múltiplas declarações else if que são **baseadas no mesmo valor sem usar declarações condicionais**. Em vez disso, você apenas troca o pedaço de código que é executado com base em um valor.

```js
var option = 3;

switch (option) {
  case 1:
    console.log("Você selecionou a opção  1.");
  case 2:
    console.log("Você selecionou a opção  2.");
  case 3:
    console.log("Você selecionou a opção  3.");
  case 4:
    console.log("Você selecionou a opção  4.");
  case 5:
    console.log("Você selecionou a opção  5.");
  case 6:
    console.log("Você selecionou a opção  6.");
}
```

> *Returns:*  
> Você selecionou a opção  3.  
> Você selecionou a opção  4.  
> Você selecionou a opção  5.  
> Você selecionou a opção  6.  

Quando a declaração switch primeiro avalia, ela procura pela primeira cláusula `case` onde a expressão é avaliada para o mesmo valor obtido como resultado da expressão passada na declaração switch. Então, ela transfere o controle para tal cláusula `case`, executando os comandos associados. Mas ele não previne os casos abaixo de serem executados. Esse comportamento se chama **falling through**.

### Break

A declaração break pode ser usada para terminar uma declaração switch e transferir o controle do código para o código que segue a declaração terminada. Adicionando um `break` em cada cláusula case, você conserta o problema da declaração switch cair entre outras cláusulas case.

```js
var option = 3;

switch (option) {
  case 1:
    console.log("Você selecionou a opção 1.");
    break;
  case 2:
    console.log("Você selecionou a opção 2.");
    break;
  case 3:
    console.log("Você selecionou a opção 3.");
    break;
  case 4:
    console.log("Você selecionou a opção 4.");
    break;
  case 5:
    console.log("Você selecionou a opção 5.");
    break;
  case 6:
    console.log("Você selecionou a opção 6.");
    break; // tecnicamente, não necessário
}
```

> *Returns:* Você selecionou a opção  3.  

## Aula 4: Loops
