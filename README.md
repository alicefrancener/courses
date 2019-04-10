# Introdução a JavaScript - Udacity

Notas de estudos do curso [Intro to Javascript](https://www.udacity.com/course/intro-to-javascript--ud803) da Udacity.

## Aulas

1. [O que é JavaScript](#aula-1-o-que-é-javascript)
2. [Tipos de dados e variáveis](#aula-2-tipos-de-dados-e-variáveis)
3. [Condicionais](#aula-3-condicionais)
4. [Loops](#aula-4-loops)
5. [Funções](#aula-5-funções)
6. [Arrays](#aula-6-arrays)
7. [Objetos](#aula-7-objetos)

***

## Aula 1: O que é JavaScript

HTML e CSS são linguagens de marcação. Linguagens de marcação são usadas para descrever e definir elementos dentro de um documento.
JavaScript é uma linguagem de programação. Linguagens de programação são usadas para comunicar instruções a uma máquina. Elas podem ser usadas para controlar o comportamento de uma máquina e expressar algoritmos.

Propriedades

* case-sensitive
* dynamically typed language
* instructions are called statements and are separated by semicolons (;).

`console.log()` é usado para exibir conteúdo no console

***

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

***

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
| `\|\|` | lógico OU | `valor1 \|\| valor2` | Retorna `verdadeiro` se `valor1` ou `valor2` (ou mesmo ambos!) forem avaliados como `verdadeiro`
| `!` | lógico NÂO | `!valor1` | Retorna o oposto do `valor1`. Se `valor1` é `verdadeiro`, então `!valor1` é `falso`

### Tabelas verdade

Tabelas verdade são uma forma de representar todas as combinações possíveis de inputs para uma expressão lógica.

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

***

## Aula 4: Loops

As três principais informações que qualquer loop deve conter são:

1. **Quando começar:** o código que dá início ao loop — definindo o valor inicial de uma variável por exemplo.
2. **Quando parar:** a condição lógica para testar se o loop deve continuar.
3. **Como ir para o próximo item:** a etapa de incremento ou decremento

### Loop while

```js
var start = 0; // quando começar
while (start < 10) { // quando parar
  console.log(start);
  start = start + 2; // como ir para o próximo item
}
```

### Loop for

```js
for (var i = 0; i < 6; i = i + 1) {
  console.log("Printing out i = " + i);
}
```

### Incremento e decremento

```js
x++ or ++x // same as x = x + 1
x-- or --x // same as x = x - 1
x += 3 // same as x = x + 3
x -= 6 // same as x = x - 6
x *= 2 // same as x = x * 2
x /= 5 // same as x = x / 5
```

***

## Aula 5: Funções

Funções permitem o empacotamento de linhas de código que você pode utilizar (e constantemente reutilizar) em seus programas.

### Declarando funções

* Parâmetro: funções podem ou não conter parâmetros, que são separados por vírgulas
* `return`: funções podem ou não conter o comando `return`. Se não tiver o comando, o console retornará `undefined`. `undefined` é o valor padrão de retorno do console quando nada está explicitamente sendo retornado com o uso da palavra-chave especial `return`.

```js
//função com dois parâmetros
function doubleGreeting(name, otherName) {
  // código para cumprimentar duas pessoas!
}
```

```js
//função sem parâmetro que retornará undefined quando invocada
function sayHello() {
  var message = "Hello!";
  console.log(message);
}

sayHello();
```

> *Returns:*  
> "Hello!"  
> `undefined`

Agora, para que sua função faça alguma coisa, você deve **invocar** ou **chamar** a função utilizando seu nome, seguido de parênteses, com os argumentos que são passados a ela.

### Parâmetros x argumentos

Em uma primeira abordagem, pode ser um pouco difícil saber quando algo é um parâmetro ou um argumento. A diferença principal está em onde eles aparecem no código. Um **parâmetro** sempre será um **nome de uma variável**, e ele aparece na **declaração da função**. Por outro lado, um **argumento** sempre será um **valor** (ou seja, qualquer um dos tipos de dados do JavaScript - do tipo number, string, boolean, etc.) e sempre aparecerá no código quando a **função é chamada ou invocada**.

```js
// x e y são parâmetros nesta declaração de função
function add(x, y) {
  // corpo da função
  var sum = x + y;
  return sum; // comando return
}

// 1 e 2 são passados para a função como argumentos
var sum = add(1, 2); // invocando a função
```

### `return` x `log`

* `console.log()`: use to **print** a valur to the JavaScript console  
* `return`: use to **stop** execution of a function and **return** a value back to the caller

### Escopo

* **global scope:** identifiers can be acessed everywhere within ypur program
* **function scope:** identifiers can be acessed everywhere inside the function it was defined in

#### Conflito

Abaixo, a variável global `bookTitle`tem sem valor reatribuído (reassigned) para o valor contido dentro da função. 

```js
var bookTitle = "Le Petit Prince";
console.log(bookTitle);

function displayBookEnglish(){
  bookTitle = "The Little Prince";
  console.log(bookTitle);
}

displayBookEnglish();
console.log(bookTitle);
```

> *Returns:*  
> "Le Petit Prince"  
> "The Little Prince"  
> "The Little Prince"

Para evitar isso, é preciso declarar uma nova variável dentro da função:

```js
var bookTitle = "Le Petit Prince";
console.log(bookTitle);

function displayBookEnglish(){
  var bookTitle = "The Little Prince"; //nova variável
  console.log(bookTitle);
}

displayBookEnglish();
console.log(bookTitle);
```

> *Returns:*  
> "Le Petit Prince"  
> "The Little Prince"  
> "Le Petit Prince"

#### Resumo escopo

* Se um indentificador é declarado em escopo global, ele estará disponível em qualquer lugar.
* Se um identificador é declarado em um escopo de função, ele estará disponível na função em que foi declarado (mesmo em funções declaradas dentro de outra função).
* Ao tentar acessar um identificador, o mecanismo do JavaScript primeiramente olhará a função atual. Se ele não achar nada, continuará na próxima função em camada mais externa, para ver se consegue encontrar o identificador. Isso continuará sendo feito até que ele alcance o escopo global.
* Identificadores globais são uma má idéia. Eles podem levar a nomes ruins para variáveis, conflito de nomes de variáveis e código confuso

### Hoisting

* **hoisting**: before any JavaScript is executed, all function declarations are "hoisted" to the top of their current scope

*hoist: içar, levantar*

Quando o código está sendo interpretado, a declação das funções é elevada ao topo. Hoisting também ocorre com declações de variáveis dentro das funções, porém somente as declarações, não as atribuições.

Abaixo, exemplo de hoisting da função e de variável dentro da função:

```js
sayHi("Julia");

function sayHi(name) {
  console.log(greeting + " " + name);
  var greeting;
}
```

> *Returns:*  
> `undefined` Julia  

O `undefined` é devido à variável greeting

Abaixo, exemplo de hoisting da função e da declaração da variável dentro da função (porém, não ocorre hoisting da atribuição da variável greeting):

```js
sayHi("Julia");

function sayHi(name) {
  console.log(greeting + " " + name);
  var greeting = "Hello";
}
```

> *Returns:*  
> `undefined` Julia  

A declaração da variável é feita no topo do escopo atual (o topo da função). Lembre-se que a declaração é feita, não a atribuição.

Para **evitar erros como esses** as funções devem ser declaras no topo dos scripts e as variáveis devem ser declaradas no topo das funções, como abaixo:

```js
function sayHi(name) {
  var greeting = "Hello";
  console.log(greeting + " " + name);
}

sayHi("Julia");
```

> *Returns:*  
> Hello Julia  

#### Resumo hoisting

* O JavaScript iça (hoists) declarações de função e declarações de variável até o topo do escopo atual.
* Atribuições de variáveis não são içadas (hoisted).
* Declare funções e variáveis no topo de seus scripts, então, a sintaxe e o comportamento serão consistentes um com o outro.

### Function expression

Quando uma função é armazenada dentro de uma variável, ela é chamada de expressão de função (**function expression**).

Duas formas de definir função em JavaScript:

* Function declation

```js
function catSays(max) {
  // code here
}

catSays();
```

* Function expression

```js
var catSays = function (max) {
  // code here
};

catSays();
```

Acima, a função é anônima, uma função sem nome, e você a armazenou em uma variável chamada `catSays`. E, se você tentar acessar o valor da variável `catSays`, verá a função sendo retornada de volta para você.

```js
catSays;
```

> *Returns:*  
> function(max) {  
> &nbsp;&nbsp;&nbsp;&nbsp;//code here  
> };

#### Expressões de função e hoisting

Todas as *declarações de funções são içadas (hoisted)* e carregadas antes de o script ser realmente rodado. *Expressões de função não são içadas (hoisted)*, uma vez que elas envolvem atribuição de variável e somente declarações de variáveis são içadas (hoisted). A expressão de função não será carregada até que o interpretador chegue a ela no script.

### Padrões com expressões de funções

#### Funções como parâmetros

Ter a possibilidade de armazenar uma função em uma variável torna realmente simples passar uma função para outra. Uma função que é passada para outra é chamada de **callback**.

Vamos supor que você tenha uma função `helloCat()` e queira que ela retorne "Hello", seguido de uma string de "meows", como você tinha com a `catSays`. Bem, em vez de refazer todo o trabalho duro, você pode fazer a `helloCat()` aceitar uma função callback e passar a `catSays`.

```js
// expressão de função catSays
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// declaração de função helloCat aceitando um callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// passa catSays como função callback
helloCat(catSays);
```

#### Expressões de função inline

Uma expressão de função é quando uma função é atribuída a uma variável. Em JavaScript, isso também pode acontecer quando você passa uma função inline como um argumento para outra função. Tome o exemplo `favoriteMovie` como referência:

```js
// Expressão de função que atribui a função displayFavorite 
// à variável favoriteMovie
var favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};

// Declaração de função que possui dois parâmetros: uma função para exibir
// uma mensagem, juntamente ao nome de um filme
function movies(messageFunction, name) {
  messageFunction(name);
}

// Chama a função movies, passa a função favoriteMovie e o nome do filme
movies(favoriteMovie, "Finding Nemo");
```

> *Returns:* My favorite movie is Finding Nemo

Mas você poderia ter contornado a primeira atribuição da função, passando a função para a função inline `movies()`.

```js
// Declaração de função que recebe dois argumentos: uma função para exibir
// uma mensagem, juntamente ao nome de um filme
function movies(messageFunction, name) {
  messageFunction(name);
}

// Chama a função movies, passa a função e o nome do filme
movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");
```

> *Returns:* My favorite movie is Finding Nemo

Esse tipo de sintaxe, escrevendo expressões de função que passam uma função para outra **inline**, é bem comum em JavaScript.

#### Por que utilizar expressões anônimas de função inline?

Utilizar uma expressão anônima de função inline pode parecer como uma coisa não muito útil de início. Por que definir uma função que pode somente ser utilizada uma única vez e que você não pode nem chamar pelo nome?

Expressões anônimas de função inline são geralmente utilizadas com callbacks de funções que provavelmente não serão reutilizadas em outro lugar. Sim, você poderia armazenar a função em uma variável, dar um nome a ela e passá-la como você viu nos exemplos acima. No entanto, quando já é de seu conhecimento que a função não será reutilizada, defini-la inline pode economizar muitas linhas de código.

***

## Aula 6: Arrays

***

## Aula 7: Objetos